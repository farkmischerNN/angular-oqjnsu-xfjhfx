import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core/';

@Component({
  selector: 'formly-assets-and-liabilities',
  templateUrl: './assets-and-liabilities.component.html',
})
export class AssetsAndLiabilitiesComponent {
validatingForm: FormGroup;
  closeResult = '';

  form = new FormGroup({});
  model: any;
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      className: 'section-label',
      template: '<h5>Assets And Liabilities</h5>',
    },
    {
      key: 'expense1',
      type: 'input',
      templateOptions: {
        label: 'Expense 1'
      }
    },
    {
      key: 'expense2',
      type: 'input',
      templateOptions: {
        label: 'Expense 2'
      }
    },
    {
      key: 'expense3',
      type: 'input',
      templateOptions: {
        label: 'Expense 3'
      }
    },
    {
      key: 'expense4',
      type: 'input',
      templateOptions: {
        label: 'Expense 4'
      }
    },
    {
      key: 'expense5',
      type: 'input',
      templateOptions: {
        label: 'Expense 5'
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
      expense1: 1,
      expense2: 2,
      expense3: 3,
      expense4: 4,
      expense5: 5,
    });
  }


}

