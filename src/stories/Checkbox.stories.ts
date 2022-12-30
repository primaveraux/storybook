// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';
import { CheckboxComponent } from 'src/checkbox/checkbox.component';
import { CheckboxSizeEnum } from '../checkbox';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Checkbox',
  component: CheckboxComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    extraClasses: { table: { disable: true } },
    isDisabled: {
      name: 'Is Disabled',
      description: 'Select if the checkbox is disabled or not.',
    },
    selected: {
      name: 'Selected',
      description: 'Select if the checkbox is selected or not.',
    },
    indeterminate: {
      name: 'Indeterminate',
      description: 'Select if the checkbox has an indetermination or not.',
    },
    options: {
      name: 'Options',
      description:
        'The checkbox options. The size needs to be a value from the CheckboxSizeEnum enum. See the <a href="#">documentation</a> for more info.',
    },
    ToggleCheckbox: {
      table: { disable: true },
    },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
  props: args,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Default.args = {
  selected: false,
  indeterminate: false,
  isDisabled: false,
  extraClasses: '',
  options: {
    icon: 'ti-ux-upgrade',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/255px-Flag_of_Portugal.svg.png',
    size: CheckboxSizeEnum.Regular,
  },
};

/*

export const PrimaryFilled = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
PrimaryFilled.args = {
  type: 'primaryFilled'
};

export const PrimaryOutlined = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
PrimaryOutlined.args = {
  type: 'primaryOutlined'
};

export const SecondaryFilled = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
SecondaryFilled.args = {
  type: 'secondaryFilled'
};

export const SecondaryOutlined = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
SecondaryOutlined.args = {
  type: 'secondaryOutlined'
};

export const Tertiary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Tertiary.args = {
  type: 'tertiary'
};

*/
