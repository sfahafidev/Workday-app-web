import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TitleComponent } from '../../../../shared/title/title.component';
import { NewEmployee } from '../../../../models/newEmployee';
import { Router } from '@angular/router';
import { EmployeeService } from '../../../../service/employee.service';

@Component({
  selector: 'add-employee-component',
  standalone: true,
  imports: [ReactiveFormsModule, TitleComponent],
  templateUrl: './add-employee.component.html',
  styles: ``
})
export class AddEmployeeComponent {

form: FormGroup;
employee = new NewEmployee();

employeeService = inject(EmployeeService)
formBuilder = inject(FormBuilder);
router = inject(Router);

initForm(): FormGroup {
  return this.formBuilder.group({
    id: [''],
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
    lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]], 
  });
}

ngOnInit(): void {
  this.form = this.initForm();
}

requestNewEmployee(form: FormGroup){
  this.employee.name = form.value.name;
  this.employee.lastName = form.value.lastName;
}

addEmployee(){
  this.requestNewEmployee(this.form);
  this.employeeService.addEmployee(this.employee).subscribe({
    next: resp => {
      console.log(resp);
      
    },
    error: error =>{
      console.log(error);
    },
    complete: () =>{
      this.form.reset(this.initForm());
    }
  })
}


}
