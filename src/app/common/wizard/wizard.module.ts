import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WizardComponent } from './wizard/wizard.component';
import { WizardTopBarComponent } from './wizard-top-bar/wizard-top-bar.component';
import { WizardNavigationComponent } from './wizard-navigation/wizard-navigation.component';
import { WizardStepComponent } from './wizard-step/wizard-step.component';



@NgModule({
  declarations: [
    WizardComponent,
    WizardTopBarComponent,
    WizardNavigationComponent,
    WizardStepComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WizardComponent,
    WizardStepComponent
  ]
})
export class WizardModule { }
