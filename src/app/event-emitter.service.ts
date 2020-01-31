import { Injectable ,EventEmitter} from '@angular/core';
//import { EventEmitter } from 'protractor';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  invokeFirstComponentFunction = new EventEmitter();
  subsVar: Subscription;

  constructor() { }

  onFirstComponentButtonClick(name:string)
  {
    this.invokeFirstComponentFunction.emit(name);
  }

  

}
