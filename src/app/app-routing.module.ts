import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './services/auth.guard';

import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'precios', component: PreciosComponent },
  // añadir el guard a 'protegida' para que solo se permita entrar en 'protegida' si se cumple
  // el guard.
  { path: 'protegida',
    component: ProtegidaComponent,
    // canActivate es una propiedad que es un array con todos los guard que se deben cumplir
    // para entrar en la página.
    canActivate: [ AuthGuard ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
