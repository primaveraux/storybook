import { Component, Input } from '@angular/core';

@Component({
    selector: 'pri-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss',
        '../assets/pollen-v2.3/style.css']
})
export class ButtonComponent {

    @Input() url = '#';
    @Input() icon = '';
    @Input() text = 'Button';
    @Input() size = 'default'; // small | default | large
    @Input() type = 'primaryFilled'; //primaryFilled | primaryOutlined | secondaryFilled | secondaryOutlined | tertiary
    @Input() color = 'theme'; // theme | grey | info | error | warning | success | white | black
    @Input() count = 0;
    @Input() nextButton = false;
    @Input() isDisabled = false;
    @Input() loading = false;
    @Input() extraClasses = '';

    constructor() { }

}
