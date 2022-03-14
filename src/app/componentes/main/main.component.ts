import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  constructor( private _ac:ActivatedRoute ){
    this._ac.params.subscribe(console.log);
  }

  ngOnInit(): void {}

}
