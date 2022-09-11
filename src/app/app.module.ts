import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import swal from 'sweetalert2';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LearningComponent } from './components/learning/learning.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { LookChallengeComponent } from './components/challenges/look-challenge/look-challenge.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChallengeFormComponent } from './components/challenge-form/challenge-form.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    LearningComponent,
    ChallengesComponent,
    LookChallengeComponent,
    ChallengeFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
