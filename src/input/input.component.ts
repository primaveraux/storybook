import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputOptions } from './options/input.options';

@Component({
  selector: 'pri-input',
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, FormsModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input()
  isDisabled!: boolean;
  @Input() options: InputOptions = new InputOptions();
  @Input()
  value!: string;

  @Output() valueChange: EventEmitter<string> = new EventEmitter();
  @ViewChild('input', { static: true })
  input!: ElementRef;

  constructor(private changeDetection: ChangeDetectorRef) {}

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
    this.changeDetection.detectChanges();
  }

  clearValue() {
    this.modelChange('');
    this.input.nativeElement.focus();
  }

  modelChange(value: string) {
    this.value = value;
    // this.valueChange.emit(value);
  }
}
