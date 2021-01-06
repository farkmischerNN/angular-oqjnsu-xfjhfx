import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-repeat-section3',
  template: `
 

<div *ngFor="let field of field.fieldGroup; let i = index;" class="row">
  <formly-field class="col" [field]="field"></formly-field>
    <button class="btn btn-danger col-2" type="button"  data-bs-dismiss="modal" (click)="remove(i)">Remove Item</button>
</div>

<div style="margin:30px 0;">
	<button class="btn btn-primary" type="button" (click)="add()">{{ to.addText }}</button>
</div>
  `,
})
export class RepeatType3Component extends FieldArrayType {}
