/* repeat array 3 times */
function repeat(arr){
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


/* reads a binary number array and returns an array of the next binary number (in size) */
function next_binary_number(bNumber) {
  
  for (var i=bNumber.length-1; i >= 0; i--) {
    if(bNumber[i]== 0) {
        bNumber[i] = 1;
        //no point in going through the rest of the numbers
      	break;
      }
    
    if (bNumber[i] == 1) {
      //set the 1
      bNumber[i] = 0;
    }
  }
  //the loop ended but no 0's were found.. need to add a digit
  if (i == -1) {
     bNumber.unshift(1);
  }
  console.log(bNumber);
}