import { Component, OnInit, inject } from '@angular/core';
import { TitleComponent } from '../../../../shared/title/title.component';
import { WorkdayService } from '../../../../service/workday.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewWorkday } from '../../../../models/newWorkday';
import { Router } from '@angular/router';

@Component({
  selector: 'add-workday-component',
  standalone: true,
  imports: [
    TitleComponent,
    ReactiveFormsModule,

  ],
  templateUrl: './add-workday.component.html'
})
export class AddWorkdayComponent implements OnInit {

  form: FormGroup;
  workday = new NewWorkday();

  workdayService = inject(WorkdayService);
  formBuilder = inject(FormBuilder);
  router = inject(Router);

  initForm(): FormGroup {
    return this.formBuilder.group({
      idWorkday: [''],
      codeShift: ['', [Validators.required]],
      date: ['', [Validators.required]], 
      timeOfArrival: ['', [Validators.required]],
      departureTime: ['', [Validators.required]],
      idEmployee: ['']
    });
  }

  ngOnInit(): void {
    this.form = this.initForm();
  }

  requestNewWorkday(form: FormGroup){
    this.workday.codeShift = form.value.codeShift;
    this.workday.date = form.value.date;
    this.workday.timeOfArrival = form.value.timeOfArrival;
    this.workday.departureTime = form.value.departureTime;
    this.workday.idEmployee = form.value.idEmployee;
  }

  addWorkday(){
    this.requestNewWorkday(this.form);
    this.workdayService.addWorkday(this.workday).subscribe({
      next: resp => {
        console.log(resp);
        
      },
      error: error =>{
        console.log(error);
      },
      complete: () =>{
        this.form.reset(this.initForm());
        this.volverAlta();
      }
    })
  }

  volverAlta(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['dashboard/workdays']);
  }

}
