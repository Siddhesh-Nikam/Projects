import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import User from '../../types/user';
import { UserService } from '../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [MatInputModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  formBuilder=inject(FormBuilder);

  userForm : FormGroup = this.formBuilder.group({
    name:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    age:['',[Validators.required]],
    address:['',[Validators.required]],
    password:['',[Validators.required,Validators.minLength(8)]],

  });

  userService=inject(UserService);
  router=inject(Router);
  route=inject(ActivatedRoute);
  editUserId!:string;

  ngOnInit(){
    this.editUserId=this.route.snapshot.params['id'];
    if(this.editUserId){
      this.userService.getUsersById(this.editUserId).subscribe(result=>{
        this.userForm.patchValue(result);
      })
    }
  }

  addUser(){

    if(this.userForm.invalid){
      alert("Please provide all fields");
    }

    const model:User = this.userForm.value;
    this.userService.addUser(model).subscribe(result=>{
      alert("User added sucessfully");
      this.router.navigateByUrl("/");
    })
  }

  updateUser(){
    if(this.userForm.invalid){
      alert("Please provide all fields");
      return;
    }

    const model:User = this.userForm.value;

    this.userService.updateUser(this.editUserId,model).subscribe(result=>{
      alert('User updated sucessfully');
      this.router.navigateByUrl('/');
    })

  }

}
