import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';

import { SharedMaterialModule } from 'src/app/modules/shared-material/shared-material.module';

@NgModule({
    declarations: [
        CartComponent
    ],
    imports: [
        CommonModule,
        CartRoutingModule,
        SharedMaterialModule

    ]
})
export class CartModule { }
