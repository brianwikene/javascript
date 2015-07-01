/*
Return the length of the longest word in the provided sentence.
*/

function findLongestWord(str) {
    var longest = 0;
    var arrayOfStrings = str.split(/\s/);
    arrayOfStrings.sort(function(a, b) {
        return b.length - a.length;
    });
    console.log(arrayOfStrings);
    for (var i = 0; i < arrayOfStrings.length; i++) {
        if (longest < arrayOfStrings[i].length) {
            longest = arrayOfStrings[i];
        }
    }
    return longest.length;
}

findLongestWord('The quick brown fox jumped over the lazy dog');
findLongestWord('May the force be with you');
findLongestWord('Google do a barrel roll');
findLongestWord('What is the average airspeed velocity of an unladen swallow');