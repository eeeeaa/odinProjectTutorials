const section = document.querySelector("section");

let para1 = document.createElement("p");
let para2 = document.createElement("p");
let motherInfo = "The mother cats are called ";
let kittenInfo;
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json";

//fetch API is a Promise
fetch(requestURL)
  .then((response) => response.text())
  .then((text) => displayCatInfo(text));

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

  // Add your code here
  const jsonObjs = JSON.parse(catString);
  for (let i = 0; i < jsonObjs.length; i++) {
    if (i === jsonObjs.length - 1) {
      motherInfo += `and ${jsonObjs[i].name}.`;
    } else {
      motherInfo += `${jsonObjs[i].name}, `;
    }

    const kittens = jsonObjs[i].kittens;
    total += kittens.length;

    for (const kitten of kittens) {
      if (kitten.gender === "m") {
        male += 1;
      }
    }
  }

  kittenInfo = `total kittens: ${total}, male: ${male}, female: ${
    total - male
  }`;

  // Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
