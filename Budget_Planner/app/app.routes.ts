import { Routes } from '@angular/router';
import { LoginComponent } from './budget-planner/login/login.component';

export const routes: Routes = [
    {path:'budget-planner' , loadChildren:()=> import('./budget-planner/budget-planner.module').then(m=>m.BudgetPlannerModule)},
    {path:'',component:LoginComponent}
];
