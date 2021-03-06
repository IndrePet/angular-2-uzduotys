import { EventEmitter, Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  public tasks: Task[] = [];
  public onTaskChange = new EventEmitter();

  constructor() {}

  public addTask = (taskName: string, taskType: string) => {
    this.tasks.push(new Task(taskName, taskType));
    this.saveTasks();
    this.onTaskChange.emit();
  };

  public deleteTask(n: number) {
    this.tasks.splice(n, 1);
    this.saveTasks();
    this.onTaskChange.emit();
  }

  public loadTasks() {
    let data = localStorage.getItem('tasks');
    if (data != null) {
      this.tasks = JSON.parse(data);
    }
  }

  public saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  public updateTask(index: number, name: string, type: string) {
    this.tasks[index].name = name;
    this.tasks[index].type = type;
    this.saveTasks();
  }
}
