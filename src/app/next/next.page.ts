import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CentralService } from '../central.service';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-next',
  templateUrl: './next.page.html',
  styleUrls: ['./next.page.scss'],
})
export class NextPage implements OnInit {

  animalNameInNext:any;

  animalNameInCentral:any;

  result:any;

  constructor(
    private activatedRoute:ActivatedRoute,
    private central:CentralService,
    private modal:ModalController
  ) { }

  async openModal(){
    const myModal=await this.modal.create({
      component:ModalPage
    })

    myModal.present();
  }

  ngOnInit() {
    const data=this.activatedRoute.snapshot.params['data'];
    this.animalNameInNext=data;
    this.animalNameInCentral=this.central.sharedData;
  }

  calculateFunction(){
    this.central.firstNum=100000;
    this.central.secondNum=742132;
    this.result=this.central.calcAdd();  
  }

}
