function map(arr, c){
    const result = [];
    for(let i=0 ; i<arr.length ; i++){
        result.push(c(arr[i]));
    }
    return result;
}

function filter(arr, c){
    const result = [];
    for(let i=0 ; i<arr.length ; i++){
        if(c(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}

function reduce(array, c, initialValue) {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result = c.call(undefined, result, array[i], i, array);
    }
    return result;
}

function forEach(arr, c){
    for(let i=0 ; i<arr.length ; i++){
        arr[i] = c(arr[i]);
    }
}

let arr = [1,2,3,4,5];
let val1 = map(arr, item => item + 1);
let val2 = filter(arr, item => item >= 2);
let val3 = reduce(arr, (result, item) => {
            result.push(item * 3);
            return result;
         }, []);


console.log(val1);
console.log(val2);
console.log(val3);

forEach(arr, item => console.log(item) );