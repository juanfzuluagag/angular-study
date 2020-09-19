import { Pipe, PipeTransform } from '@angular/core';
import { TodoList } from '../models/todo-list.model';

@Pipe({
  name: 'completedFilter',
  pure: false
})
export class CompletedFilterPipe implements PipeTransform {

  transform(todoLists: TodoList[], finished : boolean = true): TodoList[] {

    return todoLists.filter(todoList => todoList.finished === finished);
  }

}
