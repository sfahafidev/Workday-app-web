import { Component, Input } from '@angular/core';

@Component({
  selector: 'title-component',
  standalone: true,
  imports: [],
  template: `
  
  <p class="text-xl pb-3 flex items-center">
        <i class="fas fa-list mr-3"></i> {{title}} 
    </p>
  
  `

})
export class TitleComponent {

  @Input({required: true}) title!: string;

}
