/*
Write a function called addStringIfLastS() that takes in two parameters.  First, an array of strings and second a single string.  
Go through each string in the array.  If the string ends in the letter 's' (either case), append your string input to that string in the array.
Finally, return your modified array.

addStringIfLastS(['test', 'testing', 'testings'], 'TEST')) => ['test', 'testing', 'testingsTEST']

addStringIfLastS(['you', 'should', 'not', 'see'], 'TEST')) //['you', 'should', 'not', 'see']
*/

function addStrIfLastS(arr, str){
    for (let i = 0; i < arr.length; i++){
        let arrStr = arr[i];
        if (arrStr[arrStr.length -1] === 's' || arrStr[arrStr.length -1] === 'S'){
            arr[i] = arr[i].concat(str);
        } 
    } 
    return arr;
}
console.log(addStrIfLastS(['test', 'testing', 'testings'], 'TEST'));
console.log(addStrIfLastS(['you', 'should', 'not', 'see'], 'TEST'));