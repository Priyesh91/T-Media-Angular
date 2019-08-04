import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PostSearch } from './postSearch/postsearch.component';



@NgModule({
  imports:      [ BrowserModule],
  declarations: [ PostSearch],  
})

@Component ({
  selector: 'post-comp',
  templateUrl: './postcomp.component.html',
  styleUrls: [ './postcomp.component.css']
})

export class PostComp {
  //properties
  name = "PostComp";
  age = 20;

  constructor(){
    console.log(this.name);
    console.log(this.age);
    this.increaseAge();
    console.log(this.age);
  }

  //Method
  increaseAge() {
    this.age = this.age + 20;
  }

}