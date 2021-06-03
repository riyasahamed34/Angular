import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { SignInComponent } from './sign-in/sign-in.component';
import { ToDoListModule } from './to-do-list/to-do-list.module';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

const routes: Routes = [ 
  {
    path:'',
    component:SignInComponent,
     pathMatch: 'full'
  }
  ,
  {
    path:'todo',
    loadChildren: () => import('src/app/to-do-list/to-do-list.module').then((m) => m.ToDoListModule),
    canActivate: [AuthGuard]
    //loadChildren: () => ToDoListModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
