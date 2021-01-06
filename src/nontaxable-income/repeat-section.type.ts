import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-repeat-section1',
  template: ` 

<div *ngFor="let row of field.fieldGroup; let i = index;" class="d-flex justify-content-sm-start mb-5">

{{row.to}}
  <div *ngFor="let field of row.fieldGroup; let h = index;" class="">
  {{field.to}}
  <formly-field class="" [field]="field"></formly-field>  
  </div>
</div>

  `,
})
export class RepeatType2Component extends FieldArrayType {}
