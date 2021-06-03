import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { StepsComponent } from './steps/steps.component';
import { TasksComponent } from './tasks/tasks.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [ 
  {
    path:'',
    component:HeaderComponent
  },
  {
    path:'task',
    component:HeaderComponent
  }
]

@NgModule({
  declarations: [
    CategoryComponent,
    HeaderComponent,
    StepsComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [TasksComponent],
  exports: [RouterModule]
})
export class ToDoListModule { }
