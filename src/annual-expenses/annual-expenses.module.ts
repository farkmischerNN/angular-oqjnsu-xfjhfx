
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core/';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap/';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AnnualExpensesComponent } from './annual-expenses.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    NgxDatatableModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot(),
  ],
  declarations: [
    AnnualExpensesComponent,
  ],
  bootstrap: [ AnnualExpensesComponent, ]
})
export class AnnualExpensesModule { }




