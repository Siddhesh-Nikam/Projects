import { Component, inject } from '@angular/core';
import User from '../types/user';
import { UserService } from '../service/user.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatButtonModule,RouterLink,SearchComponent,CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  users:User[]=[];
  userService=inject(UserService);

  ngOnInit(){
    this.userService.getUsers().subscribe((result)=>{
      this.users=result;
      console.log(this.users);
    })
  }

  delete(id:string){
    const ok=confirm("Are you sure want to delete?");
    if(ok){
      this.userService.deleteUser(id).subscribe((result)=>{
        alert("User deleted sucessfully");
        this.users=this.users.filter((u)=>u._id!=id);
      })
    }
  }

}
