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
    for(let i=0; i< this.cart.length; i++){
      if(this.cart[i].item.id == item.id){
        this.cart[i].quantity +=1;
        console.log(this.cart);
        return;
      }
    }
    this.cart.push(
      {
        item: item,
        quantity:1,
      }
      )
  }
}
