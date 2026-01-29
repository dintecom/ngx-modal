import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModalModule } from '../../../projects/ngx-modal/src/public-api';

@Component({
  selector: 'sample1',
  templateUrl: './sample1.template.html',
  imports: [RouterLink, ModalModule],
})
export class Sample1Component {}
