import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {UsersComponent} from "./components/users/users.component";
import {UpdateUserProfileComponent} from "./components/update-user-profile/update-user-profile.component";
import {AuthGuard} from "./guards/auth.guard";
import {UserProfilerComponent} from "./components/user-profiler/user-profiler.component";


const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'users',
    children: [
      {
        path: '',
        component: UsersComponent
      },
      {
        path: ':id',
        component:UserProfilerComponent
      }
    ]
  },
  {
 path: 'update-profile',
    component: UpdateUserProfileComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
