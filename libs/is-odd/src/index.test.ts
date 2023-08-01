import { isOdd } from './index';
import { test, expect } from '@playwright/test';

test.describe('isOdd', () => {
	test('(given) the value 4, (when) isOdd(value), (then) we expect the return value to be false.', () => {
		const value = 4;
		expect(isOdd(value)).toBeFalsy();
	});
	test('(given) the value 3, (when) isOdd(value), (then) we expect the return value to be true.', () => {
		const value = 3;
		expect(isOdd(value)).toBeTruthy();
	});
});
