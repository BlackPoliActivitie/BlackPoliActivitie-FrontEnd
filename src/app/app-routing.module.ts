import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearTweetComponent } from './crear-tweet/crear-tweet.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { VerTweetsComponent } from './ver-tweets/ver-tweets.component';

const routes: Routes = [
  {path: '', redirectTo: '/crearUsuario',pathMatch: 'full'},
  {path: 'crearTweet', component: CrearTweetComponent},
  {path: 'crearUsuario', component: RegistroUsuarioComponent},
  {path: 'verTweets', component: VerTweetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
