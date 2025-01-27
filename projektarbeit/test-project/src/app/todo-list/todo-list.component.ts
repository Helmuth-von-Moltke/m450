import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos = ['task', 'task'];
  newTodo: string = '';
  editingIndex: number | null = null;
  editingTodo: string = '';

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push(this.newTodo);
      this.newTodo = '';
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

  startEditing(index: number) {
    this.editingIndex = index;
    this.editingTodo = this.todos[index];
  }

  saveEdit() {
    if (this.editingTodo.trim() && this.editingIndex !== null) {
      this.todos[this.editingIndex] = this.editingTodo;
    }
    this.cancelEdit();
  }

  cancelEdit() {
    this.editingIndex = null;
    this.editingTodo = '';
  }
}
