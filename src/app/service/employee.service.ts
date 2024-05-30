import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Employee } from '../workday-app/pages/interfaces/employee';
import { NewEmployee } from '../models/newEmployee';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private http = inject(HttpClient);

  employees = signal<Employee[]>([]);

  constructor() { 

    this.http.get<Employee[]>('http://localhost:8080/assist-control/v1/employees')
      .subscribe(resp => {
        console.log(resp);
        this.employees.set(resp);
      })
  }

  addEmployee(employee: NewEmployee): Observable<Object> {
    debugger
    return this.http.post('http://localhost:8080/assist-control/v1/employee', employee)
      .pipe(catchError(this.manejoErrores));
 }


 private manejoErrores(error: HttpErrorResponse){
  return throwError(() => error.error);
}


}
