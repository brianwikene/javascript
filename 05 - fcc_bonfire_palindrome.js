/*
Return true if the given string is a palindrome. Otherwise, return false.
*/

function palindrome(str) {

    var az = str.replace(/\W/g, '');
    az = az.toLowerCase();
    console.log(az);

    var za = az.split('').reverse('').join('');
    console.log(za);

    if (za === az) {
        return true;
    } else {
        return false;
    }
}

palindrome("eye");
palindrome("Race! Car!");
palindrome("A man, a plan, a canal. Panama");