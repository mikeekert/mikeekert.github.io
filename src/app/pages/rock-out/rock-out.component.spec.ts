import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockOutComponent } from './rock-out.component';

describe('RockOutComponent', () => {
  let component: RockOutComponent;
  let fixture: ComponentFixture<RockOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RockOutComponent]
    });
    fixture = TestBed.createComponent(RockOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
