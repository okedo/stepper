import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'wizard-top-bar',
  templateUrl: './wizard-top-bar.component.html',
  styleUrls: ['./wizard-top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WizardTopBarComponent {
  @Input() elements!: Array<boolean>
  @Output() public moveToIndex = new EventEmitter<number>();

  changeStep(index: number): void {
    if (!this.elements[index]) {
      this.moveToIndex.emit(index);
    }
  }

}
