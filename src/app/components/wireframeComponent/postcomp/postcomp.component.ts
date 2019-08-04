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
  
}