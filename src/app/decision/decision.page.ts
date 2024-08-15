import { Component, OnInit } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';


@Component({
  selector: 'app-decision',
  templateUrl: './decision.page.html',
  styleUrls: ['./decision.page.scss'],
})
export class DecisionPage implements OnInit {

  answer:any;
  image:any;

  constructor() { }

  ngOnInit() {
  }

  async getDecision(){
     const options = {
      url: 'https://yesno.wtf/api',
    };

    const response: HttpResponse = await CapacitorHttp.get(options);
    this.answer=response.data.answer;
    this.image=response.data.image;
  }

}
