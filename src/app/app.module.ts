import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarousalComponent } from './carousal/carousal.component';
import { ProfileComponent } from './profile/profile.component';
import { SponsersComponent } from './sponsers/sponsers.component';
import { MediaComponent } from './media/media.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FooterComponent } from './footer/footer.component';
import { CounterComponent } from './counter/counter.component';
import { Counter2Component } from './counter2/counter2.component';
import { FastandupComponent } from './fastandup/fastandup.component';
import { MediacomponentComponent } from './mediacomponent/mediacomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarousalComponent,
    ProfileComponent,
    SponsersComponent,
    MediaComponent,
    ContactComponent,
    TestimonialComponent,
    FooterComponent,
    CounterComponent,
    Counter2Component,
    FastandupComponent,
    MediacomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule
    
  ],
  schemas :[NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
