import { CommonModule } from '@angular/common';
import { Component , inject } from '@angular/core';
import { Router } from '@angular/router';
import Patient from '../../types/patient';
import { PatientService } from '../../service/patient.service';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent 
{
  patients:Patient[]=[];
  patientService=inject(PatientService)

  constructor(private router:Router){}

  ngOnInit(){
    this.patientService.getPatients().subscribe((result)=>{
      this.patients=result;
      console.log(this.patients);
    })
  }

  RouteToBookComponents(){
    this.router.navigate(['book-appointment']);
  }

  delete(id:string){
    const ok=confirm("Are you sure want to delete?");
    if(ok){
      this.patientService.deletePatient(id).subscribe((result)=>{
        alert("User deleted sucessfully");
        this.patients=this.patients.filter((u)=>u._id!=id);
      })
    }
  }

}
