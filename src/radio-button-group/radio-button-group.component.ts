import { CommonModule } from '@angular/common';
import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter, Input,
	OnChanges,
	OnInit,
	Output,
	ViewEncapsulation
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRadioButtonGroup } from './interfaces/radio-button-group.interface';
import { RadioButtonGroupOptions } from './options/radio-button-group.options';

@Component({
	selector: 'pri-radio-button-group',
	templateUrl: 'radio-button-group.component.html',
	styleUrls: ['radio-button-group.component.scss'],
	encapsulation: ViewEncapsulation.None,
	imports: [CommonModule, FormsModule],
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioButtonGroupComponent<Value = string> implements OnInit, OnChanges {
	@Input() options: RadioButtonGroupOptions = new RadioButtonGroupOptions();
	@Input() model: Array<IRadioButtonGroup<Value>> = new Array<IRadioButtonGroup<Value>>;
	@Input() layout: 'horizontal' | 'vertical' = 'horizontal';

	@Output() valueChange: EventEmitter<IRadioButtonGroup<Value>> = new EventEmitter<IRadioButtonGroup<Value>>();

	radioSelected: IRadioButtonGroup<Value> = new IRadioButtonGroup<Value>;

	ngOnInit() {
		if (this.model?.length > 0) {
			this.setSelectedRadio();
			// this.onRadioChange();
		}
	}

	ngOnChanges() {
		this.setSelectedRadio();
	}

	setSelectedRadio() {
		this.radioSelected = this.model.find((m) => m.selected) || this.model[0];
	}

	onRadioChange() {
		// this.valueChange.emit(this.radioSelected);
	}
}
