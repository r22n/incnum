const { seq, next } = require('.');

describe('test enumeration', () => {
    it('empty', () => {
        seq([], []).forEach(() => {
            // tests not to run
            expect(1).toEqual(2);
        });
        seq([0], [0]).forEach(() => {
            // tests not to run
            expect(1).toEqual(2);
        });
        seq([0, 0], [0, 1]).forEach(() => {
            // tests not to run
            expect(1).toEqual(2);
        });
        seq([0], [1, 0]).forEach(() => {
            // tests not to run
            expect(1).toEqual(2);
        });
        expect(1).toEqual(1);
    });
    it('single variable loop', () => {
        expect(seq([0], [1])).toEqual([
            [0],
        ]);
        expect(seq([0], [2])).toEqual([
            [0], [1]
        ]);
        expect(seq([0], [5])).toEqual([
            [0], [1], [2], [3], [4]
        ]);
    });
    it('double variables loop', () => {
        expect(seq([0, 0], [1, 1])).toEqual([
            [0, 0],
        ]);
        expect(seq([0, 0], [2, 1])).toEqual([
            [0, 0],
            [1, 0],
        ]);
        expect(seq([0, 0], [2, 2])).toEqual([
            [0, 0],
            [0, 1],
            [1, 0],
            [1, 1],
        ]);
    });
    it('next numbers', () => {
        // carry-up; cu represents position of numbers called 'current'
        // current  next    cu
        // ---------------------
        // 0,0      0,1*    1
        // 0,0      1*,0    0
        // 0,0      none    -1
        expect(next([0, 0], [2, 2])).toEqual(1);
        expect(next([0, 0], [2, 1])).toEqual(0);
        expect(next([0, 0], [1, 1])).toEqual(-1);
    });
});