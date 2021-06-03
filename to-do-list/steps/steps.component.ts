import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoServicesService } from '../to-do-services.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {
  taskId:any;
  taskName:any;
  stepName:any;
  task:any;
  stepList:any =[];
  isTaskNamePresent = false;

  constructor(private toDoService:ToDoServicesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(task => {
    //  if (task.taskId !== undefined) {
      if (task.taskId !== undefined) {
        this.isTaskNamePresent = true;
      } else {
        this.isTaskNamePresent = false;
      }
      this.taskName =  this.toDoService.getTaskName(task.taskId);
      this.toDoService.setTaskId(task.taskId);
      this.taskId = task.id;
       this.stepList = this.toDoService.getStepList(); 
    //  } 
      });
  }
  
  addStep() {
    if (this.stepName !== "")  {
      this.toDoService.addStep(this.stepName);
      this.stepName="";
    }
    this.stepList = this.toDoService.getStepList();
    console.log(this.stepList[0]);
    console.log(this.stepList[0].stepName);
  }
}
