// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { FormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { InputFieldComponent } from 'src/input-field/input-field.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
    title: 'Components/Input Field',
    component: InputFieldComponent,
    decorators: [
        moduleMetadata({
            imports: [
                FormsModule
            ]
        })
    ],
    // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
    argTypes: {
    },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<InputFieldComponent> = (args: InputFieldComponent) => ({
    props: args,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Default.args = {
    type: 'text',
    placeholder: 'Ex: João Peixoto',
    label: 'Default',
    options: []
};

export const Link = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Link.args = {
    type: 'text',
    placeholder: 'Ex: João Peixoto',
    label: 'Link',
    options: [],
    detailLabel: "Ver detalhe",
    detailUrl: "#"
};

export const HelpMessage = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
HelpMessage.args = {
    type: 'text',
    placeholder: 'Ex: João Peixoto',
    label: 'Help Message',
    options: [],
    description: "Some short message about the information of this input to help the user to fill it."
};

export const Tooltip = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Tooltip.args = {
    type: 'text',
    placeholder: 'Ex: João Peixoto',
    label: 'Tooltip',
    options: [],
    help: "Helpful tip about this input"
};

export const Tag = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Tag.args = {
    type: 'text',
    placeholder: 'Ex: João Peixoto',
    label: 'Tag',
    options: [],
    tag: "001"
};

export const Icon = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Icon.args = {
    type: 'text',
    placeholder: 'Ex: João Peixoto',
    label: 'Icon',
    options: [],
    icon: 'ti-ux-list-view'
};

export const Image = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Image.args = {
    type: 'text',
    placeholder: 'Ex: João Peixoto',
    label: 'Image',
    options: [],
    image: '../assets/flags/es.svg'
};

export const CreditCard = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
CreditCard.args = {
    type: 'creditCard',
    placeholder: 'Ex: João Peixoto',
    label: 'Icon',
    options: []
};

export const Select = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Select.args = {
    type: 'text',
    placeholder: 'Ex: João Peixoto',
    label: 'Select',
    options: [
        {
            value: 'passport',
            label: 'Passport'
        },
        {
            value: 'citizenCard',
            label: 'Citizen Card'
        },
        {
            value: 'driversLicense',
            label: 'Driver\'s License'
        }
    ]
};

export const SelectWithImage = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
SelectWithImage.args = {
    type: 'text',
    placeholder: 'Ex: João Peixoto',
    label: 'Select with image',
    options: [
        {
            value: 'pt',
            label: '+ 351',
            image: '../assets/flags/pt.svg'
        },
        {
            value: 'es',
            label: '+ 34',
            image: '../assets/flags/es.svg'
        },
        {
            value: 'uk',
            label: '+ 44',
            image: '../assets/flags/uk.svg'
        }
    ]
};

export const Button = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Button.args = {
    type: 'file',
    placeholder: 'Ex: João Peixoto',
    label: 'Button (input)',
    options: []
};
