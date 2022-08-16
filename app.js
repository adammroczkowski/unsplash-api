const input = document.querySelector(".input");
const grid = document.querySelector(".grid");
const searchBtn = document.querySelector(".search-btn");

const loadImg = function () {
  removeImg();
  const URL = `https://api.unsplash.com/search/photos?query=${input.value}&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`;
  fetch(URL)
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        console.log("err");
      }
    })
    .then((data) => {
      for (let i = 0; i < data.results.length; i++) {
        let image = document.createElement("div");
        image.className = "img";
        image.style.backgroundImage =
          "url(" + data.results[i].urls.raw + "&w=1366&h=768" + ")";
        grid.appendChild(image);
      }
    });
};

searchBtn.addEventListener("click", function () {
  loadImg();
});

const removeImg = function () {
  grid.innerHTML = "";
};
