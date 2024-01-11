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
import { ClienteCreateModule } from './cliente/cliente-create/cliente-create.module';
import { ClienteUpdateModule } from './cliente/cliente-update/cliente-update.module';
import { ClienteListModule } from './cliente/cliente-list/cliente-list.module';
import { ClienteDeleteModule } from './cliente/cliente-delete/cliente-delete.module';
import { HttpClientModule } from '@angular/common/http';

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
    AppRoutingModule,
    HttpClientModule,
    ClienteCreateModule,
    ClienteUpdateModule,
    ClienteListModule,
    ClienteDeleteModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
