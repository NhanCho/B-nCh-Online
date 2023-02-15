import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dog-folder',
  templateUrl: './dog-folder.component.html',
  styleUrls: ['./dog-folder.component.scss']
})
export class DogFolderComponent {
  @Input()
  item:any;

  @Output()
  itemChange = new EventEmitter();

  added(item: any){
    this.itemChange.emit(item);
  }
}
