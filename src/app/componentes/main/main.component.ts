import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Enlace } from 'src/app/clases/enlace';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  qrstring:string = '';
  qrdata:any;
  cargaprevia:boolean = false;
  
  constructor( private _ac:ActivatedRoute ){


    this._ac.params.subscribe( (params:Params) => {
      console.log(params);
      const { id } = params;
      if(id){
        this.qrstring = id ; this.cargaprevia = true;
        const enlace = new Enlace(id);
        this.qrdata = enlace.info;
      }
      /*
      else{
        setInterval(() => {
          const enlace = new Enlace();
          this.qrdata = enlace.info
          this.qrstring = enlace.link;
        },5000)
      }
      */
    });

  }

  ngOnInit(): void {}

}
