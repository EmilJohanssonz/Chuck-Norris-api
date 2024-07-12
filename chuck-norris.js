document.getElementById("getJokeBtn").addEventListener("click", () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("joke").innerText = data.value;
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
});

// Fetch and display categories
document.getElementById("getCate").addEventListener("click", () => {
  fetch("https://api.chucknorris.io/jokes/categories")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((categories) => {
      const categoriesList = document.getElementById("cateList");
      categoriesList.innerHTML = ""; // Clear any existing categories
      categories.forEach((category) => {
        const button = document.createElement("button");
        button.innerText = category;
        button.addEventListener("click", () => {
          fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
            .then((response) => {
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              return response.json();
            })
            .then((data) => {
              document.getElementById("joke").innerText = data.value;
            })
            .catch((error) => {
              console.error(
                "There has been a problem with your fetch operation:",
                error
              );
            });
        });
        categoriesList.appendChild(button);
      });
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
});
document.getElementById("searchBtn").addEventListener("click", () => {
  const query = document.getElementById("searchQuery").value;
  fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const searchResults = document.getElementById("searchResults");
      searchResults.innerHTML = ""; // Clear previous search results
      data.result.forEach((joke) => {
        const listItem = document.createElement("li");
        listItem.innerText = joke.value;
        searchResults.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
});
