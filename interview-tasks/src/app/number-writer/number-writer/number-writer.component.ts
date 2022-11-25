import { Component } from '@angular/core';
import { ones, tenth, tenthAndOnes } from '../data/data';

@Component({
  selector: 'app-number-writer',
  templateUrl: './number-writer.component.html',
  styleUrls: ['./number-writer.component.css']
})
export class NumberWriterComponent {

  inputNumber = 0;

  numberToWords(input: number): string {
    return input == undefined ? '': (input === 0 ? 'nulla' : this.buildOutputString(input.toString()));
  }

  buildOutputString(input: string): string {
    let isNegative = false;
    let output = '';

    if (input[0] === '-') {
      input = input.substring(1);
      isNegative = true;
    }

    output =
      this.localiseBlock(input, '', 3,
        this.localiseBlock(input, 'ezer', 6,
          this.localiseBlock(input, 'millió', 9,
            this.localiseBlock(input, 'milliárd', 12, output)
          )
        )
      );

    return isNegative ? 'minusz ' + output : output;
  }

  localiseBlock(input: string, word: string, place: number, output: string): string {
    let numberOfBlocks = Math.floor(((input.length-1) / 3));
    let nextBlock: string;
    if(numberOfBlocks >= place/3-1) {
      nextBlock = this.resolveThreeNumbers(input.substring(input.length-place, input.length-(place-3)));
      output = output + (input.length > place && nextBlock.length != 0 ? '-' : '') + nextBlock + (nextBlock.length !== 0?word:'');
    }
    return output;
  }

  resolveThreeNumbers(input: string): string {
    if (input.length === 1) {
      input = ones[+input[0]]
    } else if (input.length === 2) {
      if (input[1] === '0') {
        input = tenth[+input[0]]
      } else if (input[0] === '1' || input[0] === '2') {
        input = tenthAndOnes[+input[0]] + ones[+input[1]];
      } else {
        input = tenth[+input[0]] + ones[+input[1]];
      }
    } else if (input.length === 3) {
      if (input[2] === '0') {
        input = (+input[0] !== 1 ? ones[+input[0]]:'') + (+input[0] !== 0 ? 'száz' : '') + tenth[+input[1]]
      } else if (input[1] === '1' || input[1] === '2') {
        input = (+input[0] !== 1 ? ones[+input[0]]:'') + (+input[0] !== 0 ? 'száz' : '') + tenthAndOnes[+input[1]] + ones[+input[2]];
      } else {
        input = (+input[0] !== 1 ? ones[+input[0]]:'') + (+input[0] !== 0 ? 'száz' : '') + tenth[+input[1]] + ones[+input[2]];
      }
    }
    return input;
  }
}
