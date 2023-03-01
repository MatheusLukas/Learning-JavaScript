const divParagrafos = document.querySelector("#div");
const paragrafos = divParagrafos.querySelectorAll("p");

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let i of paragrafos) {
  i.style.backgroundColor = backgroundColorBody;
  i.style.color = "black";
}
