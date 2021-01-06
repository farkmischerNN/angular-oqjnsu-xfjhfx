import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core/';

@Component({
  selector: 'formly-nontaxable-income',
  templateUrl: './nontaxable-income.component.html',
})
export class NonTaxableIncomeComponent {
validatingForm: FormGroup;
  closeResult = '';

  form = new FormGroup({});
  model: any;
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      className: 'section-label',
      template: '<h5>NonTaxable Income</h5>',
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
      key: 'showGroupSection',
      type: 'checkbox',
      className: 'col-12',
      templateOptions:{
        label: 'Show Group Section (Working)',
      },
    },    
    {
      type: 'repeat-group',
      expressionProperties: {
            'templateOptions.disabled': '!model.showGroupSection',
          },
      fieldGroup: [
          {
            type: 'input',
            templateOptions: {
              required: true,
            },
          },
          {
            template: '<span>per</span>'
          },
          {
            type: 'input',
            templateOptions: {
              type: 'number',
            },
          },
        ],
    },
    {
      key: 'showArraySection',
      type: 'checkbox',
      className: 'col-12',
      templateOptions:{
        label: 'Show Array Section (Not Working)',
      },
    }, 
    {
      key: 'arraySections',
      type: 'repeat9',
      expressionProperties: {
            'templateOptions.disabled': '!model.showArraySection',
          },      
      fieldArray: { 
        fieldGroup: [
          {
            type: 'input',
            key: 'input1',
            templateOptions: {
              required: true,
            },
          },
          {
            template: '<span>per</span>'
          },
          {
            type: 'input',
            templateOptions: {
              type: 'number',
            },
          },
        ],
      },
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
      showGroupSection: true,
      showArraySection: true,
      arraySections: [
        {
          input1: 1,
        },
      ]
    });
  }


}

