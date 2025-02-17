const { expect } = require('chai');
const { mergeSort } = require('../mergeSort'); // Import mergeSort function

describe('Merge Sort with Promises', function () {
    it('should sort an array of numbers in ascending order', async function () {
        const input = [3, 1, 4, 1, 5, 9, 2, 6];
        expect((await mergeSort(input))).to.deep.equal([1, 1, 2, 3, 4, 5, 6, 9]);
    });

    it('should return an empty array when given an empty array', async function () {
        expect((await mergeSort([]))).to.deep.equal([]);
    });

    it('should return the same array when given a single-element array', async function () {
        expect((await mergeSort([42]))).to.deep.equal([42]);
    });

    it('should handle an already sorted array', async function () {
        expect((await mergeSort([1, 2, 3, 4, 5]))).to.deep.equal([1, 2, 3, 4, 5]);
    });

    it('should handle an array with duplicate elements', async function () {
        expect((await mergeSort([4, 2, 2, 8, 3, 3, 1]))).to.deep.equal([1, 2, 2, 3, 3, 4, 8]);
    });

    it('should handle an array with negative numbers', async function () {
        expect((await mergeSort([-3, 5, -1, 0, -2, 4]))).to.deep.equal([-3, -2, -1, 0, 4, 5]);
    });
});
