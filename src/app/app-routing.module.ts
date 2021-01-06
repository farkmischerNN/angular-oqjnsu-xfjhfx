import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MonthlyExpensesComponent } from '../monthly-expenses/monthly-expenses.component';
import { AnnualExpensesComponent } from '../annual-expenses/annual-expenses.component';
import { ChangeOfIncomeComponent } from '../change-of-income/change-of-income.component';
import { StudentPageModalComponent } from '../student-page-modal/student-page-modal.component';
import { StudentPageComponent } from '../student-page/student-page.component';
import { AssetsAndLiabilitiesComponent } from '../assets-and-liabilities/assets-and-liabilities.component';
import { TaxableIncomeComponent } from '../taxable-income/taxable-income.component';
import { ApplicantComponent } from '../applicant/applicant.component';
import { CoApplicantComponent } from '../co-applicant/co-applicant.component';

const routes: Routes = [
  {
    path: 'student-page-modal',
    component: StudentPageModalComponent,
  },
  {
    path: 'student-page',
    component: StudentPageComponent,
  },
  {
    path: 'change-of-income',
    component: ChangeOfIncomeComponent,
  },
  {
    path: 'annual-expenses',
    component: AnnualExpensesComponent,
  },
  {
    path: 'monthly-expenses',
    component: MonthlyExpensesComponent,
  },
  {
    path: 'assets-and-liabilities',
    component: AssetsAndLiabilitiesComponent,
  },
  {
    path: 'taxable-income',
    component: TaxableIncomeComponent,
  },
  {
    path: 'applicant',
    component: ApplicantComponent,
  },
  {
    path: 'co-applicant',
    component: CoApplicantComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
  }
}
