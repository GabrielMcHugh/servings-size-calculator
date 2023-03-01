import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeasuringToolsListComponent } from './mTools-list/measuring-tools-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GlobalService } from './global.service';
import { HomePageComponent } from './home-page/home-page.component';
import { MeasureInputComponent } from './mInput/measure-input.component';
import { OthersComponent } from './others/others.component';
import { MeasurementListComponent } from './mList/measurement-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MeasuringToolsListComponent,
    NavbarComponent,
    HomePageComponent,
    MeasureInputComponent,
    OthersComponent,
    MeasurementListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
