import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOfTheWeekComponent } from './game-of-the-week.component';

describe('GameOfTheweekComponent', () => {
  let component: GameOfTheWeekComponent;
  let fixture: ComponentFixture<GameOfTheWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameOfTheWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameOfTheWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
