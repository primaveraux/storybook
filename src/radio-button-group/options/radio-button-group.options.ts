import { RadioButtonGroupSizeEnum } from '../enums/radio-button-group-size.enum';
import { IRadioButtonGroupOptions } from './radio-button-group-options.interface';

/** The checkbox options */
export class RadioButtonGroupOptions implements IRadioButtonGroupOptions {
  /** The size of the checkbox */
  size?: RadioButtonGroupSizeEnum = RadioButtonGroupSizeEnum.Regular;

  constructor(radioButtonGroup?: Partial<IRadioButtonGroupOptions>) {
    if (radioButtonGroup) {
      Object.assign(this, radioButtonGroup);
    }
  }
}
