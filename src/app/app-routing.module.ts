import { AdmitPatientComponent } from './core/modules/admit-patient/admit-patient.component';
import { AdminComponent } from './core/modules/admin/admin.component';
import { AdminGuard } from './core/gaurds/admin/admin.guard';
import { Page404Component } from './core/modules/page404/page404.component';
import { DoctorGuard } from './core/gaurds/doctor/doctor.guard';
import { ChargeNurseGuard } from './core/gaurds/chargeNurse/charge-nurse.guard';
import { MedicalPrescriptionComponent } from './core/modules/medicalPrescribtion/medical-prescription/medical-prescription.component';
import { RegisterPatientComponent } from './core/modules/registerPatient/register-patient.component';
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { HomeComponent } from './core/modules/home/home.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SighnupComponent } from './modules/auth/sighnup/sighnup.component';

const redirectLoggedInToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SighnupComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'registerPatient',
    component: RegisterPatientComponent,
    canActivate: [ChargeNurseGuard],
    data: { authGuardPipe: redirectLoggedInToLogin },
  },
  {
    path: 'admitPatient',
    component: AdmitPatientComponent,
    canActivate: [ChargeNurseGuard],
    data: { authGuardPipe: redirectLoggedInToLogin },
  },
  {
    path: 'prescription',
    component: MedicalPrescriptionComponent,
    canActivate: [DoctorGuard],
    data: { authGuardPipe: redirectLoggedInToLogin },
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToLogin },
  },
  {
    path: '**',
    component: Page404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
