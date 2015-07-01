/*
Reverse (letter for letter) the provided string.
*/

function reverseString(str) {
    var s = '';
    for (var i = str.length -1; i >=0; i--)
        s += str[i];
    return s;
}

reverseString('hello');
reverseString('howdy');
reverseString('Greetings from Earth');