import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list.component';
import { By } from '@angular/platform-browser';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with predefined todos and an empty newTodo string', () => {
    expect(component.todos).toEqual(['task', 'task']);
    expect(component.newTodo).toBe('');
  });

  it('should add a todo when addTodo is called with valid input', () => {
    component.newTodo = 'New Task';
    component.addTodo();
    expect(component.todos.length).toBe(3);
    expect(component.todos[2]).toBe('New Task');
    expect(component.newTodo).toBe('');
  });

  it('should not add a todo when addTodo is called with empty or whitespace input', () => {
    component.newTodo = ' ';
    component.addTodo();
    expect(component.todos.length).toBe(2);
  });

  it('should remove a todo when removeTodo is called with a valid index', () => {
    component.removeTodo(0);
    expect(component.todos.length).toBe(1);
    expect(component.todos).toEqual(['task']);
  });

  it('should render the todos in the template', () => {
    fixture.detectChanges();
    const todoElements = fixture.debugElement.queryAll(By.css('.task'));
    expect(todoElements.length).toBe(2);
    expect(todoElements[0].nativeElement.textContent).toContain('task');
  });

  it('should add a todo when the Add button is clicked', () => {
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    const addButton = fixture.debugElement.query(By.css('.add-button')).nativeElement;

    inputElement.value = 'Another Task';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    addButton.click();
    fixture.detectChanges();

    expect(component.todos.length).toBe(3);
    expect(component.todos[2]).toBe('Another Task');
  });

  it('should remove a todo when the Remove button is clicked', () => {
    fixture.detectChanges();
    const removeButton = fixture.debugElement.query(By.css('.delete-button')).nativeElement;

    removeButton.click();
    fixture.detectChanges();

    expect(component.todos.length).toBe(1);
    expect(component.todos).toEqual(['task']);
  });

  it('should show an image for each todo item', () => {
    fixture.detectChanges();
    const imgElements = fixture.debugElement.queryAll(By.css('img'));
    expect(imgElements.length).toBe(2);
  
    imgElements.forEach((img: any) => {
      const imageElement = img.nativeElement as HTMLImageElement;
      expect(imageElement.src).toContain('todo.JPEG');
    });
  })  

  it('should edit a todo when the Edit button is clicked', () => {
    fixture.detectChanges();

    const todoElements = fixture.debugElement.queryAll(By.css('.task'));
    const editButton = todoElements[0].query(By.css('.edit-button')).nativeElement;

    editButton.click();
    fixture.detectChanges();

    const inputField = todoElements[0].query(By.css('input.edit-input')).nativeElement;
    expect(inputField).toBeTruthy();

    inputField.value = 'Edited Task';
    inputField.dispatchEvent(new Event('input'));
    const saveButton = todoElements[0].query(By.css('.save-button')).nativeElement;
    saveButton.click();
    fixture.detectChanges();

    expect(component.todos[0]).toBe('Edited Task');
    const updatedTodo = todoElements[0].nativeElement.textContent.trim();
    expect(updatedTodo).toContain('Edited Task');
  });

});
