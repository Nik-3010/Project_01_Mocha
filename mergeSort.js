function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Append remaining elements
    while (i < left.length) {
        result.push(left[i++]);
    }

    while (j < right.length) {
        result.push(right[j++]);
    }
    
    return result;
}

function mergeSort(arr) {
    return new Promise((resolve) => {
        if (arr.length <= 1) {
            resolve(arr);
            return;
        }

        const mid = Math.floor(arr.length / 2);
        const leftPart = arr.slice(0, mid);
        const rightPart = arr.slice(mid);

        Promise.all([mergeSort(leftPart), mergeSort(rightPart)])
            .then(([leftSorted, rightSorted]) => {
                resolve(merge(leftSorted, rightSorted));
            });
    });
}

// Export function for testing
module.exports = { mergeSort };
