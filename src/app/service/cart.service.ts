import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart = new Array();

  getCart(){
    return this.cart;
  }
  addCart(item:any){
    this.cart.push(
      {
        item: item,
        quantity:1,
      }
      )
  }
}
