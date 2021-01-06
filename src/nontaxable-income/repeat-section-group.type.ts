import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-repeat-section-group',
  template: ` 
<div *ngIf="!to.disabled" class="d-flex justify-content-sm-start mb-5">
  <div *ngFor="let field of field.fieldGroup; let h = index;" class="">
  <formly-field class="" [field]="field"></formly-field>  
  </div>
</div>
  `,
})
export class RepeatTypeGroupComponent extends FieldArrayType {}