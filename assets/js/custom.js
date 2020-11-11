function showPassword(evt) {
    var input = document.getElementById("input-password");
    input.type = "text";
    evt.style.color = "#AA084B";
}

function hidePassword(evt) {
    var input = document.getElementById("input-password");
    input.type = "password";
    evt.style.color = "#bfbfbf";
}