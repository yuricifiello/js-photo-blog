const cardsWrapper = document.getElementById("cards-wrapper");
const overlay = document.getElementById("overlay");
const overlayImage = document.getElementById("overlay-image");
const closeButton = document.getElementById("close-button");

axios.get("https://lanciweb.github.io/demo/api/pictures/").then((response) => {
  const posts = response.data;
  console.log(posts);

  let cardsHtml = "";
  posts.forEach((post) => {
    cardsHtml += generatePostCard(post);
  });

  cardsWrapper.innerHTML += cardsHtml;

  const allImages = cardsWrapper.querySelectorAll(".card-main img");
  allImages.forEach((img) => {
    img.addEventListener("click", openOverlay);
  });
});

const generatePostCard = (post) => {
  const cardHtml = `
    <div class="col">
      <div class="card">
         <img src="../img/pin.svg" alt="puntina" class="puntina">
        <div class="card-main">
          <img src="${post.url}" alt="${post.title}" class="img" data-original-src="${post.url}" style="cursor: pointer;" />
          <div class="card-content">
            <span>${post.date}</span>
            <span>${post.title}</span>
          </div>
        </div>
      </div>
    </div>
  `;
  return cardHtml;
};

function openOverlay(event) {
  const clickedImageSrc = event.target.dataset.originalSrc;
  overlayImage.src = clickedImageSrc;
  overlay.classList.remove("overlay-hidden");
}
function closeOverlay() {
  overlay.classList.add("overlay-hidden");
  overlayImage.src = "";
}

closeButton.addEventListener("click", closeOverlay);
