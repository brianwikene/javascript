/*
Check if a string (first argument) ends with the given target string (second argument).
*/

function end(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    var y = target.length;
    var x = str.substr(-y);

    if (x === target) {
        return true;
    } else {
        return false;
    }
    console.log(x);
    return str;
}

end('Bastian', 'n'); //true
end('Connor', 'n'); //true
end('Walking on water and developing software from a specification are easy if both are frozen.', 'specification'); // False
end('He has to give me a new name', 'name'); //true
end('If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing', 'mountain'); //False