import { DISPLAYBRUCHComponent } from './components/fixed/header/navbar/repartur/displaybruch/displaybruch.component';
import { ReparturComponent } from './components/fixed/header/navbar/repartur/repartur.component';
import { TeamComponent } from './components/team/team.component';
import { HomeComponent } from './components/home/home/home.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact/contact.component';
import { WASSERSCHADENComponent } from './components/fixed/header/navbar/repartur/wasserschaden/wasserschaden.component';
import { HardwareschadenComponent } from './components/fixed/header/navbar/repartur/hardwareschaden/hardwareschaden.component';
import { SystemfehlerComponent } from './components/fixed/header/navbar/repartur/systemfehler/systemfehler.component';
import { NewssectionComponent } from './components/home/news/newssection/newssection.component';
import { DATENSCHUTZComponent } from './components/fixed/datenschutz/datenschutz.component';

const routes: Routes = [
  {path: 'kontakt', component: ContactComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'aboutus' , component: TeamComponent},
  // {path: 'repartur' , component: ReparturComponent},
  {path: 'displaybruch' , component: DISPLAYBRUCHComponent},
  {path: 'wasserschaden' , component: WASSERSCHADENComponent},
  {path: 'hardwareschaden', component: HardwareschadenComponent},
  {path: 'systemfehler', component: SystemfehlerComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'repartur', redirectTo: 'displaybruch',  },
  { path: 'news', component: NewssectionComponent},
  { path: 'DATENSCHUTZ', component: DATENSCHUTZComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
