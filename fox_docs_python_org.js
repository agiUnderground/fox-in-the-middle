/*
  Center the content of the docs.python.org
*/

const collection = document.getElementsByClassName("bodywrapper")
for (let i = 0; i < collection.length; i++) {
  collection[i].style.width = "fit-content";
  collection[i].style.margin = "auto";
}
