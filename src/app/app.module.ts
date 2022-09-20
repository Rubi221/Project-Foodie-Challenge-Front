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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { RegisterComponent } from './components/register/register.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { ForoComponent } from './components/foro/foro.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { FormRecetaComponent } from './components/form-receta/form-receta.component';
import { MyChallengesComponent } from './components/my-challenges/my-challenges.component';
import {MatSliderModule} from '@angular/material/slider'; 

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
    ForoComponent,
    FormRecetaComponent,
    MyChallengesComponent,
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
    MatTabsModule,
    MatDividerModule,
    MatProgressBarModule,
    HttpClientModule,
    MatDialogModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
