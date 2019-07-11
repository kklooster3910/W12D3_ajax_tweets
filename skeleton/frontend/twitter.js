const followToggle = require('./follow_toggle.js');

// document.addEventListener("DOMContentLoaded", function() {});
// $(document).on("ready", function () {});  

$( () => {

    $("button.follow-toggle").each( (i, btn) => {
        new followToggle(btn)
        console.log(btn);
    });

});