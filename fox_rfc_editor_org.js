/*
Center the content of rfc-editor.org/rfc/*
*/
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.flexDirection = "column";

var allPre = document.body.getElementsByTagName('pre');

for (let i = 0; i < allPre.length; i++) {
  allPre[i].style.width = "fit-content";
  allPre[i].style.margin = "auto";
}
