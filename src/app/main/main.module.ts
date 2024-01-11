import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteCreateComponent } from '../cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from '../cliente/cliente-delete/cliente-delete.component';
import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';
import { ClienteUpdateComponent } from '../cliente/cliente-update/cliente-update.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    ClienteCreateComponent,
    ClienteDeleteComponent,
    ClienteListComponent,
    ClienteUpdateComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ]
})
export class MainModule { }
