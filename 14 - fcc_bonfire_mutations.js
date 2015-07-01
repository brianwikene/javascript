/*
Return true if the string in the first element of the array
contains all of the letters of the string in the second element of the array.
*/

function mutation(arr) {
    var x = arr[0].toLowerCase();
    var y = arr[1].toLowerCase().split("");
    var z = 0;
    for (var i = 0; i < y.length; i++) {
        if ((x.search(y[i])) === (-1)) {
            z -= 1;
        }
    }
    console.log(x.search(y));

    if (z > -1) {
        return true;
    } else return false;
}