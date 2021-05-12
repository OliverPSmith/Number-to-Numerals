

let numbersAndNumerals = [
    { number: 1000, roman: 'M' },
    { number: 900, roman: 'CM' },
    { number: 500, roman: 'D' },
    { number: 400, roman: 'CD' },
    { number: 100, roman: 'C' },
    { number: 90, roman: 'XC' },
    { number: 50, roman: 'L' },
    { number: 40, roman: 'XL' },
    { number: 10, roman: 'X' },
    { number: 9, roman: 'IX' },
    { number: 5, roman: 'V' },
    { number: 4, roman: 'IV' },
    { number: 1, roman: 'I' },
];  

function convert(arabicNumber) {
    let romanLetter = "";

    for (let i=0; i < numbersAndNumerals.length; i++) {
        if (numbersAndNumerals[i].number <= arabicNumber) {
            arabicNumber = arabicNumber-numbersAndNumerals[i].number;
            romanLetter = romanLetter + numbersAndNumerals[i].roman;
            i--;
        }
    }
    document.getElementById('numerals-output').value = romanLetter;
    console.log(romanLetter);
};




document.getElementById('number-input').addEventListener('keyup', function() {
    let number = document.getElementById('number-input').value;

    convert(number);
});  