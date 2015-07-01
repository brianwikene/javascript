/*
Return an array consisting of the largest number from each provided sub-array.
For simplicity, the provided array will contain exactly 4 sub-arrays.
*/

function largestOfFour(arr) {
    var x = arr.length;
    var a = [];
    var b = [];
    var c = [];
    var d = 0;
    var k = [];
    var l;
    for (i = 0; i < x; i++) {
        a = arr[i];
        for (j = 0; j < a.length; j++) {
            b = a[j];
            c = a[j + 1];
            if (b > c && b > d) {
                d = b;
            } else if (b < c && c > d) {
                d = c;
            }
        }
        l = k.push(d);
    }
    return k;
}
largestOfFour([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 37, 39],
    [1000000, 10001, 857, 1]
]);