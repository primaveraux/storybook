import { InputSizeEnum } from '../enums/input-size.enum';

/** The input options */
export class InputOptions {
	/** The text for the input placeholder */
	placeholder?: string;
	/** The maximum number of characters that the user is allowed to enter into the input field. */
	maxLength?: number;
	/** The size of the input */
	size?: InputSizeEnum = InputSizeEnum.Regular;
}
