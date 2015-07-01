/*
Repeat a given string (first argument) n times (second argument). 
Return an empty string if n is a negative number.
*/

function repeat(str, num) {
    // repeat after me
    var result = '';
    while (num-- > 0) result += str;
    return result;
}
repeat('abc', 3);