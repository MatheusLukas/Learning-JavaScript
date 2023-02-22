const result = document.querySelector("#result");
const elements = [
  { tag: "p", text: "Frase 1" },
  { tag: "div", text: "Frase 2" },
  { tag: "footer", text: "Frase 3" },
  { tag: "section", text: "Frase 4" },
];

// Meu jeito de resolver

// console.log(elements[0].tag);
// console.log(elements[0].text);

// for (let i = 0; i < elements.length; i++) {
//   result.innerHTML += `<${elements[i].tag}>${elements[i].text}</${elements[i].tag}>`;
//   console.log(elements[i].tag);
//   console.log(elements[i].text);
// }

// Outro método

const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < elements.length; i++) {
  let { tag, text } = elements[i];
  let tagCriada = document.createElement(tag);
  tagCriada.innerHTML = text;
  div.appendChild(tagCriada);
  console.log(text);
}

container.appendChild(div);
