import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpreactiveformComponent } from './empreactiveform.component';

describe('EmpreactiveformComponent', () => {
  let component: EmpreactiveformComponent;
  let fixture: ComponentFixture<EmpreactiveformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpreactiveformComponent]
    });
    fixture = TestBed.createComponent(EmpreactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
