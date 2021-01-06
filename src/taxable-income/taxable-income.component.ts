import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core/';

@Component({
  selector: 'formly-taxable-income',
  templateUrl: './taxable-income.component.html',
})
export class TaxableIncomeComponent {
validatingForm: FormGroup;
  closeResult = '';

  form = new FormGroup({});
  model: any;
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      className: 'section-label',
      template: '<h5>Taxable Income</h5>',
    },
    {
      key: 'income1',
      type: 'input',
      templateOptions: {
        label: 'Income 1'
      }
    },
    {
      key: 'income2',
      type: 'input',
      templateOptions: {
        label: 'Income 2'
      }
    },
    {
      key: 'income3',
      type: 'input',
      templateOptions: {
        label: 'Income 3'
      }
    },
    {
      key: 'income4',
      type: 'input',
      templateOptions: {
        label: 'Income 4'
      }
    },
    {
      key: 'income5',
      type: 'input',
      templateOptions: {
        label: 'Income 5'
      }
    },
  ];

  constructor() {
    this.fetch((data) => this.model = data);
  }

  ngInit(){
  }

  submit() {
    alert(JSON.stringify(this.model));
  }

  fetch(cb) {
    cb({
      income1: 1,
      income2: 2,
      income3: 3,
      income4: 4,
      income5: 5,
    });
  }


}

