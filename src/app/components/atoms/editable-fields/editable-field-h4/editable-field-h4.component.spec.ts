import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableFieldH4Component } from './editable-field-h4.component';

describe('EditableFieldH4Component', () => {
  let component: EditableFieldH4Component;
  let fixture: ComponentFixture<EditableFieldH4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditableFieldH4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableFieldH4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
