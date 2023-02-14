import { Component } from '@angular/core';

import { WizardStepInterface } from './common/wizard/wizard-step-event.model';

@Component({
  selector: 'stepper-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stepper';

  public onStep(step: WizardStepInterface): void {
    console.log(step);
  }
}
