import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { AdminComponent } from './component/admin/admin.component';
import { AuthGuard } from './service/auth.guard';
import { UserProfileComponent } from './component/user-profile/user-profile.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"userProfile",component:UserProfileComponent},
  {path:"admin",component:AdminComponent, canActivate:[AuthGuard]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
