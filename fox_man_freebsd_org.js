/*
Center the content of https://man.freebsd.org/cgi/man.cgi?*
*/

var allPre = document.body.getElementsByTagName('pre');

for (let i = 0; i < allPre.length; i++) {
  allPre[i].style.width = "fit-content";
  allPre[i].style.margin = "auto";
}
