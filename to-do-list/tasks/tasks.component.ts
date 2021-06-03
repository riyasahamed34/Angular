import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { ToDoServicesService } from '../to-do-services.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  categoryName: any;
  taskList: any = [];
  taskName: any;
  category: any;
  categoryId: any;
  categoryNamePresent = false;
  stepPresent = false;

  constructor(private toDoService: ToDoServicesService, private headerComponent: HeaderComponent, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(category => {
      this.categoryName = this.toDoService.getCategoryName(category.categoryId);
      this.categoryNamePresent = false;
      if (category.categoryId !== undefined) {
        this.categoryNamePresent = true;
        this.stepPresent = true;
      } else {
        this.categoryNamePresent = false;
      }
     
      this.toDoService.setCategoryId(category.categoryId);
      this.taskList = this.toDoService.getTaskList();
    });
  }

  addTask() {
    if (this.taskName !== "") {
      this.toDoService.addTask(this.taskName);
      this.taskName = "";
    }
    this.taskList = this.toDoService.getTaskList();
  }

  createStep(taskId, categoryId) {
    this.headerComponent.showAppSteps = "col-3";
    this.headerComponent.showAppTasks = "col-6";
    this.router.navigate(["todo"], { queryParams: { taskId: taskId, categoryId: categoryId } });
    //  alert(this.toDoService.showStepContainer);
  }

  // renderTask() {
  //   this.categoryId = localStorage.getItem('categoryId');
  //   console.log(this.categoryId)
  //   this.categoryName =  this.toDoService.getCategoryName(this.categoryId);
  //   console.log(this.categoryName);
  //   this.toDoService.setCategoryId(this.categoryId);
  // //  this.categoryId = category.id;
  //   this.taskList = this.toDoService.getTaskList(); 
  //   this.ngOnInit(); 
  // }
}
