import { Component, inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Patient from '../../types/patient';
import { PatientService } from '../../service/patient.service';

@Component({
  selector: 'app-add-details',
  standalone: true,
  imports: [MatInputModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './add-details.component.html',
  styleUrl: './add-details.component.css'
})

export class AddDetailsComponent 
{
    formBuilder=inject(FormBuilder);

    patientForm : FormGroup = this.formBuilder.group({
    patientName:['',Validators.required],
    patientAge:['',Validators.required],
    referedDoctor:['',Validators.required],
    medicalReason:['',Validators.required],
    Location:['',Validators.required],    
  });

  patientService=inject(PatientService);
  router=inject(Router);
  route=inject(ActivatedRoute)

  addPatient(){

    if(this.patientForm.invalid){
      alert("Please provide all fields");
    }

    const model:Patient = this.patientForm.value;
    this.patientService.addPatient(model).subscribe(result=>{
      alert("User added sucessfully");
      this.router.navigateByUrl('/');
    })
  }
}
