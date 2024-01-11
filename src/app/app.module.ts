import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Main
import { MainComponent } from './main/main.component';

//Cliente
import { ClienteCreateComponent } from './cliente/cliente-create/cliente-create.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ClienteDeleteComponent } from './cliente/cliente-delete/cliente-delete.component';
import { ClienteUpdateComponent } from './cliente/cliente-update/cliente-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteCreateComponent,
    ClienteListComponent,
    ClienteDeleteComponent,
    ClienteUpdateComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
