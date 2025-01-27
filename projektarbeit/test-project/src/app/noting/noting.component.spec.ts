import { TestBed } from '@angular/core/testing';
import { NotingComponent } from './noting.component';
import { By } from '@angular/platform-browser';

describe('NotingComponent', () => {
  let component: NotingComponent;
  let fixture: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotingComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with an empty notes array and newNote as an empty string', () => {
    expect(component.notes).toEqual([]);
    expect(component.newNote).toBe('');
  });

  it('should add a note when addNote is called with valid input', () => {
    component.newNote = 'Test Note';
    component.addNote();
    expect(component.notes.length).toBe(1);
    expect(component.notes[0]).toBe('Test Note');
    expect(component.newNote).toBe('');
  });

  it('should not add a note when addNote is called with empty input', () => {
    component.newNote = ' ';
    component.addNote();
    expect(component.notes.length).toBe(0);
  });

  it('should remove a note when removeNote is called with a valid index', () => {
    component.notes = ['Note 1', 'Note 2', 'Note 3'];
    component.removeNote(1);
    expect(component.notes.length).toBe(2);
    expect(component.notes).toEqual(['Note 1', 'Note 3']);
  });

  it('should render notes in the template', () => {
    component.notes = ['Note 1', 'Note 2'];
    fixture.detectChanges();
    const noteElements = fixture.debugElement.queryAll(By.css('.note'));
    expect(noteElements.length).toBe(2);
    expect(noteElements[0].nativeElement.textContent.trim()).toContain('Note 1');
    expect(noteElements[1].nativeElement.textContent.trim()).toContain('Note 2');
  });

  it('should add a note when the Add button is clicked', () => {
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    const addButton = fixture.debugElement.query(By.css('.add-button')).nativeElement;

    inputElement.value = 'New Note';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    addButton.click();
    fixture.detectChanges();

    expect(component.notes.length).toBe(1);
    expect(component.notes[0]).toBe('New Note');
  });

  it('should remove a note when the Remove button is clicked', () => {
    component.notes = ['Note 1'];
    fixture.detectChanges();

    const removeButton = fixture.debugElement.query(By.css('.note button')).nativeElement;
    removeButton.click();
    fixture.detectChanges();

    expect(component.notes.length).toBe(0);
  });
});
