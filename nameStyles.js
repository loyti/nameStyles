var entry3 = "John";
var entry2 = "Julie";
var entry1 = "Nikolai";
var entry0  = "Nancy";
var nameStyles = [entry3, entry2, entry1, entry0];
function styleRun () {
    document.write("<h2>Playing with styles can be a lot of fun</h2>")
    for (var i = 0; i < nameStyles.length; i++){
        document.write("<p class=\"name0\">Check out this name " + nameStyles[i] + " in style number 1.</p>");
        document.write("<p class=\"name1\">Check out this name " + nameStyles[i] + " in style number 2.</p>");
        document.write("<p class=\"name2\">Check out this name " + nameStyles[i] + " in style number 3.</p>");
        document.write("<p class=\"name3\">Check out this name " + nameStyles[i] + " in style number 4.</p>");
    }    
}
styleRun();