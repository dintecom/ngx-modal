import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModalModule } from '../../../projects/ngx-modal/src/public-api';

@Component({
  selector: 'no-simple-close-modal',
  template: `
    <route-modal
      [cancelUrl]="['/']"
      [closeOnEscape]="false"
      [closeOnOutsideClick]="false"
    >
      <modal-header>
        <h1>I am first modal</h1>
      </modal-header>
      <modal-content>
        This modal has its own header, content and footer.
      </modal-content>
      <modal-footer>
        <button class="btn btn-primary" [routerLink]="['/']">okay!</button>
      </modal-footer>
    </route-modal>
  `,
  imports: [RouterLink, ModalModule],
})
export class NoSimpleCloseModalComponent {}
