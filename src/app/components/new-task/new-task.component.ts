import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent implements OnInit {
  public taskName: string = '';
  public taskType: string = '';
  constructor(private tasksService: TasksService, private router: Router) {}

  ngOnInit(): void {}

  public addTask() {
    this.tasksService.addTask(this.taskName, this.taskType);
    this.router.navigate(['/']);
  }
}
