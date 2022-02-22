import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Todo } from './Model/todo.model';
import { TodoService } from './todo.service';
@Controller('todo')
export class TodoController {
  constructor(private ser: TodoService) {
    //this.todos = [new Todo('1', 'Sport', 'Faire du sport')];
  }
  @Get()
  getTodos(): Todo[] {
    return this.ser.getAll();
  }
  @Get('/:id')
  getTodo(@Param('id') id: string): Todo {
    return this.ser.getById(id);
  }
  @Post()
  addTodo(@Body() newTodo: Todo): Todo {
    return this.ser.addTodo(newTodo);
  }
  @Patch('/:id')
  updateTodo(@Param('id') id: string, @Body() upTodo: Todo): any {
    return this.ser.update(id, upTodo);
  }
  @Delete('/:id')
  deleteTodo(@Param('id') id: string): string {
    return this.ser.delete(id);
  }
}
