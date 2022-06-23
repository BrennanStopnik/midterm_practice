/*
1. Write a function that takes in 2 parameters, both arrays of numbers
return a result array that includes the number at index 0 in the first array,
then the number at index 0 in teh second array, then the number at index 1
in the first array, then the number at index 1 in the 2nd array and so on
assume both arrays will be the same size and neither will be empty
examples:

Exp1
array 1: [5, 7, 14, 5]
array 2: [6, 2, 22, 1]
resultArray: [5, 6, 7, 2, 14, 22, 5, 1]

Exp2
array 1: [3, 8]
array 2: [19, 3]
resultArray: [3,19,8,3]
*/
console.log("\n1. Blend Arrays");
function blendedFam(arr1, arr2){
    let res = [];
    for (let i = 0; i < arr1.length; i++){
        res.push(arr1[i]);
        res.push(arr2[i]);
    }
    return res;
}
let array1 = [5, 7, 14, 5];
let array2 = [6, 2, 22, 1];
let array3 = [3, 8];
let array4 = [19, 3];
console.log(blendedFam(array1, array2));
console.log(blendedFam(array3, array4));

/*
2 Write a function foundCat() that takes in an array of strings
if the word 'cat' is in the array, return true.  or else return false
you can assume all strings will be lower case.
*/
console.log("\n2. Found Cat");
function foundCat(arr){
    console.log(arr);
    for (let i = 0; i < arr.length; i++){
        if (arr.indexOf("cat") !==  -1){
            return true;
        } else {
            return false;
        }
    }
}
console.log(foundCat("dog, lion, bird, cat"));
console.log(foundCat("dog, lion, bird, fish, mongoose, bear"));


/*
3. Write a function oddOnesOut()
that takes in an array of numbers
return an array with the same numbers, but all 1's removed

[1,2,1,1,3,5,1] => [2,3,5]
[0,-1,5,1,5,0] => [0,-1,5,5,0]
[1,1,1,1,1,1] => []
*/
console.log("\n3. Odd Ones Out")
function oddOnesOut(arr){
    let newArr = arr.filter(function(n){
        return n !== 1;
    })
    return newArr
}
console.log(oddOnesOut([1,2,1,1,3,5,1]));
console.log(oddOnesOut([0,-1,5,1,5,0]));
console.log(oddOnesOut([1,1,1,1,1,1]));


/*
4. Write a function that takes in a string and adds a space after each character
and returns the string
'string' => 's t r i n g'
'wow' => 'w o w'
'hello world' => 'h e l l o   w o r l d'
*/
console.log("\n4. Space");
function space(str1){
    let arr = str1.split("");
    let newStr = arr.join(" ");
    return newStr;
}
console.log(space("string"));
console.log(space("wow"));
console.log(space("hello world"));


/*
5. Write a function called stringCompareCounter that takes in 2 strings of the same length
as parameters.  return a count of how many characters the strings share at the same index
for example

stringCompareCounter('cat','cow') => 1 (strings share the same character at index 0)
stringCompareCounter('count','touch') => 2 (strings share the same characters at indexes 1 and 2)
stringCompareCounter('well','sell') => 3 (strings share same characters at indexes 1,2, and 3)
*/
console.log("\n5. String Compare Counter");
function stringCompareCounter(str1, str2){
    let count = 0;
    for (let i = 0; i < str1.length; i++){
        if (str1[i] === str2[i]){
            count += 1;
        }
    }
    return count
}
console.log(stringCompareCounter('cat','cow'));
console.log(stringCompareCounter('count','touch'));
console.log(stringCompareCounter('well','sell'));
console.log(stringCompareCounter('teach', 'reach'));


/*
6. Write a function called duplicate() that takes in an array and returns true if the array 
contains at least 2 of the same item.

['hi', 'wow, 'hey', 'hi'] => true
['one', 'two' 'three'] => false
[1,7,32,1,10,2,11] => true
*/
console.log("\n6. Duplicate");
function duplicate(arr){
    let seen = [];
    for (let i = 0; i < arr.length; i++){
        if (seen.indexOf(arr[i]) === -1){
            seen.push(arr[i])
        } else {
            return true;
        }
    } 
    return false;

}

console.log(duplicate(['hi', 'wow', 'hey', 'hi']));
console.log(duplicate(['one', 'two', 'three']));
console.log(duplicate([1,7,32,1,10,2,11]));
console.log("\n");


// Alternate version of the same answer.

function duplicates(arr){
    let counts = [];
    for (let i = 0; i < arr.length; i++){
        if (counts[arr[i]] === undefined) {
            counts[arr[i]] = 1;
        } else {
            return true;
        }
    }
    return false;
}