import { Component } from '@angular/core';
import SidemenuComponent from '../shared/sidemenu/sidemenu.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    SidemenuComponent,
    HeaderComponent
  ],
  templateUrl: 'dashboard.component.html',
  styles: ``
})
export default class DashboardComponent { }
