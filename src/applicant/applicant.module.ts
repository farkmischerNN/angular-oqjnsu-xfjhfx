
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core/';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap/';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ApplicantComponent } from './applicant.component';

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
    ApplicantComponent,
  ],
  bootstrap: [ ApplicantComponent, ]
})
export class ApplicantModule { }




