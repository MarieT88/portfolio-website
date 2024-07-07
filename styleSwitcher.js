var stylesheets = ['style.css', 'style1.css', 'style2.css']; // List of stylesheet IDs
var currentStyleIndex = 0; // Index of the currently applied stylesheet

function toggleStylesheet() {
    // Disable all stylesheets
    for (var i = 0; i < stylesheets.length; i++) {
        var stylesheet = document.getElementById(stylesheets[i]);
        stylesheet.disabled = true;
    }
    
    // Enable the next stylesheet in the list
    currentStyleIndex = (currentStyleIndex + 1) % stylesheets.length;
    var nextStylesheet = document.getElementById(stylesheets[currentStyleIndex]);
    nextStylesheet.disabled = false;
}

