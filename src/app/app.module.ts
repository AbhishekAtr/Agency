import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AutomationComponent } from './automation/automation.component';
import { PopupComponent } from './popup/popup.component';
import { MarketingComponent } from './marketing/marketing.component';
import { WebsiteDevelopmentComponent } from './website-development/website-development.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurPortfolioComponent } from './our-portfolio/our-portfolio.component';
import { BillingSoftwareComponent } from './billing-software/billing-software.component';
import { IosAppComponent } from './ios-app/ios-app.component';
import { AndroidAppsComponent } from './android-apps/android-apps.component';
import { InventorySoftwareComponent } from './inventory-software/inventory-software.component';
import { EcommerceSeoComponent } from './ecommerce-seo/ecommerce-seo.component';

const appRoutes: Routes=[
  {path:'', component: HomeComponent},
  {path:'Automation', component: AutomationComponent},
  {path:'Marketing-maintenance', component: MarketingComponent},
  {path:'Website-Development', component: WebsiteDevelopmentComponent},
  {path:'About-us', component: AboutUsComponent},
  {path:'Our-Portfolio', component: OurPortfolioComponent},
  {path:'Billing-Software', component: BillingSoftwareComponent},
  {path:'Ios-Apps', component: IosAppComponent},
  {path:'Android-apps', component: AndroidAppsComponent},
  {path:'Inventory-Software', component: InventorySoftwareComponent},
  {path:'Ecommerce', component: EcommerceSeoComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AutomationComponent,
    PopupComponent,
    MarketingComponent,
    WebsiteDevelopmentComponent,
    AboutUsComponent,
    OurPortfolioComponent,
    BillingSoftwareComponent,
    IosAppComponent,
    AndroidAppsComponent,
    InventorySoftwareComponent,
    EcommerceSeoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule. forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
