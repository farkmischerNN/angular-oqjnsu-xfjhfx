import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-pre-prefix-wrapper',
  template: `
      <label class="col-form-label">per</label>
      <div>
      <ng-template #fieldComponent></ng-template>
      </div>
  `,
})
export class PerPrefixWrapper extends FieldWrapper {
}