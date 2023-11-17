function fetchForData(title, description) {
  fetch("https://catfact.ninja/fact", { mode: "cors" })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }

      return response.json(); //return to next `then` in the chain
    })
    .then((jsonResponse) => {
      console.log(jsonResponse);
      title.textContent = `Cat fact of length ${jsonResponse.length}`;
      description.textContent = jsonResponse.fact;
    })
    .catch((error) => {
      console.log(error);
    });
}

//equivalent to above but using async/await
async function fetchForDataAsyncAwait(title, description) {
  try {
    let response = await fetch("https://catfact.ninja/fact", { mode: "cors" });
    let jsonResponse = await response.json();

    console.log(jsonResponse);
    title.textContent = `Cat fact of length ${jsonResponse.length}`;
    description.textContent = jsonResponse.fact;
  } catch (error) {
    console.log(error);
  }
}

function main() {
  const title = document.querySelector(".cat-fact-title");
  const description = document.querySelector(".cat-fact-description");

  //fetchForData(title, description);
  fetchForDataAsyncAwait(title, description);
}

main();
