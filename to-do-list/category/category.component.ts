import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { ToDoServicesService } from '../to-do-services.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  newCategoryName = "";
  categoryList:any;
  newCategory= {};
 

  constructor (private toDoService:ToDoServicesService,private headerComponent: HeaderComponent  ,private router: Router) {}

  ngOnInit(): void {
    this.categoryList = this.toDoService.categoryList;
  }
  addNewCategory() {

    if (this.newCategoryName !== "") {
      this.toDoService.addCategory(this.newCategoryName);
    }
  }

  createTask(categoryId) {
   // localStorage.setItem('categoryId', categoryId);
   // this.taskComponent.renderTask();
  //  this.abc = this.toDoService.showTask()
  //  alert(this.abc);
  this.headerComponent.showAppTasks = "col-9";
  this.headerComponent.showAppSteps = "d-none";
  this.toDoService.showTaskContainer=true;
  //   this.router.navigate(["todo"], {queryParams: {categoryId:categoryId}}); 
  this.router.navigate(["todo"], {queryParams: {categoryId:categoryId}}); 
  }
}
