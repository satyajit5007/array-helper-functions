// test.js
const ArrayHelper = require('array-helper-functions');

const arr = [1, 2, 2, 3, 4, 4, 5];
console.log('Sum:', ArrayHelper.sum(arr));
console.log('Clear Duplicates:', ArrayHelper.clearDuplicates(arr));
console.log('Average:', ArrayHelper.average(arr));
console.log('Max:', ArrayHelper.max(arr));
console.log('Min:', ArrayHelper.min(arr));
console.log('Unique:', ArrayHelper.unique(arr));
console.log('Flatten:', ArrayHelper.flatten([1, [2, [3, [4, 5]]]]));
console.log('Chunk:', ArrayHelper.chunk(arr, 2));
console.log('Remove Falsy Values:', ArrayHelper.removeFalsyValues([0, 1, false, 2, '', 3]));
console.log('Intersect:', ArrayHelper.intersect([1, 2, 3], [2, 3, 4]));
