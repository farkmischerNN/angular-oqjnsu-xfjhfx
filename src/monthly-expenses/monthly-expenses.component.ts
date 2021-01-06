import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core/';

@Component({
  selector: 'formly-monthly-expenses',
  templateUrl: './monthly-expenses.component.html',
})
export class MonthlyExpensesComponent {
validatingForm: FormGroup;
  closeResult = '';

  form = new FormGroup({});
  model: any;
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      className: 'section-label',
      template: '<h5>Monthly Expenses</h5>',
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
      className: 'section-label',
      template: '<h5>Array</h5>',
    },
    {
      key: 'array1',
      type: 'repeat3',
      templateOptions: {
        addText: 'Add Another',
      },
      fieldArray:{
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col-3',
            type: 'input',
            key: 'integer1',
          },
          {
            className: 'col-3',
            type: 'input',
            key: 'string1',
          },
          {
            className: 'col-3',
            type: 'input',
            key: 'money1',
          },
        ]
      },      
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
      array1: [
        {
          integer1: 1,
          string1: 'string 1',
          money1: 100,
        }
      ]
    });
  }


}

