import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { DogFolderComponent } from './componentsss/dog-folder/dog-folder.component';
import { RouterModule } from '@angular/router';

import { SharedMaterialModule } from './modules/shared-material/shared-material.module';
// import { ItemCartComponent } from './componentsss/item-cart/item-cart.component';
@NgModule({
  declarations: [
    AppComponent,
    // ItemCartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,

    SharedMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
