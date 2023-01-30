/*
  Center the content of the docs.kernel.org
*/
const collection = document.getElementsByClassName("documentwrapper")
for (let i = 0; i < collection.length; i++) {
  collection[i].style.display = "flex";
}

const wrapper = document.getElementsByClassName("bodywrapper")
for (let i = 0; i < wrapper.length; i++) {
  wrapper[i].style.margin = "auto";
}
