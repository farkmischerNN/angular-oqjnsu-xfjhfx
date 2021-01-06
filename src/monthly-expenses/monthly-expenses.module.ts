
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core/';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap/';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MonthlyExpensesComponent } from './monthly-expenses.component';
import { RepeatType3Component } from './repeat-section.type';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    NgxDatatableModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      types: [
        { name: 'repeat3', component: RepeatType3Component },
      ],
    }),
  ],
  declarations: [
    MonthlyExpensesComponent,
    RepeatType3Component,
  ],
  bootstrap: [ MonthlyExpensesComponent, ]
})
export class MonthlyExpensesModule { }




