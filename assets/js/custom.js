function showHidePassword(evt) {
    
    var input = document.getElementById("input-password");
    if(input.type == 'text'){
        input.type = "password";
        evt.style.color = "#bfbfbf";
    }else{
        input.type = "text";
    evt.style.color = "#AA084B";
    }
    
}