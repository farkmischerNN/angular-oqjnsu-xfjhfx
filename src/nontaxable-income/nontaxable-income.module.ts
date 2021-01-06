
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core/';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap/';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NonTaxableIncomeComponent } from './nontaxable-income.component';
import { RepeatType2Component } from './repeat-section.type';
import { RepeatTypeGroupComponent } from './repeat-section-group.type';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    NgxDatatableModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      types: [
        { name: 'repeat9', component: RepeatType2Component },
        { name: 'repeat-group', component: RepeatTypeGroupComponent },
      ],
    }),
  ],
  declarations: [
    NonTaxableIncomeComponent,
    RepeatType2Component,
    RepeatTypeGroupComponent,
  ],
  bootstrap: [ NonTaxableIncomeComponent, ]
})
export class NonTaxableIncomeModule { }




