import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { NavBar } from './navbar/navbar.component';
import { PostComp } from './postcomp/postcomp.component';
import { Sidebar } from './sidebar/sidebar.component';

@NgModule({
  imports:      [ BrowserModule],
  declarations: [ NavBar, PostComp, Sidebar],  
})

@Component ({
  selector: 'wire-frame',
  templateUrl: './wireframe.component.html',
  styleUrls: ['./wireframe.component.css']
})

export class WireFrame {

}