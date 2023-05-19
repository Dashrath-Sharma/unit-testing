import {cleanup } from '@testing-library/react';
import AddTwoNumbers from './Addition';

afterEach(cleanup);

describe('Addition Test', () => {
    it('Addition Test', () => {
        expect(AddTwoNumbers(1, 4)).toBe(5);
    });
})