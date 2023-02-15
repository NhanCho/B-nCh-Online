import { DogFolderComponent } from './../../componentsss/dog-folder/dog-folder.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ItemCartComponent } from 'src/app/componentsss/item-cart/item-cart.component';

@NgModule({
  declarations: [DogFolderComponent,ItemCartComponent],
  imports: [
    CommonModule,

    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    DogFolderComponent,
    ItemCartComponent
  ]
})
export class SharedMaterialModule { }
