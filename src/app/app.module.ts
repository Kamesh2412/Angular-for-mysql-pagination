import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HomeServiceService } from './home-service.service';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule } from '@angular/forms'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PaginationModule } from 'ngx-bootstrap/pagination';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
 
  ],
  imports: [HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    PaginationModule.forRoot(),
    NgxPaginationModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      
      //  {path:'contact',component:ContactComponent}
    ])
  ],
  providers: [HomeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
