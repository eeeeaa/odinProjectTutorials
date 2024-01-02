//sliding text listener
const element = document.querySelector(".slide-text");
element.addEventListener("animationstart", listener, false);
element.addEventListener("animationend", listener, false);
element.addEventListener("animationiteration", listener, false);

function listener(e) {
  const l = document.createElement("li");
  switch (e.type) {
    case "animationstart":
      l.textContent = `Started: elapsed time is ${e.elapsedTime}`;
      break;
    case "animationend":
      l.textContent = `Ended: elapsed time is ${e.elapsedTime}`;
      break;
    case "animationiteration":
      l.textContent = `New loop started at time ${e.elapsedTime}`;
      break;
  }
  document.getElementById("output").appendChild(l);
}

//display animation listener
const displayTextElem = document.querySelector(".display-anim-text");
const displayTextContainerElem = document.querySelector(
  ".display-anim-container"
);

displayTextContainerElem.addEventListener("click", (e) => {
  if (displayTextElem.classList.contains("fade-in")) {
    displayTextElem.classList.remove("fade-in");
    displayTextElem.classList.add("fade-out");
  } else {
    displayTextElem.classList.remove("fade-out");
    displayTextElem.classList.add("fade-in");
  }
});
