import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WizardMove } from '../wizard-navigation.type';

@Component({
  selector: 'wizard-nav',
  templateUrl: './wizard-navigation.component.html',
  styleUrls: ['./wizard-navigation.component.scss']
})
export class WizardNavigationComponent {
  @Output() move = new EventEmitter<WizardMove>();
  @Input() hasNext!: boolean;
  @Input() hasPrev!: boolean;

  public changeStep(step: WizardMove): void {
    this.move.emit(step);
  }
}
