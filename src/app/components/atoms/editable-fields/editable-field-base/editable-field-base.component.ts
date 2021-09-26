import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editable-field-base',
  template: ''
})
export class EditableFieldBaseComponent implements OnInit {

  @Input() value!: string;
  public isEditing: boolean = false;
  public initialValue: string = '';
  @Output() newValueEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.initialValue = this.value
  }

  /**
   * trigger on clicking the field that you want to be edited
   * @param e click event
   */
  editValue(e: MouseEvent): void  {
    this.isEditing = true
  }

  /**
   * if the enter key is pressed will save the value
   * @param e keyup event
   */
  saveValue(e: KeyboardEvent): void {
    if(e.key === 'Enter') {
      this.isEditing = false
      this.initialValue = this.value
      this.newValueEvent.emit(this.value);
    }
  }

  /**
   * if the user clicks outside of the input it will cancel the changes
   * @param e focusout event
   */
  cancelEditing(e: Event): void  {
    this.isEditing = false

    this.value = this.initialValue
  }

}
