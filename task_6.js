function first_letter_capital(stringword) {
    stringword = stringword.split(" ");
    //     console.log(stringword);
    for (var i = 0, firstLetter = stringword.length; i < firstLetter; i++) {
        //     console.log('--iteration start---');
        //     console.log(stringword[i]);
        stringword[i] = stringword[i][0].toUpperCase() + stringword[i].substr(1);
    }
    return stringword.join(" ");
}
console.log(
    first_letter_capital("first letter of every word should be capital")
);