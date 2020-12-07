import { HeaderComponent } from './layout/horizontal/header/header.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { LoginComponent } from './modules/auth/login/login.component';
import { SighnupComponent } from './modules/auth/sighnup/sighnup.component';
import { AngularFireModule } from '@angular/fire';
import { HomeComponent } from './core/modules/home/home.component';
import { Page404Component } from './core/modules/page404/page404.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { RegisterPatientComponent } from './core/modules/registerPatient/register-patient.component';
import { MedicalPrescriptionComponent } from './core/modules/medicalPrescribtion/medical-prescription/medical-prescription.component';
import { AdminComponent } from './core/modules/admin/admin.component';
import { MatTableModule } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { UpdatePatientComponent } from './core/modules/update-patient/update-patient.component';
import { DischargePatientComponent } from './core/modules/discharge-patient/discharge-patient.component';
import { PrescribeMedicationComponent } from './core/modules/prescribe-medication/prescribe-medication.component';
import { ConsultPatientComponent } from './core/modules/consult-patient/consult-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SighnupComponent,
    HomeComponent,
    Page404Component,
    HeaderComponent,
    RegisterPatientComponent,
    MedicalPrescriptionComponent,
    AdminComponent,
    UpdatePatientComponent,
    DischargePatientComponent,
    PrescribeMedicationComponent,
    ConsultPatientComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatTooltipModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    LoginComponent,
    SighnupComponent,
    HeaderComponent,
    MedicalPrescriptionComponent,
    RegisterPatientComponent,
  ],
})
export class AppModule {}
