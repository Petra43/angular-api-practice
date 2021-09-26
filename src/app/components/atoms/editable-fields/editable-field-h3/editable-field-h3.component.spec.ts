import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableFieldH3Component } from './editable-field-h3.component';

describe('EditableFieldH3Component', () => {
  let component: EditableFieldH3Component;
  let fixture: ComponentFixture<EditableFieldH3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditableFieldH3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableFieldH3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
