import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallengeFormComponent } from './components/challenge-form/challenge-form.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { LookChallengeComponent } from './components/challenges/look-challenge/look-challenge.component';
import { HomeComponent } from './components/home/home.component';
import { LearningComponent } from './components/learning/learning.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: '', redirectTo: '/register', pathMatch: 'full'
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
        path: '', component: HomeComponent
      },
      {
        path: 'challenges', component: ChallengesComponent
      },
      {
        path: 'challenges/create', component: ChallengeFormComponent
      },
      {
        path: 'challenges/update/:id', component: ChallengeFormComponent
      },
      { 
        path: 'challenges/:id', component: LookChallengeComponent 
      },
      {
        path: 'learning', component: LearningComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
