# Wizard
Custom component for stepper/wizard functionality
## How to use
1. Add **WizardModule** into your application module
2. Add **wizard-main** component into your html
3. Add your steps inside of **wizard-main**. Each step should be wrapped into **wizard-step**
## Properties
| Property  | Type |  Description |Default value|
| ------------ | ------------ | ------------ | ------------ |
|  height |  string | Height of step container | '30vh' |
|  showDemo |  boolean | Enable automatic step switching | false |
|  demoDuration | number | Time between step change in demo mode(miliseconds) | 1000 |
## Outputs
**step:** triggered every step preformed. 
Output: 
- currentStep: number
- nextStep: number

