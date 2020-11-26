import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cronologia',
  templateUrl: './cronologia.page.html',
  styleUrls: ['./cronologia.page.scss'],
})
export class CronologiaPage implements OnInit {
 data;
  constructor(public route: Router, private rutaActivada: ActivatedRoute) {
    this.rutaActivada.queryParams.subscribe((params) => {
        this.data = this.route.getCurrentNavigation().extras.state.crono;
    });
    
   }
   back(){
     this.route.navigate([".."]);
   }
  ngOnInit() {
  }

}
