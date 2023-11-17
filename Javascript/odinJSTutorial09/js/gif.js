const uiState = {
  CONTENT: "CONTENT",
  LOADING: "LOADING",
  ERROR: "ERROR",
};

async function fetchImages(query = null) {
  updateUIState(uiState.LOADING);
  const imageElement = document.querySelector(".result-image");
  const titleElement = document.querySelector(".search-tag");
  const searchValue = query === null ? "cats" : query;
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=P6syAx5nUUozXRMnZzuYYsKOFh3udBVU&s=${searchValue}`,
      {
        mode: "cors",
      }
    );

    if (!response.ok) {
      throw new Error(`Status ${response.status}: ${response.statusText}`);
    }

    const jsonResponse = await response.json();
    const url = jsonResponse.data.images.original.url;
    const title = jsonResponse.data.title;
    console.log(jsonResponse);

    imageElement.src = url;
    titleElement.textContent = title;
    updateUIState(uiState.CONTENT);
  } catch (error) {
    console.log(error);
    updateUIState(uiState.ERROR, error);
  }
}

function setupListener() {
  const getImage = document.querySelector(".get-image-button");
  const searchInput = document.getElementById("search-string");
  const searchButton = document.querySelector(".search-button");

  searchButton.addEventListener("click", (e) => {
    if (searchInput.value != null && searchInput.value.length > 0) {
      fetchImages(searchInput.value);
    }
  });

  getImage.addEventListener("click", (e) => {
    fetchImages();
  });
}

/**
 *
 * @param {uiState} uiState
 */
function updateUIState(value, errorMsg = null) {
  const imageContainer = document.querySelector(".image-container");
  const loadingContainer = document.querySelector(".loading-page-container");
  const errorContainer = document.querySelector(".error-page-container");

  switch (value) {
    case uiState.CONTENT: {
      imageContainer.style.display = "flex";
      loadingContainer.style.display = "none";
      errorContainer.style.display = "none";
      break;
    }
    case uiState.LOADING: {
      imageContainer.style.display = "none";
      loadingContainer.style.display = "flex";
      errorContainer.style.display = "none";
      break;
    }
    case uiState.ERROR: {
      imageContainer.style.display = "none";
      loadingContainer.style.display = "none";
      errorContainer.style.display = "flex";

      if (errorMsg != null) {
        const errorText = document.querySelector(".error-text");
        errorText.textContent = errorMsg;
      }
      break;
    }
    default: {
      throw new Error("unknown ui state!");
      break;
    }
  }
}

function main() {
  setupListener();
  fetchImages();
}

main();
