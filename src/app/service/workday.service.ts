import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Workdays } from '../workday-app/pages/interfaces/workday';
import { Observable, catchError, throwError } from 'rxjs';
import { NewWorkday } from '../models/newWorkday';


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

   //getKindOfShift(): Observable<Object> {}

   addWorkday(workday: NewWorkday): Observable<Object> {
      return this.http.post('http://localhost:8080/assist-control/v1/workday', workday)
        .pipe(catchError(this.manejoErrores));
   }


   private manejoErrores(error: HttpErrorResponse){
    return throwError(() => error.error);
  }


}
