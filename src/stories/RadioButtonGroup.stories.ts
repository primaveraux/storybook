// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';
import { RadioButtonGroupComponent } from 'src/radio-button-group/radio-button-group.component';
import { RadioButtonGroupSizeEnum } from '../radio-button-group';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Radio Button Group',
  component: RadioButtonGroupComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    extraClasses: { table: { disable: true } },
    model: {
      name: 'Model',
      description:
        'The model for the radio button group. Here you can pass an array of IRadioButtonGroup<TValue> See the <a href="#">documentation</a> for more info.',
    },
    options: {
      name: 'Options',
      description:
        'The radio button group options. The size needs to be a value from the RadioButtonGroupSizeEnum enum. See the <a href="#">documentation</a> for more info.',
    },
    layout: {
      name: 'Layout',
      description:
        "The radio button group's layout. Here you can set if the radio buttons are shown horizontally or vertically.",
    },
    valueChange: {
      name: 'valueChange',
      description:
        'The output variable responsible for emitting an event to a parent component.',
    },
    radioSelected: {
      table: { disable: true },
    },
    ngOnChanges: {
      table: { disable: true },
    },
    ngOnInit: {
      table: { disable: true },
    },
    onRadioChange: {
      table: { disable: true },
    },
    setSelectedRadio: {
      table: { disable: true },
    },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<RadioButtonGroupComponent> = (
  args: RadioButtonGroupComponent
) => ({
  props: args,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Default.args = {
  model: [
    {
      description: 'Checkbox 1',
      value: 'Escolha 1',
      selected: true,
      icon: 'ti-ux-world',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/255px-Flag_of_Portugal.svg.png',
    },
    {
      description: 'Checkbox 2',
      value: 'Escolha 2',
      icon: 'ti-ux-upgrade',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/255px-Bandera_de_Espa%C3%B1a.svg.png',
    },
    {
      description: 'Checkbox 3',
      value: 'Escolha 3',
      disabled: true,
      icon: 'ti-ux-check',
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png',
    },
  ],
  options: {
    size: RadioButtonGroupSizeEnum.Regular,
  },
};
