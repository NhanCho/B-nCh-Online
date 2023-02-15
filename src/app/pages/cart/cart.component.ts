import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  constructor(private service:CartService){}
  cart:any;
  addCart(itemCart:any){
    this.service.addCart(itemCart);
  }
  ngOnInit(): void {
    this.cart=this.service.getCart();
  }


  }




