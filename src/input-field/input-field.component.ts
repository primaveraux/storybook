import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'pri-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements AfterViewChecked, AfterViewInit, OnChanges {

  extraStyles: {};
  mainExtraStyles: {};
  selectStyles: {};
  printedValue: string;
  ccImage: string;
  selectIsOpen: boolean;
  selectedOption: any;
  tagElVar: ElementRef;
  detailElVar: ElementRef;
  elementType: string;

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
  @Input() errorMessage = `Please fill, it can't be empty`;
  @Input() detailLabel = '';
  @Input() detailUrl = '';
  @Input() options: any[] = []; // Format: [{value: 'passport', label: 'Passport', image: 'path/to/image.svg', selected: true|false}]
  @Input() option = '';
  @Input() min = 0;
  @Input() max = 99999999999;
  @Input() type = 'text'; // text | file | number | numberSecondary | password | creditCard | phone
  @Input() size = 'regular'; // small | regular | large

  constructor(private cd: ChangeDetectorRef) {
    this.extraStyles = {};
    this.mainExtraStyles = {};
    this.selectStyles = {};
    this.printedValue = this.value;
    this.ccImage = "";
    this.selectIsOpen = false;
    this.selectedOption = { value: '', label: '', image: '' };
    this.tagElVar = this.tagEl;
    this.detailElVar = this.detailEl;
    this.elementType = this.type;

    this.creditCardType();
  }

  @ViewChild('mainEl')
  mainEl: ElementRef = ViewChild('mainEl');

  @ViewChild('wrapperEl')
  wrapperEl: ElementRef = ViewChild('wrapperEl');

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
    this.setExtraStyles();
  }

  ngAfterViewInit() {
    this.setExtraStyles();
    this.elementType = this.type != 'numberSecondary' ? this.type : 'number';

    if (this.type == 'number')
      this.value = parseFloat(this.value).toFixed(2);

    if (this.type == 'creditCard' || this.type == 'phone')
      this.formatValue(this.type);
  }

  ngAfterViewChecked() {
    this.setExtraStyles(true);
  }

  setExtraStyles(fromOnChanges: boolean = false): void {
    // Add styles if the field has a detail's link
    if (this.detailLabel && (typeof this.detailEl == 'object' || typeof this.detailElVar == 'object')) {
      if (typeof this.detailElVar != 'object')
        this.detailElVar = this.detailEl;

      let extraPadding = 18;

      if (this.size == 'small') {
        extraPadding = 14;
      }

      let detailWidth = this.detailElVar.nativeElement.offsetWidth + extraPadding;

      this.extraStyles = {
        ...this.extraStyles,
        'padding-right': detailWidth + 'px'
      };
    }

    // Add styles if the field has a tag
    if (this.tag && (typeof this.tagEl == 'object' || typeof this.tagElVar == 'object')) {
      if (typeof this.tagElVar != 'object')
        this.tagElVar = this.tagEl;

      let extraPadding = 12;

      if (this.size == 'small') {
        extraPadding = 8;
      }

      let tagWidth = this.tagElVar.nativeElement.offsetWidth + extraPadding;

      this.extraStyles = {
        ...this.extraStyles,
        'padding-left': tagWidth + 'px'
      };
    }

    // Add styles if the field has options
    // Assign the "selected" attribute if an option is selected
    if (this.options.length && typeof this.selectEl == 'object') {
      let extraPadding = 12;

      if (this.size == 'small') {
        extraPadding = 8;
      }

      let selectPadding = this.selectEl.nativeElement.offsetWidth + extraPadding;

      this.extraStyles = {
        ...this.extraStyles,
        'padding-left': selectPadding + 'px'
      };
    }

    if (typeof this.wrapperEl == 'object') {
      let mainWidth = this.wrapperEl.nativeElement.offsetWidth;

      this.mainExtraStyles = {
        ...this.mainExtraStyles,
        'width': mainWidth + 'px'
      };
    }

    if (!fromOnChanges)
      setTimeout(() => this.cd.detectChanges(), 100);
  }

  // Update the selected option when it changes
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

  // Toggle wether the select is open or closed
  toggleSelectOpen() {
    this.selectIsOpen = !this.selectIsOpen;
  }

  // Select a value when clicking on it
  selectValue(value: string) {
    this.option = value;
    this.updateSelectedOptions();
    this.toggleSelectOpen();
    this.setExtraStyles();
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

  // Change the value according to the passed number
  changeValue(difference: number = 0) {
    if (this.elementType == "number") {
      let newValue = Number(this.value) + difference;

      if (isNaN(newValue))
        newValue = difference;

      if (newValue <= this.max && newValue >= this.min)
        this.value = String(newValue);
      else if (newValue > this.max)
        this.value = String(this.max);
      else if (newValue < this.min)
        this.value = String(this.min);

      if (this.type == "number")
        this.value = parseFloat(this.value).toFixed(2);
    }
  }

}
