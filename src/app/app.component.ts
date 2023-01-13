import { Component } from '@angular/core';
import { additionalCalc, calculatorData } from './data/data';
import {map, Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';

  calculatorData = calculatorData;
  additional = additionalCalc;
  private input = new Subject<string | number>();
  inputAsObservable$ = this.input.asObservable();

  appendToInput(input: string | number){
    let newInput = '3';
    this.input.next(newInput);
  } 

}
