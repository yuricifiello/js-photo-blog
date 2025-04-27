axios
  .get("https://lanciweb.github.io/demo/api/pictures/")
  .then((response) => {
    const data = response.data;

    const card = document.querySelector(".card");
    const immagine = card.querySelector(".image");
    const descrizione = card.querySelector(".description");

    immagine.src = data[0].url;
    immagine.alt = data[0].title;
    descrizione.textContent = data[0].title;
  })
  .catch((error) => {
    console.error("Errore nel caricamento dei dati:", error);
  });
