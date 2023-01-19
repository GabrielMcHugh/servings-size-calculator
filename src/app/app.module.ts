import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeasuringToolsComponent } from './measuring-tools/measuring-tools.component';
import { MeasuringToolsListComponent } from './measuring-tools-list/measuring-tools-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GlobalService } from './global.service';
import { HomePageComponent } from './home-page/home-page.component';
import { MeasureInputComponent } from './measure-input/measure-input.component';
import { OthersComponent } from './others/others.component';

@NgModule({
  declarations: [
    AppComponent,
    MeasuringToolsComponent,
    MeasuringToolsListComponent,
    NavbarComponent,
    HomePageComponent,
    MeasureInputComponent,
    OthersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
