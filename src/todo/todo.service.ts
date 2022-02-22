/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './Model/todo.model';
import { v4 as uuidv4 } from 'uuid';
import { TodoDTO } from './Model/todo.dto';
import { UpdateTodo } from './Model/updateTodo.model';
@Injectable()
export class TodoService {
  todos: Todo[] = [];
  getAll(): any {
    return this.todos;
  }
  getById(id: string): any {
      const res=this.todos.find((el) => el.id === id);
     if  (! res) throw new NotFoundException('the provided id does not exist');
     return res;
  }
  addTodo(newTodo: TodoDTO): any {
    let todo = new Todo();
    todo.id = uuidv4();
    todo = { ...todo, ...newTodo };
    this.todos.push(todo);
    return todo;
  }
  delete(id: string): string {
    const old =  this.todos.length;
    this.todos = this.todos.filter((el) => el.id !== id);
    if (old==this.todos.length) throw new NotFoundException('the provided id does not exist');
    return 'item provided deleted';
  }
  update(id: string, upTodo: UpdateTodo): any {
      const todo= this.getById(id);
      todo.name = upTodo.name ?? todo.name;
      todo.description = upTodo.description ?? todo.description;
      todo.status = upTodo.status ?? todo.status;
    return id+" update successfully";
  }
}
