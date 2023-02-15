import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shoppingPage';
  // Array=['Arr1','Arr2','Arr3','Arr4','Arr5'];
  // value = 'Clear me';
  items:Array<any>=[
    {
      id:1,
      name:"Black Poodle",
      image:"../assets/blackdog.jpg",
      description:"This is dog 1",
      price: 2000000,
      outOfOrder:true,
    },
    {
      id:2,
      name:"Brown Poodle",
      image:"../assets/browndog.jpg",
      description:"This is dog 2",
      price: 2000000,
      outOfOrder:true,
    },
    {
      id:3,
      name:"Shepherd Dog",
      image:"../assets/dog.jpg",
      description:"This is dog 3",
      price: 5000000,
      outOfOrder:false,
    },
    {
      id:4,
      name:"Pomeranian",
      image:"../assets/pome.jpg",
      description:"This is dog 4",
      price: 4000000,
      outOfOrder:false,
    },
    {
      id:5,
      name:"Corgi",
      image:"../assets/Corgi2.jpg",
      description:"This is dog 5",
      price: 6000000,
      outOfOrder:true,
    },
    {
      id:6,
      name:"Dachshund",
      image:"../assets/sauDog.jfif",
      description:"This is dog 6",
      price: 2000000,
      outOfOrder:false,
    },
    {
      id:7,
      name:"Samoyed",
      image:"../assets/samoyed.jpg",
      description:"This is dog 7",
      price: 2000000,
      outOfOrder:true,
    },
    {
      id:8,
      name:"Dog 8",
      image:"../assets/browndog.jpg",
      description:"This is dog 8",
      price: 2000000,
      outOfOrder:true,
    },
    {
      id:9,
      name:"Dog 9",
      image:"../assets/blackdog.jpg",
      description:"This is dog 9",
      price: 2000000,
      outOfOrder:true,
    }, {
      id:10,
      name:"Dog 10",
      image:"../assets/browndog.jpg",
      description:"This is dog 10",
      price: 2000000,
      outOfOrder:true,
    },
  ]

  itemChange(item: any){
    console.log(item);
  }
}
