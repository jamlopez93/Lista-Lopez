import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEstudiantesComponent } from './lista-estudiantes/lista-estudiantes.component';
import { MayusculaPipe } from './mayuscula.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListaEstudiantesComponent,
    MayusculaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
