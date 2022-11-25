import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  equation: string;

  constructor() {
    this.equation = '';
  }

  addToEquation(input: string): void {
    this.equation = this.equation + input;
  }

  clearEquation():void {
    this.equation = '';
  }

  evaluateEquation(): void {
    this.equation = eval(this.equation);
  }
}
