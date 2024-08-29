

function compareStrings(str1, str2) {
    // Remove backspaces and characters before them
    str1 = removeBackspaces(str1);
    str2 = removeBackspaces(str2);

    // Compare lengths and characters
    if (str1.length !== str2.length) {
        return 0;
    }
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === str2[i]) {
            count++;
        }
    }
    return count;
}

function removeBackspaces(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '#') {
            if (result.length > 0) {
                result = result.slice(0, -1);
            }
        } else {
            result += str[i];
        }
    }
    return result;
}
