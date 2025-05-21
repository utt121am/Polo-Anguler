import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfProfileComponent } from './self-profile.component';

describe('SelfProfileComponent', () => {
  let component: SelfProfileComponent;
  let fixture: ComponentFixture<SelfProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelfProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
