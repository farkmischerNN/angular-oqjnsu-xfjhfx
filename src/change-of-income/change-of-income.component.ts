jimport { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core/';

@Component({
  selector: 'formly-change-of-income',
  templateUrl: './cheange-of-income.component.html',
})
export class ChangeOfIncomeComponent {
validatingForm: FormGroup;
  closeResult = '';

  form = new FormGroup({});
  model: any;
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      className: 'section-label',
      template: '<h5>Change Of Income</h5>',
    },
    {
      fieldGroup: [
        {
          className: 'col-8',
          template: '',
        }
      ]
    },
  ];

  constructor() {
    this.fetch((data) => this.model = data);
  }

  ngInit(){
  }

  submit() {
    //alert(JSON.stringify(this.model));
  }

  fetch(cb) {
    cb({
      incomeChanged: true,
      appChangeAmount: 0,
      coAppChangeAmount: 0,
      appChange1: false,
      coAppChange1: false,
      appChagne2: false,
      coAppChange2: false,
      appChange3: false,
      coAppChange3: false,
      appChane4: false,
      coAppChange4: false,
    });
  }


}

