import { Component, OnInit } from '@angular/core';
import { CommonModule } from 'node_modules/@angular/common/types/_common_module-chunk';
import { RouterOutlet } from 'node_modules/@angular/router/types/_router_module-chunk';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [RouterOutlet, CommonModule]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
