import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-appointment',
  standalone: true,
  imports: [],
  templateUrl: './book-appointment.component.html',
  styleUrl: './book-appointment.component.css'
})
export class BookAppointmentComponent 
{
    constructor(private router : Router){}

    RouterToAddDetails(){
      this.router.navigate(['/add-details']);
    }

}
