import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'wizard-step',
  template: `<ng-template #content>
                <ng-content></ng-content>
            </ng-template>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WizardStepComponent {
  @ViewChild("content") public content: any;
}
