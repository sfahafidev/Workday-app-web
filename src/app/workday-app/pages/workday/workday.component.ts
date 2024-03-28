import { Component, inject } from '@angular/core';
import { WorkdayService } from '../../../service/workday.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReplaceUnderscorePipe } from '../../../shared/pipes/replace-underscore.pipe';
import { AddWorkdayComponent } from './add-workday/add-workday/add-workday.component';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'workdays-page-component',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    ReplaceUnderscorePipe, 
    AddWorkdayComponent,
    TitleComponent
  ],
  templateUrl: './workday.component.html',
})
export default class WorkdayComponent {

  workdayService = inject(WorkdayService);

}
