/*
Truncate a string (first argument)
if it is longer than the given maximum string length (second argument). 
Return the truncated string with a '...' ending.
*/

function truncate(str, num) {
    // Clear out that junk in your trunk
    if (num === str.length) {
        return str;
    } else if (num > str.length) {
        return str;
    } else {
        var str1 = str.slice(0, num - 3);
        var str2 = str1 + '...';
        return str2;
    }
}
truncate('A-tisket a-tasket A green and yellow basket', 11);