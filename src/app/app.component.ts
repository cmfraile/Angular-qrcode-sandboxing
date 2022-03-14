import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params } from '@angular/router';

// https://www.npmjs.com/package/angularx-qrcode
// https://cordobo.github.io/angularx-qrcode/

// Parametros optativos : https://www.digitalocean.com/community/tutorials/angular-query-parameters
// Snapshots : https://desarrolloweb.com/articulos/parametros-rutas-angular.html

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent{
  title = 'qrcodesandboxing';
}
