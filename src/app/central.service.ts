import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CentralService {

  sharedData:any;
  firstNum:any;
  secondNum:any;

  constructor() { }

  calcAdd(){
    return this.firstNum+this.secondNum;
  }


}
