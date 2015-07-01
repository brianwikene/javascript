/*
Return the provided string with the first letter of each word capitalized.
*/

function titleCase(str) {
    {
        return str.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
    return str;
}

titleCase("I'm a little tea pot");