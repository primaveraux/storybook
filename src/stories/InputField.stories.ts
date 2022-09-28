// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { FormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { InputFieldComponent } from 'src/input-field/input-field.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
    title: 'Input Field',
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
        type: { table: { disable: true } },
        ccImage: { table: { disable: true } },
        printedValue: { table: { disable: true } },
        selectedOption: { table: { disable: true } },
        selectIsOpen: { table: { disable: true } },
        selectStyles: { table: { disable: true } },
        extraStyles: { table: { disable: true } },
        clearValue: { table: { disable: true } },
        creditCardType: { table: { disable: true } },
        formatFieldInput: { table: { disable: true } },
        formatValue: { table: { disable: true } },
        ngAfterViewInit: { table: { disable: true } },
        ngOnChanges: { table: { disable: true } },
        reformatField: { table: { disable: true } },
        selectValue: { table: { disable: true } },
        setExtraStyles: { table: { disable: true } },
        toggleSelectOpen: { table: { disable: true } },
        updateSelectedOptions: { table: { disable: true } },
        detailEl: { table: { disable: true } },
        dropdownEl: { table: { disable: true } },
        selectEl: { table: { disable: true } },
        tagEl: { table: { disable: true } },
        size: {
            name: "Size",
            description: "Select this button's size.",
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
        description: {
            name: "Description",
            description: "Insert a description for this input field."
        },
        errorMessage: {
            name: "Error message",
            description: "Insert an error message to show when the field has an error."
        },
        extraClasses: {
            name: "Extra classes",
            description: "Insert any extra classes that you wish this field to have."
        },
        hasError: {
            name: "Has error",
            description: "Choose wether this field has an error or not."
        },
        help: {
            name: "Help",
            description: "Insert an help text that will be shown when hovering the help icon."
        },
        id: {
            name: "ID",
            description: "Insert this field's ID."
        },
        isDisabled: {
            name: "Is disabled",
            description: "Select wether this field is disabled or not."
        },
        value: {
            name: "Value",
            description: "Insert this field's default value."
        },
        options: {
            name: "Options",
            description: "Insert an object that contains this field's options."
        },
        icon: {
            name: "Icon",
            description: "Insert the icon that you wish this field to have (from the 'Pollen' font)."
        },
        image: {
            name: "Image",
            description: "Insert the path to the image you wish this field to have."
        },
        detailLabel: {
            name: "Detail label",
            description: "Insert the label for the detail link."
        },
        detailUrl: {
            name: "Detail URL",
            description: "Insert the URL where the detail link will point to."
        },
        tag: {
            name: "Tag",
            description: "Insert the tag that will show at the start of this field."
        }
    }
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
Default.argTypes = {
    options: { table: { disable: true } },
    detailLabel: { table: { disable: true } },
    detailUrl: { table: { disable: true } },
    tag: { table: { disable: true } },
    option: { table: { disable: true } },
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
Link.argTypes = {
    label: { table: { disable: true } },
    options: { table: { disable: true } },
    tag: { table: { disable: true } },
    option: { table: { disable: true } },
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
HelpMessage.argTypes = {
    options: { table: { disable: true } },
    detailLabel: { table: { disable: true } },
    detailUrl: { table: { disable: true } },
    tag: { table: { disable: true } },
    option: { table: { disable: true } },
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
Tooltip.argTypes = {
    options: { table: { disable: true } },
    detailLabel: { table: { disable: true } },
    detailUrl: { table: { disable: true } },
    tag: { table: { disable: true } },
    option: { table: { disable: true } },
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
Tag.argTypes = {
    options: { table: { disable: true } },
    detailLabel: { table: { disable: true } },
    detailUrl: { table: { disable: true } },
    option: { table: { disable: true } },
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
Icon.argTypes = {
    options: { table: { disable: true } },
    detailLabel: { table: { disable: true } },
    detailUrl: { table: { disable: true } },
    tag: { table: { disable: true } },
    option: { table: { disable: true } },
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
Image.argTypes = {
    options: { table: { disable: true } },
    detailLabel: { table: { disable: true } },
    detailUrl: { table: { disable: true } },
    tag: { table: { disable: true } },
    option: { table: { disable: true } },
};

export const CreditCard = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
CreditCard.args = {
    type: 'creditCard',
    placeholder: 'Ex: João Peixoto',
    label: 'Credit Card',
    options: []
};
CreditCard.argTypes = {
    options: { table: { disable: true } },
    detailLabel: { table: { disable: true } },
    detailUrl: { table: { disable: true } },
    tag: { table: { disable: true } },
    icon: { table: { disable: true } },
    image: { table: { disable: true } },
    option: { table: { disable: true } },
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
Select.argTypes = {
    detailLabel: { table: { disable: true } },
    detailUrl: { table: { disable: true } },
    tag: { table: { disable: true } },
    icon: { table: { disable: true } },
    image: { table: { disable: true } },
    option: { table: { disable: true } },
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
SelectWithImage.argTypes = {
    detailLabel: { table: { disable: true } },
    detailUrl: { table: { disable: true } },
    tag: { table: { disable: true } },
    icon: { table: { disable: true } },
    image: { table: { disable: true } },
    option: { table: { disable: true } },
};

export const PhoneNumber = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
PhoneNumber.args = {
    type: 'phone',
    placeholder: 'Ex: João Peixoto',
    label: 'Phone number',
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
PhoneNumber.argTypes = {
    detailLabel: { table: { disable: true } },
    detailUrl: { table: { disable: true } },
    tag: { table: { disable: true } },
    icon: { table: { disable: true } },
    image: { table: { disable: true } },
    option: { table: { disable: true } },
};

export const Button = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Button.args = {
    type: 'file',
    placeholder: 'Ex: João Peixoto',
    label: 'Button (input)',
    options: []
};
Button.argTypes = {
    placeholder: { table: { disable: true } },
    options: { table: { disable: true } },
    detailLabel: { table: { disable: true } },
    detailUrl: { table: { disable: true } },
    tag: { table: { disable: true } },
    icon: { table: { disable: true } },
    image: { table: { disable: true } },
    option: { table: { disable: true } },
};
