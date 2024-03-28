import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeService } from '../../../service/employee.service';

@Component({
  selector: 'employees-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './employee.component.html',
})
export default class EmployeeComponent {

  service = inject(EmployeeService);

}
