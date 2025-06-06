import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlameComponent } from './flame.component';

describe('FlameComponent', () => {
  let component: FlameComponent;
  let fixture: ComponentFixture<FlameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
