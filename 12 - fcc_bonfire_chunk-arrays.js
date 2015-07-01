/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.
*/

function chunk(arr, size) {
    // Break it up.
    var x = [];
    for (var i = 0, len = arr.length; i < len; i += size)
        x.push(arr.slice(i, i + size));
    return x;
}

chunk(['a', 'b', 'c', 'd'], 2);