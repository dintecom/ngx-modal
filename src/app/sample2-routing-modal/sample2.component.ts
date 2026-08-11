import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'sample2',
  templateUrl: './sample2.template.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [RouterLink, RouterOutlet],
})
export class Sample2Component {}
