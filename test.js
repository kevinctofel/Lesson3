function isAnIpNumber(str) {
    if (/^\d+$/.test(str)) {
        let number = Number(str);
        return number >= 0 && number <= 255;
    }

    return false;
}

function isDotSeparatedIpAddress(inputString) {
    let dotSeparatedWords = inputString.split(".");
    if (dotSeparatedWords.length === 4) {
        while (dotSeparatedWords.length > 0) {
            let word = dotSeparatedWords.pop();
            if (!isAnIpNumber(word)) {
                return true        // add
            } else return false; // add
        }
    } else {
        return ("IP addresses must have four dot compontnents") // add
    }
}

console.log(isDotSeparatedIpAddress('10.4.5.11'));
