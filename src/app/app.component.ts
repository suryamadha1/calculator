import { Component, OnInit } from '@angular/core';
import { additionalCalc, calculatorData } from './data/data';
import {from, fromEvent, map, Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'calculator';
  
  calculatorData = calculatorData;
  additional = additionalCalc;
  
  private input = new Subject<string[]>();
  
  inputAsObservable$ = this.input.asObservable();
  
  inputString: string = '';
  
  private lastInput: string | number = '';
  
  constructor() {}
  ngOnInit(): void {
    this.inputAsObservable$
    .subscribe(
      inputArray => {
        this.inputString = inputArray.join('');
      }
    )
  }

  appendToInput(input: string | number){
    let existingInput: string | number = document.getElementById('input')?.innerText!;
    this.lastInput = existingInput.length > 0 ? existingInput[existingInput.length-1]: '';
    
    // Corner cases
    // first should not be a zero - Done
    if(existingInput.length === 0 && input.toString().includes('0')){
      return;
    }

    // no repetitive periods
    if(this.lastInput === '.' && input === '.'){
      return;
    }

    // if input's first char is period then prepend a 0 to it. 
    if(input.toString()[0] === '.' && (isNaN(+this.lastInput) || this.lastInput === '') ){
      input = '0'+input;
    } 

    if(existingInput.length > 10)
      return;
    
    existingInput += input;
    this._updateInput(existingInput);
  } 

  appendOperator(operator: string){
    let existingInput: string | number = document.getElementById('input')?.innerText!;
    this.lastInput = existingInput.length > 0 ? existingInput[existingInput.length-1] : '';

    this.inputAsObservable$.subscribe(
      currentInput => {
        existingInput = currentInput.join('');
      }
    )

    // if input is empty, end
    if(existingInput.length === 0){
      console.log('m1');
      return;

    }

    // if lastInput is same as operand then end..
    if(this.lastInput === operator){
      console.log('m2');
      return;
    }

    // if last input is any operator, then end..
    if("+/-*".includes(this.lastInput.toString()) && this.lastInput !== ''){
      console.log('m3');
      return;
    }

    if(existingInput.length > 10)
      return;

    existingInput += operator;
    this._updateInput(existingInput);
  }

  _updateInput(newInput: number | string){
    this.inputString = newInput.toString();
    this.input.next(newInput.toString().split(''));
  }

  clear() {
    this.input.next(['']);
  }

  _calculateResult() {
    if(".+/-*".includes(this.inputString[this.inputString.length-1]))
      this.inputString = this.inputString.substring(0,this.inputString.length-1);

    // merge numbers & decimal based numbers first
    let newInputArray = [];
    let numberToBeAppended = '';
    for(let inputIndex= 0; inputIndex < this.inputString.length; inputIndex++){
      let currentCharacter = this.inputString[inputIndex];
      if(!"+-/*".includes(currentCharacter)){
        numberToBeAppended += currentCharacter;
      } else {
        newInputArray.push(numberToBeAppended, currentCharacter);
        numberToBeAppended = '';
      }
    }
    newInputArray.push(numberToBeAppended);
    numberToBeAppended = '';
    console.log(newInputArray)

    let finalArray = []
    // act on division & multiplication operators 
    

    // act on addition & subtraction operators
    
  }

  showResult() {
    let existingInput: string | number = document.getElementById('input')?.innerText!;
    if(existingInput.length === 0)
      return;
    console.log('current input -> ', existingInput);
    this._updateInput(eval(existingInput.toString()));
  }
}
