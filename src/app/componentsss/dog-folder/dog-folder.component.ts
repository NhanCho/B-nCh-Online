import { CartService } from './../../service/cart.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dog-folder',
  templateUrl: './dog-folder.component.html',
  styleUrls: ['./dog-folder.component.scss']
})
export class DogFolderComponent {
  constructor(private service:CartService){}

  @Output() addCartCallBack: EventEmitter<any> = new EventEmitter();

  addCart(item:any){
    this.service.addCart(item);
  }
  @Input()
  item:any;
}
