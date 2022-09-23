// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ButtonComponent } from 'src/button/button.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: ButtonComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    color: {
      name: "Color",
      description: "Select this button's color.",
      control: {
        type: 'select',
        options: ['theme', 'grey', 'info', 'error', 'warning', 'success', 'white', 'black'],
        labels: {
          theme: 'Theme',
          grey: 'Grey',
          info: 'Info',
          error: 'Error',
          warning: 'Warning',
          success: 'Success',
          white: 'White',
          black: 'Black',
        },
      },
    },
    type: {
      name: "Type",
      description: "Select this button's type.",
      control: {
        type: 'select',
        options: ['primaryFilled', 'primaryOutlined', 'secondaryFilled', 'secondaryOutlined', 'tertiary'],
        labels: {
          primaryFilled: 'Primary Filled',
          primaryOutlined: 'Primary Outlined',
          secondaryFilled: 'Secondary Filled',
          secondaryOutlined: 'Secondary Outlined',
          tertiary: 'Tertiary',
        },
      },
    },
    size: {
      name: "Size",
      description: "Select this button's size.",
      control: {
        type: 'select',
        options: ['small', 'default', 'large'],
        labels: {
          small: 'Small',
          default: 'Default',
          large: 'Large',
        },
      },
    },
    count: {
      name: "Count",
      description: "Number that will appear after the button's text."
    },
    extraClasses: {
      name: "Extra Classes",
      description: "Insert any custom CSS classes that you wish the button to have."
    },
    icon: {
      name: "Icon",
      description: "Insert Pollen icons class name."
    },
    isDisabled: {
      name: "Is Disabled",
      description: "Select if the button is disabled or not."
    },
    loading: {
      name: "Loading",
      description: "Select if the button should show the loading animation or not."
    },
    nextButton: {
      name: "Next Button",
      description: "Select if the button should show the 'next' arrow after it's text."
    },
    url: {
      name: "URL",
      description: "Insert the URL to where this button should point to."
    },
    text: {
      name: "Text",
      description: "Insert this button's text."
    },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

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