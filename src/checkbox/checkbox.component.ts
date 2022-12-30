import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { CheckboxOptions } from './options/checkbox.options';

@Component({
  selector: 'pri-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
  @Input() options: CheckboxOptions = new CheckboxOptions();
  @Input() selected = false;
  @Input() indeterminate = false;
  @Input() isDisabled = false;
  @Input() extraClasses = '';

  @Output() checkboxClick: EventEmitter<boolean> = new EventEmitter();

  public ToggleCheckbox() {
    this.selected = !this.selected;
    this.checkboxClick.emit(this.selected);
  }
}
