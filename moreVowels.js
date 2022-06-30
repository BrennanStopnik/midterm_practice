/*
Write a function that takes in a string and replaces all vowels with an underscore '_'

for example 
"sad" => "s_d"
"hello" => "h_ll_"
"testing" => "t_st_ng"
*/

function moreReplace(str){
    let newStr = '';
    for (let i = 0; i < str.length; i++){
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            newStr += '_';
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(moreReplace('sad'));
console.log(moreReplace('hello'));
console.log(moreReplace('testing'));