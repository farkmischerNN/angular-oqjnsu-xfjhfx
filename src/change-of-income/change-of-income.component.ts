import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core/';

@Component({
  selector: 'formly-change-of-income',
  templateUrl: './change-of-income.component.html',
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
      fieldGroupClassName: "row",
      fieldGroup: [
        {
          className: 'col-6',
          template: '',
        },
        {
          className: 'col-3',
          template: 'Applicant',
        },
        {
          className: 'col-3',
          template: 'Co Applicant'
        }
      ]
    },
    {
      fieldGroupClassName: "row",
      fieldGroup: [
        {
          className: 'col-6',
          template: 'Change 1',
        },
        {
          className: 'col-3',
          type: 'checkbox',
          key: 'appChange1',
        },
        {
          className: 'col-3',
          type: 'checkbox',
          key: 'coAppChange1'
        }
      ]
    },
    {
      fieldGroupClassName: "row",
      fieldGroup: [
        {
          className: 'col-6',
          template: 'Change 2',
        },
        {
          className: 'col-3',
          type: 'checkbox',
          key: 'appChange2',
        },
        {
          className: 'col-3',
          type: 'checkbox',
          key: 'coAppChange2'
        }
      ]
    },
    {
      fieldGroupClassName: "row",
      fieldGroup: [
        {
          className: 'col-6',
          template: 'Change 3',
        },
        {
          className: 'col-3',
          type: 'checkbox',
          key: 'appChange3',
        },
        {
          className: 'col-3',
          type: 'checkbox',
          key: 'coAppChange3'
        }
      ]
    },
    {
      fieldGroupClassName: "row",
      fieldGroup: [
        {
          className: 'col-6',
          template: 'Change 4',
        },
        {
          className: 'col-3',
          type: 'checkbox',
          key: 'appChange4',
        },
        {
          className: 'col-3',
          type: 'checkbox',
          key: 'coAppChange4'
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
    alert(JSON.stringify(this.model));
  }

  fetch(cb) {
    cb({
      incomeChanged: true,
      appChangeAmount: 0,
      coAppChangeAmount: 0,
      appChange1: false,
      coAppChange1: false,
      appChange2: false,
      coAppChange2: false,
      appChange3: false,
      coAppChange3: false,
      appChange4: false,
      coAppChange4: false,
    });
  }


}

