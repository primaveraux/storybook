import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pri-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  @Input() id = '';
  @Input() value = '';
  @Input() label = '';
  @Input() placeholder = '';
  @Input() extraClasses = '';
  @Input() help = '';
  @Input() tag = '';
  @Input() icon = '';
  @Input() isDisabled = false;
  @Input() hasError = false;
  @Input() errorMessage = "Please fill, it can't be empty";
  @Input() min = 0;
  @Input() max = 99999999999;
  @Input() type = 'number'; // number | numberSecondary
  @Input() size = 'regular'; // small | regular | large

  constructor() { }

  ngOnInit(): void {
  }

}
