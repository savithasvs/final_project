// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-card',
//   templateUrl: './card.component.html',
//   styleUrls: ['./card.component.css']
// })
// export class CardComponent implements OnInit {
//   public totalItem : number = 0;
//   public searchTerm !: string;
//   constructor() { }

//   ngOnInit(): void {
//     this.cartService.getProducts()
//     .subscribe(res=>{
//       this.products = res;
//       this.grandTotal = this.cartService.getTotalPrice();
//     })
//   }
//   removeItem(item: any){
//     this.cartService.removeCartItem(item);
//   }
//   emptycart(){
//     this.cartService.removeAllCart();
//   }
//   }
