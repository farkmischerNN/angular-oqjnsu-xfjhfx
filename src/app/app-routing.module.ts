import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeOfIncomeComponent } from '../change-of-income/change-of-income.component';


import { StudentPageModalComponent } from '../student-page-modal/student-page-modal.component';
import { StudentPageComponent } from '../student-page/student-page.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
  }
}
