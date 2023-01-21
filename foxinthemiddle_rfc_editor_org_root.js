/*
Center the content of rfc-editor.org/rfc/
*/
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.flexDirection = "column";

var h1_elems = document.getElementsByTagName('h1');
for (let i = 0; i < h1_elems.length; i++) {
	h1_elems[i].style.height = "fit-content";
	h1_elems[i].style.textAlign = "center";
}

var ul_elems = document.getElementsByTagName('ul');
for (let i = 0; i < ul_elems.length; i++) {
	ul_elems[i].style.width = "fit-content";
	ul_elems[i].style.margin = "auto";
}
