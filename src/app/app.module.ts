import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './service/auth.interceptor';
import { UserService } from './service/user.service';
import { AuthGuard } from './service/auth.guard';
import { AdminComponent } from './component/admin/admin.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { ByPassSecurityPipe } from './pipes/by-pass-security.pipe';
import { JobService } from './service/job.service';
import { JobsComponent } from './component/user-profile/jobs/jobs.component';
import { ItemsComponent } from './component/user-profile/items/items.component';
import { ItemService } from './service/item.service';

@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    NavbarComponent,
    AdminComponent,
    UserProfileComponent,
    ByPassSecurityPipe,
    JobsComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [
    AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    UserService,
    JobService,
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
