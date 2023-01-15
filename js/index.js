
/* Generated password section */
var passwordGenerated = document.querySelector("section.generated-password");
// console.log(passwordGenerated.innerText);

/* Character-length numeric */
var passLength = document.querySelector(".num-length");
// console.log(passLength.innerText);

/* Password length slider */
var lengthSlider = document.querySelector("input[type=range");
console.log(lengthSlider);

/*CheckBoxes */
var isUppercaseChecked = document.querySelector("input#uppercase");
// console.log(isUppercaseChecked.checked = true);

var isLowercaseChecked = document.querySelector("input#lowercase");
// console.log(isLowercaseChecked.checked = false)

var isNumberChecked = document.querySelector("input#numbers");
// console.log(isNumberChecked.checked);

var isSymbolsAllowed = document.querySelector("input#symbols");
// console.log(isSymbolsAllowed.checked=true);

/* Password Strength */
var passStrength = document.querySelector(".password-strength");
// console.log(passStrength);

/* Generate Button */
const generateBtn = document.querySelector("button.generate");
// console.log(generateBtn);


lengthSlider.addEventListener("input", (evt) => {
         passLength.innerText = evt.target.value;
})



/** Password Generating Function/Method  */

var randomUppercase = () => {
         return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

var randomLowercase = () => {
         return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}

var randomNumber = () => (Math.floor(Math.random() * 10));

var randomSymbol = () => {
         const symbols = "!@#$%^&*()";
         return symbols.charAt(Math.floor(Math.random() * symbols.length));
}





