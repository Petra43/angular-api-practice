import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableFieldBaseComponent } from './editable-field-base.component';

describe('EditableFieldBaseComponent', () => {
  let component: EditableFieldBaseComponent;
  let fixture: ComponentFixture<EditableFieldBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditableFieldBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableFieldBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
