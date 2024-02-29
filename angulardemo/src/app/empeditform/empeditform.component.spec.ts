import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpeditformComponent } from './empeditform.component';

describe('EmpeditformComponent', () => {
  let component: EmpeditformComponent;
  let fixture: ComponentFixture<EmpeditformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpeditformComponent]
    });
    fixture = TestBed.createComponent(EmpeditformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
