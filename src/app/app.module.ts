import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroe/heroe.module';
import { TekkenModule } from './tekken/tekken.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    TekkenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
