import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';

@Directive({
  selector: '[appRangoModelos]',
  providers: [{provide: NG_VALIDATORS, useExisting: RangoModelosDirective, multi: true}]
})
export class RangoModelosDirective implements Validator {

  @Input('appRangoModelos') modelos: number[]

  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } {
    console.log(this.modelos)
    return this.modelos ? this.rangoModelosValidator(this.modelos)(control) : null;
  }

  rangoModelosValidator(modelos: number[]): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let desde = modelos[0];
      let hasta = modelos[1];
      const forbidden = hasta < desde;
      return forbidden ? { 'forbiddenModels': { value: modelos } } : null;
    };
  }
}
