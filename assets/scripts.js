function makeVisible(){
    var x = document.getElementById("about");
    if(x.style.display === "none" || x.style.display =="") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

$(document).ready(function() {
  $("#includedHeader").load("header.html");
});
