import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms' 
import { HttpClientModule } from '@angular/common/http';


import { RodapeComponent } from './rodape/rodape.component';
import { ContadorComponent } from './contador/contador.component';
import { ExibeImagemComponent } from './exibe-imagem/exibe-imagem.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { TemplateFormsComponentComponent } from './forms/template-forms-component/template-forms-component.component';
import { ReactReactiveFormsComponent } from './forms/react-reactive-forms/react-reactive-forms.component';
import { UsuarioFormComponent } from './forms/usuario-form/usuario-form.component';
import { FormsimplesComponent } from './formsimples/formsimples.component';
import { FormreativoComponent } from './formreativo/formreativo.component';
import { FormreativoListaComponent } from './formreativo-lista/formreativo-lista.component';
import { FormcontatoComponent } from './formcontato/formcontato.component';


@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    ContadorComponent,
    ExibeImagemComponent,
    PerfilComponent,    
    DiretivasComponent, 
    TemplateFormsComponentComponent, 
    ReactReactiveFormsComponent,
    UsuarioFormComponent,
    FormsimplesComponent,
    FormreativoComponent,
    FormreativoListaComponent,
    FormcontatoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
