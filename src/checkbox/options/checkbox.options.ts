import { CheckboxSizeEnum } from '../enums/checkbox-size.enum';
import { ICheckboxOptions } from './checkbox-options.interface';

/** The checkbox options */
export class CheckboxOptions implements ICheckboxOptions {
	/** The icon the checkbox will have */
	icon?: string;
	/** The image the checkbox will have */
	image?: string;
	/** The size of the checkbox */
	size?: CheckboxSizeEnum = CheckboxSizeEnum.Regular;

	constructor(checkbox?: Partial<ICheckboxOptions>) {
		if (checkbox) {
			Object.assign(this, checkbox);
		}
	}
}
