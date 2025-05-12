require("dotenv").config();

// Print out value of API key stored in .env file
//console.log(process.env.API_KEY);

async function getImage(query) {
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  // randomly access an image url from the response object
  let randomNum = Math.floor(Math.random() * 25);
  try {
    const response = await fetch(endpoint);
    const json = await response.json();
    const gifUrl = json.data[randomNum].images.original.url;
    console.log(gifUrl);
    return gifUrl;
  } catch (error) {
    console.log(error);
  }
}
getImage("dogs");

// const button = document.querySelector("button");
// button.addEventListener("click", async () => {
//   const content = document.getElementById("img-container");
//   const url = await getImage("dogs");

//   content.innerHTML = `<img src="${url}" alt="giphy image" />`;
// });
