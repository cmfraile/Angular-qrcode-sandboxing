import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Enlace } from 'src/app/clases/enlace';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  datosqr:string = '';
  datosenlace:any;
  cargaprevia:boolean = false;
  
  constructor( private _ac:ActivatedRoute ){
    this._ac.params.subscribe( (params:Params) => {
      const { id } = params;
      if(id){
        this.datosqr = id ; this.cargaprevia = true;
        const enlace = new Enlace(id);
        this.datosenlace = enlace.info;
      }else{
        setInterval(() => {
          const enlace = new Enlace();
          this.datosenlace = enlace.info;
          this.datosqr = enlace.link;
        },3000)
      }
    });

  }

  ngOnInit(): void {}

}
