import { Component, OnInit } from '@angular/core';
import { CategoryComponent } from '../category/category.component';
import { ToDoServicesService } from '../to-do-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private toDoService:ToDoServicesService) { }
 
  showAppTasks = "d-none"
  showAppSteps = "d-none";
  ngOnInit(): void {
    
  }

  // ngDoCheck() {
  //   if(this.toDoService.showTaskContainer == true || this.toDoService.showStepContainer == true) {
  //     alert("setting");
  //     this.ngOnInit();
  //   }
  //}
}
