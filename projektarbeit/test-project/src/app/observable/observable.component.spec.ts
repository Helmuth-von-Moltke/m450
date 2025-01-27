import { TestBed } from '@angular/core/testing';
import { ObservableComponent } from './observable.component';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('ObservableComponent', () => {
  let component: ObservableComponent;
  let fixture: any;
  let mockRouter: any;

  beforeEach(async () => {
    mockRouter = {
      navigate: jasmine.createSpy('navigate'),
    };

    await TestBed.configureTestingModule({
      imports: [ObservableComponent],
      providers: [{ provide: Router, useValue: mockRouter }],
    }).compileComponents();

    fixture = TestBed.createComponent(ObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should filter users by age for ageFilter$', () => {
    component.ageFilter$.next(50);
    fixture.detectChanges();

    component.filteredUsers$.subscribe((filteredUsers) => {
      expect(filteredUsers.length).toBeGreaterThan(0);
    });
  });
  
  it('should filter users by age for ageFilterR$', () => {
    component.ageFilterR$.next(60);
    fixture.detectChanges();

    component.filteredUsersR$.subscribe((filteredUsersR) => {
      expect(filteredUsersR.length).toBe(4);
      expect(filteredUsersR.map((u) => u.age)).toEqual([66, 77, 88, 99]);
    });
  });

  it('should update ageFilter$ when updateAgeFilter is called', () => {
    const event = {
      target: { value: '40' }
    } as unknown as Event;
  
    component.updateAgeFilter(event);
    expect(component.ageFilter$.getValue()).toBe(40);
  });
  
  it('should update ageFilterR$ when updateAgeFilterR is called', () => {
    const event = {
      target: { value: '70' }
    } as unknown as Event;
  
    component.updateAgeFilterR(event);
    expect(component.ageFilterR$.getValue()).toBe(70);
  });
  

  it('should navigate to the user view when editUser is called', () => {
    component.editUser(3);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['user', 3]);
  });

  it('should navigate to "registration" when navigateToNotFound is called', () => {
    component.navigateToNotFound();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['registration']);
  });

  it('should render filtered users in the template for ageFilter$', () => {
    component.ageFilter$.next(30);
    fixture.detectChanges();

    const userElements = fixture.debugElement.queryAll(By.css('ul:nth-of-type(1) li'));
    expect(userElements.length).toBe(7);
    expect(userElements[0].nativeElement.textContent).toContain('Charles');
    expect(userElements[1].nativeElement.textContent).toContain('Dave');
  });

  it('should render filtered users in the template for ageFilterR$', () => {
    component.ageFilterR$.next(80);
    fixture.detectChanges();

    const userElements = fixture.debugElement.queryAll(By.css('ul:nth-of-type(2) li'));
    expect(userElements.length).toBe(2);
    expect(userElements[0].nativeElement.textContent).toContain('Hans');
    expect(userElements[1].nativeElement.textContent).toContain('Ivy');
  });
});
