import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { getDataTestID, getElementByDataTestID } from '../../tests/utils/test-utils';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
	let component: InputComponent;
	let fixture: ComponentFixture<InputComponent>;
	let el: HTMLElement;
	let dataTestID: string;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			imports: [InputComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(InputComponent);
		component = fixture.componentInstance;
		component.value = 'foo';
		fixture.debugElement.injector.get(NG_VALUE_ACCESSOR);
		fixture.detectChanges();

		dataTestID = getDataTestID(fixture.elementRef.nativeElement);
		el = getElementByDataTestID(fixture, dataTestID);
	});

	describe('White Box cases', () => {
		it(`Given the need to pass the input value to the parent form
            When the user writes a value
            Then trigger the modelChange function`, () => {
			spyOn(component, 'modelChange').and.callFake(() => {});

			const input = fixture.nativeElement.querySelector('input');

			input.dispatchEvent(new Event('input', { bubbles: true }));

			fixture.detectChanges();

			expect(component.modelChange).toHaveBeenCalled();
		});

		it(`Given the need to clear the input value
            When the user clicks on the 'x'
            Then clear the input value`, () => {
			spyOn(component, 'clearValue').and.callThrough();

			const inputClearButton = fixture.nativeElement.querySelector('.value-dismiss');
			inputClearButton.dispatchEvent(new Event('click', { bubbles: true }));

			fixture.detectChanges();

			expect(component.clearValue).toHaveBeenCalled();
		});
	});

	describe('Black Box cases', () => {
		it('Sample Case', () => {
			expect(true).toBeTrue();
		});
	});
});
