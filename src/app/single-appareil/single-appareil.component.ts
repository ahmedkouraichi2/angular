import { AppareilService } from './../appareil.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.css']
})
export class SingleAppareilComponent implements OnInit {
name:string="Appareil";
status:string='Statut';
  id: number;
  constructor(private appareilService:AppareilService,private route:ActivatedRoute

    ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];


}
}
