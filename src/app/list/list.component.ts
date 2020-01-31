import { Component, OnInit } from '@angular/core';
import {EventEmitterService} from '../event-emitter.service';
import {TASK} from '../task'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  count:number=1;
  todo_list:TASK[];
  todoTitle: string;
  //str:string;

  constructor(private eventEmitterService: EventEmitterService) { }

  ngOnInit() {
    this.todo_list=[];
    this.todoTitle='';

    if (this.eventEmitterService.subsVar==undefined) {    
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeFirstComponentFunction.subscribe((name:string)=>this.FirstFunction(name));    
    } 

  }
 

  
  FirstFunction(str:string)
  {
    if(str.trim().length===0)
    {
      return;
    }

    this.todo_list.push(
      {
        id:this.count++,
        name:str,
        completed:false,
        editing:false
      }
    )
    str='';
  }

  deleteTodo(id:number):void
  {
    this.todo_list = this.todo_list.filter(todo => todo.id !== id);
  }


}