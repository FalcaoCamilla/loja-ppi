import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionaProdutoComponent } from './adiciona-produto/adiciona-produto.component';
import { ExibeProdutoComponent } from './exibe-produto/exibe-produto.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: 'produtos', component: ExibeProdutoComponent},
  {path: 'produtos/adicionar', component: AdicionaProdutoComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
