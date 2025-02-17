const { expect } = require('chai');
const { bubbleSort } = require('../bubbleSort');  

describe('Bubble Sort Algorithm', function () {
    it('should sort an array of numbers correctly', function () {
        const input = [5, 3, 8, 1, 2];
        const output = bubbleSort(input);
        expect(output).to.deep.equal([1, 2, 3, 5, 8]);
    });

    it('should handle an already sorted array', function () {
        const input = [1, 2, 3, 4, 5];
        const output = bubbleSort(input);
        expect(output).to.deep.equal([1, 2, 3, 4, 5]);
    });

    it('should handle an array with duplicate values', function () {
        const input = [3, 1, 2, 3, 1];
        const output = bubbleSort(input);
        expect(output).to.deep.equal([1, 1, 2, 3, 3]);
    });

    it('should handle an empty array', function () {
        const input = [];
        const output = bubbleSort(input);
        expect(output).to.deep.equal([]);
    });

    it('should handle an array with one element', function () {
        const input = [42];
        const output = bubbleSort(input);
        expect(output).to.deep.equal([42]);
    });
});
