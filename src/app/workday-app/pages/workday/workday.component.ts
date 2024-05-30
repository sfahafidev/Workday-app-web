import { Component, OnInit, inject, signal } from '@angular/core';
import { WorkdayService } from '../../../service/workday.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReplaceUnderscorePipe } from '../../../shared/pipes/replace-underscore.pipe';
import { AddWorkdayComponent } from './add-workday/add-workday.component';
import { TitleComponent } from '../../../shared/title/title.component';
import { Workdays } from '../interfaces/workday';

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
export default class WorkdayComponent implements OnInit {
  

  workdayService = inject(WorkdayService);

  workdays = signal<Workdays[]>([]);
  totalHours: number = 0;


  ngOnInit(): void {
    this.workdayService.getWorkdaysCurrentWeek().subscribe(resp => {
        this.workdays.set(resp);
        this.workdays().sort((a, b) => a.totalHours > b.totalHours ? 1 : -1);

        this.workdays().forEach(workday => {
          this.totalHours += workday.totalHours;
        })
    })
  }



}
