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


/*remove all vowels; first letter Uppercase, rest lowercase */
function reformat(text){
//remove vowels; case insensitive
var result = text.replace(/([aeiouy])/gi,"");
//capitalize first characterand the rest lowercase
result = result.charAt(0).toUpperCase() + result.substring(1).toLowerCase();

console.log(result);

}
