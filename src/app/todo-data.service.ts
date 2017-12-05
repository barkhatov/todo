import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoDataService {

  lastId: number = 0;
  todos: Todo[] = [];

  constructor() {}

  addTodo(todo: Todo): void {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    if (todo.title) {
      this.todos.push(todo);
    }
  }

  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  updateTodoById(id: number, values: Object): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  deleteAllTodos(): void {
    this.todos.length = 0;
  }

  deleteSelectedTodos(): Todo[] {
    return this.todos = this.todos.filter(todo => todo.complete === false);
  }

  toggleTodoComplete(todo: Todo) {
    let updateTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    })
    return updateTodo;
  }


}
