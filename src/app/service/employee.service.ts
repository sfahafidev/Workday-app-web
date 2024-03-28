import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Employee } from '../workday-app/pages/interfaces/employee';


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
        
        debugger
        this.employees.set(resp);
      })

  }
}
