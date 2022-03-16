import './style.css';
import isPalindrome from './checker';

console.log("index.ts/start");



//Otener referencia a Input text
const inputText = <HTMLInputElement>document.getElementById('inputText');
let bPalindrome = null;
if (inputText){
    //Invocar isPalindrome
    bPalindrome = isPalindrome('input.Text.value');
    console.log(bPalindrome);
}



//Actualizar divResult
const divResult = <HTMLDivElement>document.getElementById('divResult');
if (divResult) {
    if(bPalindrome){
        divResult.innerText = 'The word is palindrome!'
    } else {
        divResult.innerText = 'The word is not palindrome, sorry!'
    }
}