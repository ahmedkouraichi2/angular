import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';


@NgModule({
  declarations: [
    AppComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
