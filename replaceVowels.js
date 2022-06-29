/*
Write a function that takes in a string and replaces all vowels with an underscore '_'

for example 
"sad" => "s_d"
"hello" => "h_ll_"
"testing" => "t_st_ng"
*/

console.log("\nReplacing Vowels using includes() and vowels variable")
function replaceVowels(str){
    let newStr = "";
    for (let i = 0; i < str.length; i++){
        let vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"]
        if (vowels.includes(str[i])){
            newStr += "_" ;
        } else {
            newStr += str[i]
        }
    }
    return newStr
}
console.log(replaceVowels("sad"));
console.log(replaceVowels("hello"));
console.log(replaceVowels("testing"));

console.log("\nReplacing Vowels with || for each vowel in if statement")
function replaceVowelsLong(str){
    let newStr = "";
    for (let i = 0; i < str.length; i++){
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            newStr += "_" ;
        } else {
            newStr += str[i]
        }
    }
    return newStr
}
console.log(replaceVowelsLong("sad"));
console.log(replaceVowelsLong("hello"));
console.log(replaceVowelsLong("testing"));

