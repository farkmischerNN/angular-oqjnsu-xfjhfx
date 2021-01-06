import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core/';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap/';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentPageModalModule } from '../student-page-modal/student-page-modal.module';
import { StudentPageModule } from '../student-page/student-page.module';
import { ChangeOfIncomeModule } from '../change-of-income/change-of-income.module';
import { AnnualExpensesModule } from '../annual-expenses/annual-expenses.module';
import { MonthlyExpensesModule } from '../monthly-expenses/monthly-expenses.module';
import { AssetsAndLiabilitiesModule } from '../assets-and-liabilities/assets-and-liabilities.module';
import { TaxableIncomeModule } from '../taxable-income/taxable-income.module';
import { ApplicantModule } from '../applicant/applicant.module';
import { CoApplicantModule } from '../co-applicant/co-applicant.module';
import { AdditionalQuestionsModule } from '../additional-questions/additional-questions.module';
import { NonTaxableIncomeModule } from '../nontaxable-income/nontaxable-income.module';

@NgModule({
  declarations: [ 
    AppComponent,
  ],
  imports: [ 
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    StudentPageModalModule,
    StudentPageModule,
    ChangeOfIncomeModule,
    AnnualExpensesModule,
    MonthlyExpensesModule,
    AssetsAndLiabilitiesModule,
    TaxableIncomeModule,
    ApplicantModule,
    CoApplicantModule,
    AdditionalQuestionsModule,
    NonTaxableIncomeModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyBootstrapModule,
    ],
  providers: [],
  bootstrap: [ AppComponent, ]
})
export class AppModule {
  constructor() {
  }
}