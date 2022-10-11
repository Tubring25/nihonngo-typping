import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecButtonComponent } from './spec-button.component';

describe('SpecButtonComponent', () => {
  let component: SpecButtonComponent;
  let fixture: ComponentFixture<SpecButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
