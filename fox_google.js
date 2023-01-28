/*
Center the content of the Google search page.
*/
document.getElementById("rcnt").style.justifyContent = "center";
document.getElementById("rcnt").style.maxWidth = "100vw";
document.getElementById("rcnt").style.flexFlow = "column";
document.getElementById("center_col").style.margin = "auto";
const collection = document.getElementsByClassName("M8OgIe")
for (let i = 0; i < collection.length; i++) {
  collection[i].style.margin = "auto";
}
document.getElementById("rhs").style.position = "absolute";
document.getElementById("rhs").style.marginLeft = "69%";
document.getElementById("rhs").style.top = "170px";
