import { Component, OnInit, Input } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-database-display',
  templateUrl: './database-display.component.html',
  styleUrls: ['./database-display.component.css']
})
export class DatabaseDisplayComponent  {
   @Input('array') array:any;
   object:any=[];
   alldata:any;
  constructor(private api:AppServiceService,private router:Router) { 
    
  }
  // restaurantobj()
  // { 
  //   // console.log('data test',event)
  //   this.api.restaurantobj().subscribe((data)=>{
  //   console.log("data returned from server",data);
  //   console.log("Form value add sucessfully");
  //   }
  //   )}
// book(search:any)
// { 
//   this.api.restaurantobj(search.aadhar).subscribe((data)=>{
//       console.log("data returned from server",data);
//       var totlen = data.docs.length
//     //  console.log(data.docs[0].aadhar);
//       this.arrays.push(data.docs);
//       // console.log("password",data.docs);
//       for(var i=0; i<=totlen; i++)
//       { 
//         this.arrays.push(data.docs[0]);
//         console.log("fetch from database",this.arrays);
//       }
//     });
//   }
  
  ngOnInit(): void {
  }
  getadmin(){
    this.api.getadmin().subscribe(data=>{
      console.log(data);
      console.log('Data was fetching....');
      this.alldata=data;
      this.alldata=this.alldata.rows;
      console.log(this.alldata);
      for(const i in this.alldata){
        if(Object.prototype.hasOwnProperty.call(this.alldata,i)){
          const elt = this.alldata[i];
          console.log(elt.id);
          this.api.getadminId(elt.id).subscribe(res=>{
            console.log(res);
            this.object.push(res);
          })
        }
      }
    })
  
}
  }