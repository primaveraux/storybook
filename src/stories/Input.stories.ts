// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';
import { InputComponent } from 'src/input/input.component';
import { InputSizeEnum } from '../input';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Input',
  component: InputComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    isDisabled: {
      name: 'Is Disabled',
      description: 'Select if the input is disabled or not.',
    },
    value: {
      name: 'Value',
      description: "The input's value.",
    },
    options: {
      name: 'Options',
      description:
        'The input options. The size needs to be a value from the InputSizeEnum enum. See the <a href="#">documentation</a> for more info.',
    },
    valueChange: {
      name: 'valueChange',
      description:
        'The output variable responsible for emitting an event to a parent component.',
    },
    clearValue: {
      table: { disable: true },
    },
    modelChange: {
      table: { disable: true },
    },
    setDisabledState: {
      table: { disable: true },
    },
    input: {
      table: { disable: true },
    },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<InputComponent> = (args: InputComponent) => ({
  props: args,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Default.args = {
  isDisabled: false,
  value: '',
  options: {
    placeholder: 'Ex: João Correia',
    maxLength: 50,
    size: InputSizeEnum.Regular,
  },
};
