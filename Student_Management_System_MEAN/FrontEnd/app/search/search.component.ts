import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientJsonpModule,MatToolbarModule,MatCardModule,MatFormFieldModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent 
{
  
}
