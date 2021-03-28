import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmergencycontactComponent } from './components/fixed/header/emergencycontact/emergencycontact.component';
import { NavbarComponent } from './components/fixed/header/navbar/navbar.component';
import { FooterComponent } from './components/fixed/footer/footer.component';
import { TeamComponent } from './components/team/team.component';
import { HeaderComponent } from './components/fixed/header/header/header.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesComponent } from './components/services/services.component';
import { PreloaderComponent } from './components/fixed/preloader/preloader.component';
import { BannerLogoComponent } from './components/fixed/header/banner-logo/banner-logo.component';
import { MapComponent } from './components/contact/map/map.component';
import { ContactComponent } from './components/contact/contact/contact.component';
import { SendemailComponent } from './components/contact/sendemail/sendemail.component';
import { ContactinfoComponent } from './components/contact/contactinfo/contactinfo.component';
import { ContacttitleComponent } from './components/contact/contacttitle/contacttitle.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home/home.component';
import { SliderComponent } from './components/home/slider/slider.component';
import { ReparturComponent } from './components/fixed/header/navbar/repartur/repartur.component';
import { DISPLAYBRUCHComponent } from './components/fixed/header/navbar/repartur/displaybruch/displaybruch.component';
import { InfocardComponent } from './components/home/infocard/infocard.component';
import { WASSERSCHADENComponent } from './components/fixed/header/navbar/repartur/wasserschaden/wasserschaden.component';
import { HardwareschadenComponent } from './components/fixed/header/navbar/repartur/hardwareschaden/hardwareschaden.component';
import { SystemfehlerComponent } from './components/fixed/header/navbar/repartur/systemfehler/systemfehler.component';
import { NewsComponent } from './components/home/news/news.component';
import { NewssectionComponent } from './components/home/news/newssection/newssection.component';
import { StickyComponent } from './components/fixed/sticky/sticky.component';
import { AccordionComponent } from './components/fixed/header/navbar/repartur/accordion/accordion.component';
import { SubnavbarComponent } from './components/fixed/header/subnavbar/subnavbar.component';
import { DATENSCHUTZComponent } from './components/fixed/datenschutz/datenschutz.component';

@NgModule({
  declarations: [
    AppComponent,
    EmergencycontactComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    TeamComponent,
    AboutusComponent,
    PricingComponent,
    PortfolioComponent,
    ServicesComponent,
    SliderComponent,
    PreloaderComponent,
    BannerLogoComponent,
    MapComponent,
    ContactComponent,
    SendemailComponent,
    ContactinfoComponent,
    ContacttitleComponent,
    HomeComponent,
    ReparturComponent,
    DISPLAYBRUCHComponent,
    InfocardComponent,
    WASSERSCHADENComponent,
    HardwareschadenComponent,
    SystemfehlerComponent,
    NewsComponent,
    NewssectionComponent,
    StickyComponent,
    AccordionComponent,
    SubnavbarComponent,
    DATENSCHUTZComponent,

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
