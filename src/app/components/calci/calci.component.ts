import { Component } from '@angular/core';

@Component({
  selector: 'app-calci',
  standalone: true,
  templateUrl: './calci.component.html',
  styleUrls: ['./calci.component.css']
})
export class CalciComponent {
  displayValue: string = '';
  result: number | null = null;

  // Method to append values to the display
  appendValue(value: string) {
    this.displayValue += value;
  }

  // Method to clear the display
  clear() {
    this.displayValue = '';
    this.result = null;
  }

  // Method to calculate the result
  calculate() {
    try {
      // Using eval can be risky; consider using a math expression parser in production
      this.result = eval(this.displayValue); 
      this.displayValue = this.result !== null ? this.result.toString() : '';
    } catch (e) {
      this.displayValue = 'Error';
    }
  }
}
