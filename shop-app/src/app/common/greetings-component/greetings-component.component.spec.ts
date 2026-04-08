import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingsComponentComponent } from './greetings-component.component';

describe('GreetingsComponentComponent', () => {
  let component: GreetingsComponentComponent;
  let fixture: ComponentFixture<GreetingsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetingsComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GreetingsComponentComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
