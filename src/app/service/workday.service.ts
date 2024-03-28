import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Workdays } from '../workday-app/pages/interfaces/workday';


@Injectable({
  providedIn: 'root'
})
export class WorkdayService {

  private http = inject(HttpClient);

  workdays = signal<Workdays[]>([]);

  constructor() {

    this.http.get<Workdays[]>('http://localhost:8080/assist-control/v1/workdays/1')
    .subscribe(resp => {
      this.workdays.set(resp);
    })

    

   }
}
