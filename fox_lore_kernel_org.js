/*
  Center the content of https://lore.kernel.org/
*/
var allPre = document.body.getElementsByTagName('pre');

for (let i = 0; i < allPre.length; i++) {
  allPre[i].style.width = "fit-content";
  allPre[i].style.margin = "auto";
}
