import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallengeFormComponent } from './components/challenge-form/challenge-form.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { LookChallengeComponent } from './components/challenges/look-challenge/look-challenge.component';
import { FormRecetaComponent } from './components/form-receta/form-receta.component';
import { ForoComponent } from './components/foro/foro.component';
import { HomeComponent } from './components/home/home.component';
import { LearningComponent } from './components/learning/learning.component';
import { LoginComponent } from './components/login/login.component';
import { MyChallengesComponent } from './components/my-challenges/my-challenges.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'home', component: NavbarComponent,
    children: 
    [
      {
        path: 'foro', component: ForoComponent
      },
      {
        path: '', redirectTo: '/foro', pathMatch: 'full'
      },
      {
        path: 'perfil', component: PerfilComponent
      },
      {
        path: '', redirectTo: '/perfil', pathMatch: 'full'
      },
      {
        path: '', component: HomeComponent
      },
      {
        path: 'challenges', component: ChallengesComponent
      },
      {
        path: 'challenges/create', component: ChallengeFormComponent
      },
      {
        path: 'myChallenges', component: MyChallengesComponent
      },
      {
        path: 'challenges/update/:id', component: ChallengeFormComponent
      },
      { 
        path: 'challenges/:id', component: LookChallengeComponent 
      },
      { 
        path: 'myChallenges/:id', component: LookChallengeComponent 
      },
      {
        path: 'learning', component: LearningComponent
      },
      {
        path: 'learning/create', component: FormRecetaComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
