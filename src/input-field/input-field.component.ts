import { AfterViewInit, Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'pri-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements AfterViewInit, OnChanges {

  extraStyles: {};
  selectStyles: {};
  printedValue: string;
  ccImage: string;
  selectIsOpen: boolean;
  selectedOption: any;

  @Input() id = '';
  @Input() value = '';
  @Input() label = '';
  @Input() placeholder = '';
  @Input() extraClasses = '';
  @Input() description = '';
  @Input() help = '';
  @Input() tag = '';
  @Input() icon = '';
  @Input() image = '';
  @Input() isDisabled = false;
  @Input() hasError = false;
  @Input() errorMessage = 'Please fill, it can\'t be empty';
  @Input() creditCardImage = false;
  @Input() detailLabel = '';
  @Input() detailUrl = '';
  @Input() options: any[] = []; // Format: [{value: 'passport', label: 'Passport', image: 'path/to/image.svg', selected: true|false}]
  @Input() selectOptions = ''; // each option can have an image
  @Input() option = '';
  @Input() type = 'text'; // text | file | number | password | creditCard | phone
  @Input() size = 'regular'; // small | regular | large

  constructor() {
    this.extraStyles = {};
    this.selectStyles = {};
    this.printedValue = this.value;
    this.ccImage = "";
    this.selectIsOpen = false;
    this.selectedOption = { value: '', label: '', image: '' };

    this.creditCardType();
  }

  @ViewChild('detailEl')
  detailEl: ElementRef = ViewChild('detailEl');

  @ViewChild('tagEl')
  tagEl: ElementRef = ViewChild('tagEl');

  @ViewChild('selectEl')
  selectEl: ElementRef = ViewChild('selectEl');

  @ViewChild('dropdownEl')
  dropdownEl: ElementRef = ViewChild('dropdownEl');

  ngOnChanges() {
    this.updateSelectedOptions();
  }

  ngAfterViewInit() {
    this.setExtraStyles();

    if (this.type == 'creditCard' || this.type == 'phone')
      this.formatValue(this.type);
  }

  setExtraStyles(): void {
    // Add styles if the field has a detail's link
    if (this.detailLabel && typeof this.detailEl == 'object') {
      let detailWidth = this.detailEl.nativeElement.offsetWidth + (this.detailEl.nativeElement.offsetWidth * 0.08) + 24;

      this.extraStyles = {
        ...this.extraStyles,
        'min-width': '300px',
        'padding-right': detailWidth + 'px'
      };
    }

    // Add styles if the field has a tag
    if (this.tag && typeof this.tagEl == 'object') {
      let tagWidth = this.tagEl.nativeElement.offsetWidth + (this.tagEl.nativeElement.offsetWidth * 0.08) + 14;

      this.extraStyles = {
        ...this.extraStyles,
        'min-width': '300px',
        'padding-left': tagWidth + 'px'
      };
    }

    // Add styles if the field has options
    // Assign the "selected" attribute if an option is selected
    if (this.options.length && typeof this.selectEl == 'object') {
      let extraWidth = 40;
      let extraPadding = 55;

      if (this.size == 'small') {
        extraWidth = 25;
        extraPadding = 35;
      } else if (this.size == 'large') {
        extraWidth = 50;
        extraPadding = 65;
      }

      let selectWidth = this.dropdownEl.nativeElement.offsetWidth + extraWidth;
      let selectPadding = this.dropdownEl.nativeElement.offsetWidth + extraPadding;

      this.extraStyles = {
        ...this.extraStyles,
        'min-width': '300px',
        'padding-left': selectPadding + 'px'
      };

      this.selectStyles = {
        ...this.selectStyles,
        'width': selectWidth + 'px'
      }
    }
  }

  updateSelectedOptions() {
    if (this.options.length) {
      let selectedOptions = 0;
      this.options.forEach((option, key) => {
        if (option.value == this.option) {
          this.options[key] = {
            ...this.options[key],
            selected: true
          }

          this.selectedOption = { value: this.options[key].value, label: this.options[key].label, image: this.options[key].image };

          selectedOptions++;
        } else {
          this.options[key] = {
            ...this.options[key],
            selected: false
          }
        }
      });

      if (!selectedOptions) {
        this.selectedOption = { value: this.options[0].value, label: this.options[0].label, image: this.options[0].image };
      }
    }
  }

  toggleSelectOpen() {
    this.selectIsOpen = !this.selectIsOpen;
  }

  selectValue(value: string) {
    this.option = value;
    this.updateSelectedOptions();
    this.toggleSelectOpen();
  }

  // Return what credit card type the passed string is
  // https://stackoverflow.com/questions/5911236/identify-card-type-from-card-number
  creditCardType(): void {
    // visa
    var re = new RegExp("^4");
    if (this.value.match(re) != null)
      this.ccImage = "VISA";

    // Mastercard 
    // Updated for Mastercard 2017 BINs expansion
    if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(this.value))
      this.ccImage = "MASTERCARD";

    // AMEX
    re = new RegExp("^3[47]");
    if (this.value.match(re) != null)
      this.ccImage = "AMEX";

    // Discover
    re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
    if (this.value.match(re) != null)
      this.ccImage = "DISCOVER";

    // Diners
    re = new RegExp("^36");
    if (this.value.match(re) != null)
      this.ccImage = "DINERS";

    // Diners - Carte Blanche
    re = new RegExp("^30[0-5]");
    if (this.value.match(re) != null)
      this.ccImage = "DINERS";

    // JCB
    re = new RegExp("^35(2[89]|[3-8][0-9])");
    if (this.value.match(re) != null)
      this.ccImage = "JCB";

    // Visa Electron
    re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
    if (this.value.match(re) != null)
      this.ccImage = "VISA_ELECTRON";
  }

  formatValue(type: string) {

    let charNumber = 4;

    switch (type) {
      case 'creditCard':
        charNumber = 4;
        break;
      case 'phone':
        charNumber = 3;
        break;
      default:
        charNumber = 4;
        break;
    }

    if (!this.printedValue) {
      this.printedValue = this.value;
    }

    var v = this.printedValue.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    var matches = v.match(/\d{4,18}/g);
    var match = matches && matches[0] || ''
    var parts = []

    for (let i = 0, len = match.length; i < len; i += charNumber) {
      parts.push(match.substring(i, i + charNumber))
    }

    if (parts.length) {
      this.printedValue = parts.join(' ')
    } else {
      this.printedValue = this.printedValue;
    }

    this.creditCardType();
    this.reformatField();
  }

  // Format the CC number that is inserted in the input
  formatFieldInput(event: { which: any; keyCode: any; }, type: string = 'creditCard') {
    var code = (event.which) ? event.which : event.keyCode;

    this.reformatField();

    if ((code < 48 || code > 57) && (code > 31)) {
      return false;
    }

    this.formatValue(type);

    return true;
  }

  // Remove the spaces from the inserted CC number
  reformatField() {
    this.value = this.printedValue.replace(/\s/g, '');
  }

  // Clear the value variable
  clearValue() {
    this.value = "";
  }

}
