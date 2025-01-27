import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noting',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './noting.component.html',
  styleUrls: ['./noting.component.css']
})
export class NotingComponent {
  notes: string[] = []; 
  newNote: string = '';

  addNote() {
    if (this.newNote.trim()) {
      this.notes.push(this.newNote);
      this.newNote = '';
    }
  }

  removeNote(index: number) {
    this.notes.splice(index, 1);
  }
}
