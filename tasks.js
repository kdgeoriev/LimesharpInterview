/* repeat array 3 times */
function repeat(arr){
arr = this.arr;

//task wanted array repeated exactly 3 times
var repeatTimes = 3;
var multipliedArray = Array(repeatTimes).fill(arr);

//concatinate the array of arrays
multipliedArray = [].concat.apply([], multipliedArray);
console.log(multipliedArray);
}

