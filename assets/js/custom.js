var child = document.querySelector(".navigation-bottom-mobile");
var parent = document.querySelector(".footer-copy-with-navigation-bottom");

var childHeight = parseInt(window.getComputedStyle(child).height) + "px";
parent.style.marginBottom = childHeight;

function showHidePassword(evt) {

    var input = document.getElementById("input-password");
    if (input.type == 'text') {
        input.type = "password";
        evt.style.color = "#bfbfbf";
    } else {
        input.type = "text";
        evt.style.color = "#AA084B";
    }
}