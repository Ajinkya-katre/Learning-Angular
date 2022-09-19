import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontendComponent } from './frontend/frontend.component';
import { BackendComponent } from './backend/backend.component';
import { PhpComponent } from './backend/php/php.component';
import { DatabaseComponent } from './database/database.component';
import { FrameworkComponent } from './framework/framework.component';



@NgModule({
  declarations: [
    AppComponent,
    FrontendComponent,
    BackendComponent,
    PhpComponent,
    DatabaseComponent,
    FrameworkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
