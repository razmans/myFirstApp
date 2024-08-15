import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CentralService } from '../central.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  personName='Ali';

  nextPerson='Abu';


  inputBox:any;
  checkbox:boolean=false;

  animalName:any;

  cars=[
    'BMW',
    'Mercedes',
    'Proton',
    'Nissan',
    'Toyota',
    'Mitsubishi'
  ]

  result:any;

  constructor(
    private nav:NavController,
    private central:CentralService
  ){}

  goToNext(){
    this.central.sharedData=this.animalName;
    this.nav.navigateForward('next/'+this.animalName);
  }


  loopCars(){
    for(let x=0;x<this.cars.length;x++){
      console.log(this.cars[x]);
    }
  }


  alertFunction(){
   alert(this.inputBox);
   console.log(this.checkbox); 
  }

  checkAnimalName(){
    if(this.animalName=='tiger'){
      alert('ROAR!')
    }
    else if(this.animalName=='cat'){
      alert('MEOW!')
    }
    else if(this.animalName=='cow'){
      alert("MOO!")
    }
    else{
      alert('NO ANIMAL!')
    }
  }


  calculateFunction(){
    this.central.firstNum=100000;
    this.central.secondNum=742132;
    this.result=this.central.calcAdd();  
  }




}
