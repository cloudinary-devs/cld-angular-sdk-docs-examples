import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CloudinaryModule } from '@cloudinary/ng';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullExampleComponent } from './fullexample.component';
import { QuickstartComponent } from './quickstart.component';

@NgModule({
  declarations: [
    AppComponent,
    QuickstartComponent,
    FullExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CloudinaryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
