import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ClienteCreateComponent } from './cliente/cliente-create/cliente-create.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ClienteUpdateComponent } from './cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './cliente/cliente-delete/cliente-delete.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'main', component: MainComponent },
  { path: 'cliente-create', component: ClienteCreateComponent },
  { path: 'cliente-list', component: ClienteListComponent },
  { path: 'cliente-update', component: ClienteUpdateComponent },
  { path: 'cliente-delete', component: ClienteDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
