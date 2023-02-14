import { trigger, state, style, transition, animate } from '@angular/animations';
import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Input, OnDestroy, QueryList, TemplateRef } from '@angular/core';
import { animationFrameScheduler, interval, Observable, Subscription } from 'rxjs';
import { WizardMove } from '../wizard-navigation.type';
import { WizardStepComponent } from '../wizard-step/wizard-step.component';

@Component({
  selector: 'wizard-main',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WizardComponent implements AfterContentInit, OnDestroy {
  @ContentChildren(WizardStepComponent) public contentChildren!: QueryList<WizardStepComponent>;
  @Input() public showDemo?: boolean;
  @Input() public height?: string;
  @Input() public showDuration?: number;

  public readonly defaultHeight = '30vh';

  private readonly defaultShowDuration = 1000;

  private demoInterval$!: Observable<number>;
  private intervalSubscription!: Subscription;

  public currentActive: number = 0;
  public elementList: Array<boolean> = [];

  constructor(private changeDetector: ChangeDetectorRef) { }

  public get hasNext(): boolean {
    return this.currentActive < this.contentChildren.length - 1;
  }

  public get hasPrev(): boolean {
    return this.currentActive > 0;
  }

  public ngAfterContentInit(): void {
    if (this.contentChildren.length) {
      this.createElementsList(this.contentChildren);
    }

    if (this.showDemo) {
      this.restartDemo();
    }
  }

  public ngOnDestroy(): void {
    this.intervalSubscription?.unsubscribe();
  }

  public move(step: WizardMove, timerMove?: boolean): void {
    this.setActive(this.currentActive += step, timerMove);
  }

  public moveToIndex(index: number): void {
    this.setActive(index);
  }

  public getContentByIndex(id: number): TemplateRef<WizardComponent> {
    return this.contentChildren.get(id)?.content;
  }

  private setActive(index: number, isTimerMove?: boolean) {
    if (!isTimerMove) {
      // Stop demo in case of manual interaction 
      this.intervalSubscription?.unsubscribe();
    }

    this.currentActive = index;
    this.elementList = this.elementList.map((val, i) => i === index)
  }

  private createElementsList(contentChildren: QueryList<WizardStepComponent>): void {
    this.elementList = contentChildren?.toArray().map(() => false);
    this.elementList[0] = true;
    queueMicrotask(() => {
      this.changeDetector.detectChanges();
    });
  }

  private reset(timerReset?: boolean): void {
    this.setActive(0, timerReset);
  }

  private restartDemo(): void {
    this.demoInterval$ = interval(this.showDuration || this.defaultShowDuration, animationFrameScheduler);
    this.intervalSubscription = this.demoInterval$.subscribe(() => {
      this.changeDetector.detectChanges();
      if (this.hasNext) {
        this.move(1, true);
      } else {
        this.reset(true);
      }
    });
  }
}
