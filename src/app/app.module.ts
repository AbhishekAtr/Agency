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
import { SeoServicesComponent } from './seo-services/seo-services.component';
import { PetRegistrationCaseComponent } from './pet-registration-case/pet-registration-case.component';
import { TeacherTransferCaseComponent } from './teacher-transfer-case/teacher-transfer-case.component';
import { DetectiveCaseStudyComponent } from './detective-case-study/detective-case-study.component';
import { DigitalCenterCaseStudyComponent } from './digital-center-case-study/digital-center-case-study.component';
import { IncouneCaseStudyComponent } from './incoune-case-study/incoune-case-study.component';
import { PtsCaseStudyComponent } from './pts-case-study/pts-case-study.component';
import { InventoryManagementCaseStudyComponent } from './inventory-management-case-study/inventory-management-case-study.component';
import { SsdPhotographyComponent } from './ssd-photography/ssd-photography.component';
import { CaseStudyIndianMandarinsComponent } from './case-study-indian-mandarins/case-study-indian-mandarins.component';
import { CaseStudyEasePharmaComponent } from './case-study-ease-pharma/case-study-ease-pharma.component';
import { SaiCreationCaseStudyComponent } from './sai-creation-case-study/sai-creation-case-study.component';
import { CaseStudyAmbarMonicaComponent } from './case-study-ambar-monica/case-study-ambar-monica.component';
import { OurAssociatesComponent } from './our-associates/our-associates.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

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
  {path:'seo-services', component: SeoServicesComponent},
  {path:'pet-registration-case-study', component: PetRegistrationCaseComponent},
  {path: 'teacher-transfer-management-system-case-study', component: TeacherTransferCaseComponent},
  {path: 'detective-case-study', component: DetectiveCaseStudyComponent},
  {path: 'digital-center-case-study', component: DigitalCenterCaseStudyComponent},
  {path: 'incoune-case-study', component: IncouneCaseStudyComponent},
  {path: 'pts-case-study', component: PtsCaseStudyComponent},
  {path: 'inventory-management-case-study', component: InventoryManagementCaseStudyComponent},
  {path: 'ssd-photography', component: SsdPhotographyComponent},
  {path: 'case-study-indian-mandarins', component: CaseStudyIndianMandarinsComponent},
  {path: 'case-study-ease-pharma', component: CaseStudyEasePharmaComponent},
  {path: 'sai-creation-case-study', component: SaiCreationCaseStudyComponent},
  {path: 'case-study-ambar-monica', component: CaseStudyAmbarMonicaComponent},
  {path: 'our-associates', component: OurAssociatesComponent},
  {path: 'contact-us', component: ContactUsComponent}
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
    SeoServicesComponent,
    PetRegistrationCaseComponent,
    TeacherTransferCaseComponent,
    DetectiveCaseStudyComponent,
    DigitalCenterCaseStudyComponent,
    IncouneCaseStudyComponent,
    PtsCaseStudyComponent,
    InventoryManagementCaseStudyComponent,
    SsdPhotographyComponent,
    CaseStudyIndianMandarinsComponent,
    CaseStudyEasePharmaComponent,
    SaiCreationCaseStudyComponent,
    CaseStudyAmbarMonicaComponent,
    OurAssociatesComponent,
    ContactUsComponent
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
