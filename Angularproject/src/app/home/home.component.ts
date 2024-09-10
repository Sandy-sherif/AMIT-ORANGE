import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  /* mode=true;

  light(e:{}){
    console.log('event',e);
    this.mode=true;
  }
  dark(dark:{}){
    console.log('dark',dark)
    this.mode=false
  } */

  image="https://iili.io/HnpsgFR.jpg";
  getimage(image:HTMLImageElement){
    console.log(image.src);
    this.image=image.src;
  }


}
