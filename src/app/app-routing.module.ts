import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssuesComponent } from './issues/issues/issues.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', loadChildren:()=>import('./home/home.module').then(m => m.HomeModule)},
  // {path:'login',component:LoginComponent},
  // {path:'register',component:RegisterComponent},
  // {path:'viewissues',component:IssuesComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

