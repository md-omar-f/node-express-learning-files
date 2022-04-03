const _a = require('loadash');

const items = [1,[2,[3,[4]]]];

const newItems = _a.flattenDeep(items);

console.log(newItems);