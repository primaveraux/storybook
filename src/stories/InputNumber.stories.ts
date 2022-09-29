// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { FormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { InputFieldComponent } from 'src/input-field/input-field.component';
import { InputNumberComponent } from 'src/input-number/input-number.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
    title: 'Input Number',
    component: InputNumberComponent,
    decorators: [
        moduleMetadata({
            imports: [
                FormsModule
            ],
            declarations: [
                InputFieldComponent
            ]
        })
    ],
    // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
    argTypes: {
        extraClasses: { table: { disable: true } },
        id: { table: { disable: true } },
        type: { table: { disable: true } },
        value: { table: { disable: true } },
        ngOnInit: { table: { disable: true } },
        size: {
            name: "Size",
            description: "Select this fields's size.",
            control: {
                type: 'select',
                options: ['small', 'regular', 'large'],
                labels: {
                    small: 'Small',
                    regular: 'Regular',
                    large: 'Large',
                },
            },
        },
        placeholder: {
            name: "Placeholder",
            description: "Insert a placeholder for this input field."
        },
        label: {
            name: "Label",
            description: "Insert a label for this input field."
        },
        errorMessage: {
            name: "Error message",
            description: "Insert an error message to show when the field has an error."
        },
        hasError: {
            name: "Has error",
            description: "Choose wether this field has an error or not."
        },
        help: {
            name: "Help Text (Tooltip)",
            description: "Insert an help text that will be shown when hovering the help icon."
        },
        isDisabled: {
            name: "Is disabled",
            description: "Select wether this field is disabled or not."
        },
        icon: {
            name: "Icon",
            description: "Insert the icon that you wish this field to have (from the 'Pollen' font)."
        },
        tag: {
            name: "Tag",
            description: "Insert the tag that will show at the start of this field."
        },
        min: {
            name: "Min",
            description: "Insert the minimum number this input can have."
        },
        max: {
            name: "Max",
            description: "Insert the maximum number this input can have."
        }
    }
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<InputNumberComponent> = (args: InputNumberComponent) => ({
    props: args,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Default.args = {
    placeholder: '0.00',
    label: 'Price',
    tag: '€',
    help: 'Helpful tip about this input'
};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Secondary.args = {
    type: 'numberSecondary',
    placeholder: '0',
    label: 'Quantity',
    help: 'Helpful tip about this input'
};
Secondary.argTypes = {
    tag: { table: { disable: true } },
    icon: { table: { disable: true } },
};