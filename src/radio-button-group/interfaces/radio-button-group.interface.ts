/**
 * Represents a default range item. Has a set of options and function that adds behavior to the item.
 */
export class IRadioButtonGroup<Value = string> {
  /** Name of the item */
  value!: Value;
  /** Description of the Item */
  description!: string;
  /** Item is selected */
  selected?: boolean;
  /** Item is disabled */
  disabled?: boolean;
  /** The icon the radio button will have */
  icon?: string;
  /** The image the radio button will have */
  image?: string;
}
