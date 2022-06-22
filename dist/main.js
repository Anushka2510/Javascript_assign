 "use strict";

function map(arr, cb) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(cb(arr[i]));
    }
    return result;
}

function filter(arr, cb) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

function reduce(array, cb, initialValue) {
    var result = initialValue;
    for (var i = 0; i < array.length; i += 1) {
        result = cb.call(undefined, result, array[i], i, array);
    }
    return result;
}

function forEach(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = cb(arr[i]);
    }
}

var arr = [1, 2, 3, 4, 5];
var val1 = map(arr, function (item) {
    return item + 1;
});
var val2 = filter(arr, function (item) {
    return item >= 3;
});
var val3 = reduce(arr, function (result, item) {
    result.push(item * 2);
    return result;
}, []);

console.log(val1);
console.log(val2);
console.log(val2);

forEach(arr, function (item) {
    return console.log(item);
});