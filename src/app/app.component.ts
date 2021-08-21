import { AppareilService } from './appareil.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuth =false;
  lastUpdate=new Date();
  appareils:any[];

  title = 'my-first-app-open';
  appareilOne="Machine a laver"
  appareilTwo="Frigo";
  appareilThree="Ordinateur";

  constructor(private appareilService :AppareilService){
    setTimeout(
      ()=>{
        this.isAuth=true;},4000
    );
    }
    ngOnInit(){
      this.appareils=this.appareilService.appareils;

    }
    onEteindre():void{
      if(confirm('Ete vous sur de vouloir éteindre tous vos appareils?')){
      this.appareilService.switchOffAll();


     }
    }
    onAllumer(){
      this.appareilService.switchOnAll();
    }
 /*    onSwitch(){
      if(true){
        this.appareilService.switchOffOne(this.index);
      }else {
        this.appareilService.switchOnOne(this.index)

      } */
    }









