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

const appRoutes: Routes=[
  {path:'', component: HomeComponent},
  {path:'automation', component: AutomationComponent},
  {path:'marketing', component: MarketingComponent},
  {path:'website-development', component: WebsiteDevelopmentComponent},
  {path:'about-us', component: AboutUsComponent},
  {path:'our-portfolio', component: OurPortfolioComponent},
  {path:'billing-software', component: BillingSoftwareComponent},
  {path:'ios-apps', component: IosAppComponent},
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
    IosAppComponent
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
