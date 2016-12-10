import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  list: Array<{Name: string, Design: any, Image: any}>;

  constructor(public navCtrl: NavController) {

    this.list = [
      { Name: 'Sathish Kumar R', Design: 'Mobile App Developer', Image:'user1-128x128.jpg' },
      { Name: 'Ahosk', Design: 'Java Developer', Image:'user2-160x160.jpg' },
      { Name: 'Sathish Kumar A', Design: 'PHP Developer', Image:'user6-128x128.jpg' },
      { Name: 'Similan', Design: 'J2EE Developer', Image:'user7-128x128.jpg' },
      { Name: 'Raj Kumar', Design: 'UI Developer', Image:'user8-128x128.jpg' },
        ];
    
  }

  public Listitem(l)
  {
    this.navCtrl.push(DetailsPage,{item:l});

  }

}
