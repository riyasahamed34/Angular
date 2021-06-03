import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoServicesService {
  categoryName:any;
  taskName:any;
  categoryId:any;
  taskList:any = [];
  taskId:any;
  taskrenderList:any = [];
  stepRenderList:any = [];
  stepList:any = [];
  showTaskContainer: boolean=false;
  showStepContainer: boolean=false;
  getTaskList() {
    this.taskrenderList = [];
    for (let j = 0; j < this.taskList.length; j++) { 
      if (this.taskList[j].categoryId == this.categoryId) {
         this.taskrenderList.push(this.taskList[j]);
      }      
    }
    return this.taskrenderList;
  }

  getStepList() {
    this.stepRenderList = [];
    for(let k = 0; k < this.stepList.length; k++) {
      if(this.stepList[k].taskId == this.taskId) {
        this.stepRenderList.push(this.stepList[k]);
      }
    }
    return this.stepRenderList;
  }


  getCategoryName(categoryId: any){
    for (let i = 0; i < this.categoryList.length; i++) {
            if (this.categoryList[i].id == categoryId) {
                this.categoryName = this.categoryList[i].name;
            }
        }
    return this.categoryName;
  }

  getTaskName(taskId:any) {
    for(let i = 0; i < this.taskList.length; i++) {
      if(this.taskList[i].taskId == taskId) {
        this.taskName = this.taskList[i].taskName;
      }
    }
    return this.taskName;
  }

  setCategoryId(id) {
    this.categoryId = id;  
  }

  setTaskId(taskId) {
    this.taskId = taskId;
  }

  newTask: any;

  addTask(taskName) {
    this.newTask = {
      taskId:this.taskList.length + 1,
      taskName:taskName,
      categoryId:this.categoryId
    }
    this.taskList.push(this.newTask);
  }
  newStep:any;
  addStep(stepName) {

    this.newStep = {
      stepId: this.stepList.length + 1,
      stepName: stepName,
      taskId: this.taskId
    }
    this.stepList.push(this.newStep);
  }
  newCategory:any;

  addCategory(newCategoryName) {
     this.newCategory = {
      id: this.categoryList.length + 1,
      icon: "fa fa-list",
      name: newCategoryName,
      taskList: []
    }
    this.categoryList.push(this.newCategory);
  }

  constructor() { }

  categoryList =[
    {
      id : "1",
      icon : "fa fa-sun",
      name : "My Day"
  },
  {
      id : "2",
      icon : "fa fa-star",
      name : "Important"
  },
  {
      id : "3",
      icon : "fa fa-calendar",
      name : 'Planned'
  },
  {
      id : "4",
      icon : "fa fa-user",
      name : "Assign to you"
  },
  {
      id : "5",
      icon : "fa fa-home",
      name : "Task"
  }
  ]
  getCategoryList() {
    return this.categoryList;
  }
}
