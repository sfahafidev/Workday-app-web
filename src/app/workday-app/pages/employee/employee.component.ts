import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeService } from '../../../service/employee.service';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

@Component({
  selector: 'employees-page',
  standalone: true,
  imports: [CommonModule, RouterModule, AddEmployeeComponent],
  templateUrl: './employee.component.html',
})
export default class EmployeeComponent {

  service = inject(EmployeeService);

}
