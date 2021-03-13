'use strict'
module.exports = function toReadable (number) {
    let zeroNineteen = ['zero','one','two','three','four','five','six','seven', 'eight', 'nine','ten','eleven','twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen','seventeen','eighteen','nineteen'];
    let dozens = ['','','twenty','thirty','forty','fifty','sixty','seventy', 'eighty','ninety'];

let stringNumber = number.toString();
let lengthNumber = stringNumber.length;

if (number < 20){
    return zeroNineteen[number];
}
else if (lengthNumber == 2){
    if(stringNumber[1] == 0){
        return dozens[stringNumber[0]];
    }
    else {
        return dozens[stringNumber[0]] + ' ' + zeroNineteen[stringNumber[1]];
    }
}
else if (lengthNumber == 3){
    if(stringNumber[1] == 0 && stringNumber[2] == 0){
        return zeroNineteen[ stringNumber[0]] + ' ' + 'hundred';
    }
    else{
        return zeroNineteen[stringNumber[0]] + ' ' + 'hundred'+ ' ' + toReadable(+(stringNumber[1] + stringNumber[2]))
    }
}

}
