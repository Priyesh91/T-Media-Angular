import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component'


import { WireFrame } from './components/wireframeComponent/wireframe.component';
import { NavBar } from './components/wireframeComponent/navbar/navbar.component';
import { PostComp } from './components/wireframeComponent/postcomp/postcomp.component';
import { PostSearch } from './components/wireframeComponent/postcomp/postSearch/postsearch.component';
import { PostCompOne } from './components/wireframeComponent/postcomp/postcompone/postcompone.component';
import { PostCompTwo } from './components/wireframeComponent/postcomp/postcomptwo/postcomptwo.component';
import { PostCompThree } from './components/wireframeComponent/postcomp/postcompthree/postcompthree.component';
import { Sidebar } from './components/wireframeComponent/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    WireFrame,
    NavBar,
    PostComp,
    PostSearch,
    PostCompOne,
    PostCompTwo,
    PostCompThree,
    Sidebar
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
