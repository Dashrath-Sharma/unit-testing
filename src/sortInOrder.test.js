import { cleanup } from "@testing-library/react";
import sortInOrder from './sortInOrder';

afterEach(cleanup);

describe('Sort Testing', () => {
    it('Sort in Ascending order', () => {
        expect(sortInOrder('a', [ 200, 1, 21, 34, 100, 45, 2, 65, 98, 9 ])).toStrictEqual([ 1,  2,  9,  21,  34, 45, 65, 98, 100, 200 ]);
    });

    it('Sort in Descending order', () => {
        expect(sortInOrder('d', [ 200, 1, 21, 34, 100, 45, 2, 65, 98, 9 ])).toStrictEqual([ 200, 100, 98, 65, 45, 34,  21,  9,  2,  1 ]);
    });
})