
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core/';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap/';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NonTaxableIncomeComponent } from './nontaxable-income.component';
import { PerPrefixWrapper } from './per-prefix.type';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    NgxDatatableModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      wrappers: [{ name: 'per-prefix', component: PerPrefixWrapper }],
    }),
  ],
  declarations: [
    NonTaxableIncomeComponent,
    PerPrefixWrapper,
  ],
  bootstrap: [ NonTaxableIncomeComponent, ]
})
export class NonTaxableIncomeModule { }




