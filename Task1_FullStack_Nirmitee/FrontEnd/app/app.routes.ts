import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { BookAppointmentComponent } from '../Components/book-appointment/book-appointment.component';
import { DashboardComponent } from '../Components/dashboard/dashboard.component';
import { AddDetailsComponent } from '../Components/add-details/add-details.component';

export const routes: Routes = [

    {
        path:'',
        component:DashboardComponent
    },

    {
        path:'book-appointment',
        component:BookAppointmentComponent
    },
    {
        path:'add-details',
        component:AddDetailsComponent
    }


];
