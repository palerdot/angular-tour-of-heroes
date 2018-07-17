import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

// directive to prevent a name from used in form
export function forbiddenNameValidator(fName: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = fName.test(control.value)
    return forbidden ? {'forbiddenName': {value: control.value}} : null   
  }
}

// configure the directive
@Directive({
  selector: '[appForbiddenName]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ForbiddenValidatorDirective,
    multi: true
  }]
})
export class ForbiddenValidatorDirective implements Validator {
  @Input('appForbiddenName') forbiddenName: string;

  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.forbiddenName 
            ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
            : null
  }
}