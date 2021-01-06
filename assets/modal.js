var crackMod = document.getElementById("crackingModal");
// var codeMod = document.getElementById("cleanCodeModal");
// var coderMod = document.getElementById("cleanCoderModal");
// var dataMod = document.getElementById("dataModal");
// var effMod = document.getElementById("effectiveModal");
// var pragmaMod = document.getElementById("pragmaticModal");

var crackImg = document.getElementById("crackingImg");
// var effImg = document.getElementById("effectJavaImg");
// var pragmaImg = document.getElementById("pragmaticImg");
// var codeImg = document.getElementById("cleanCodeImg");
// var coderImg = document.getElementById("cleanCoderImg");
// var dataImg = document.getElementById("dataStructImg");

var span = document.getElementsByClassName("close")[0];



crackImg.onclick = function() {
  crackMod.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}