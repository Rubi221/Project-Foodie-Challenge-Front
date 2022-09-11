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
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule } from '@angular/material/card';
import { RegisterComponent } from './components/register/register.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatTabsModule } from '@angular/material/tabs';

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
    RegisterComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatPaginatorModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
