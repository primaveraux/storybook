// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ButtonComponent } from 'src/button/button.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: ButtonComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    type: { table: { disable: true } },
    extraClasses: { table: { disable: true } },
    url: { table: { disable: true } },
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

const TemplateStories: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
  template: ` <div class='buttons-container'>
                <pri-button
                  url="#"
                  icon="${args.icon}"
                  text="${args.text}"
                  size="${args.size}"
                  type="primaryFilled"
                  color="${args.color}"
                  [count] = "${args.count}"
                  [nextButton] = "${args.nextButton}"
                  [isDisabled] = "${args.isDisabled}"
                  [loading] = "${args.loading}"
                  extraClasses=""
                  ></pri-button>
              </div>

              <div class='buttons-container'>
                <pri-button
                  url="#"
                  icon="${args.icon}"
                  text="${args.text}"
                  size="${args.size}"
                  type="primaryOutlined"
                  color="${args.color}"
                  [count] = "${args.count}"
                  [nextButton] = "${args.nextButton}"
                  [isDisabled] = "${args.isDisabled}"
                  [loading] = "${args.loading}"
                  extraClasses=""
                ></pri-button>
              </div>

              <div class='buttons-container'>
                <pri-button
                  url="#"
                  icon="${args.icon}"
                  text="${args.text}"
                  size="${args.size}"
                  type="secondaryFilled"
                  color="${args.color}"
                  [count] = "${args.count}"
                  [nextButton] = "${args.nextButton}"
                  [isDisabled] = "${args.isDisabled}"
                  [loading] = "${args.loading}"
                  extraClasses=""
                ></pri-button>
              </div>

              <div class='buttons-container'>
                <pri-button
                  url="#"
                  icon="${args.icon}"
                  text="${args.text}"
                  size="${args.size}"
                  type="secondaryOutlined"
                  color="${args.color}"
                  [count] = "${args.count}"
                  [nextButton] = "${args.nextButton}"
                  [isDisabled] = "${args.isDisabled}"
                  [loading] = "${args.loading}"
                  extraClasses=""
                ></pri-button>
              </div>

              <div class='buttons-container'>
                <pri-button
                  url="#"
                  icon="${args.icon}"
                  text="${args.text}"
                  size="${args.size}"
                  type="tertiary"
                  color="${args.color}"
                  [count] = "${args.count}"
                  [nextButton] = "${args.nextButton}"
                  [isDisabled] = "${args.isDisabled}"
                  [loading] = "${args.loading}"
                  extraClasses=""
                ></pri-button>
              </div>`
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

export const Stories = TemplateStories.bind({});