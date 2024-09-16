// Fetch and display a random joke
document.getElementById("getJokeBtn").addEventListener("click", () => {
  fetch("https://api.chucknorris.io/jokes/random") //api for random joke
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("joke").innerText = data.value; //display the joke
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:", //display error if is any error
        error
      );
    });
});

// Fetch and display categories
document.getElementById("getCate").addEventListener("click", () => {
  fetch("https://api.chucknorris.io/jokes/categories") //api for categories
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((categories) => {
      const categoriesList = document.getElementById("cateList"); //display the categories
      categoriesList.innerHTML = ""; // Clear any existing categories
      categories.forEach((category) => {
        const button = document.createElement("button"); // Create a new button for each category
        button.innerText = category; // Set the button text to the category
        button.addEventListener("click", () => {
          fetch(`https://api.chucknorris.io/jokes/random?category=${category}`) //api for random joke with category
            .then((response) => {
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              return response.json();
            })
            .then((data) => {
              document.getElementById("joke").innerText = data.value; //display the joke
            })
            .catch((error) => {
              console.error(
                "There has been a problem with your fetch operation:",
                error
              );
            });
        });
        categoriesList.appendChild(button); // Append the button to the categories list
      });
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
});
document.getElementById("searchBtn").addEventListener("click", () => { //search for a joke
  const query = document.getElementById("searchQuery").value;
  fetch(`https://api.chucknorris.io/jokes/search?query=${query}`) //api for search
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const searchResults = document.getElementById("searchResults"); //display the search
      searchResults.innerHTML = ""; // Clear previous search results
      data.result.forEach((joke) => { // Loop through the search results
        const listItem = document.createElement("li"); // Create a list item for each search result
        listItem.innerText = joke.value; // Set the list item text to the search result
        searchResults.appendChild(listItem); // Append the list item to the search results
      });
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:", //display error if is any error
        error
      );
    });
});
