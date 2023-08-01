import { isEven } from './index';
import { test, expect } from '@playwright/test';

test.describe('isEven', () => {
	test('(given) the value 4, (when) isEven(value), (then) we expect the return value to be true.', () => {
		const value = 4;
		expect(isEven(value)).toBeTruthy();
	});
	test('(given) the value 3, (when) isEven(value), (then) we expect the return value to be false.', () => {
		const value = 3;
		expect(isEven(value)).toBeFalsy();
	});
});
