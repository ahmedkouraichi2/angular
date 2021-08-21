import { AppareilService } from './../appareil.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {
  isAuth:true;
 appareils:any[];
 lastUpdate = new Promise((resolve,reject) =>{
   setTimeout(
     ()=>{
       resolve(Date);
     },2000
   );
 });
  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
    this.appareils= this.appareilService.appareils;
  }
  onAllumer(){
    this.appareilService.switchOnAll();
  }
  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();

  }

}
}
