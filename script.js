axios
  .get("https://lanciweb.github.io/demo/api/pictures/")
  .then((response) => {
    const immagini = response.data;
    const container = document.querySelector(".row");

    immagini.forEach((immagine) => {
      const col = document.createElement("div");
      col.classList.add("col");

      const card = document.createElement("div");
      card.classList.add("card");

      // Creo la puntina
      const puntina = document.createElement("img");
      puntina.src = "../img/pin.svg";
      puntina.alt = "puntina";
      puntina.classList.add("puntina");

      // Creo l'immagine principale
      const imgElement = document.createElement("img");
      imgElement.src = immagine.url;
      imgElement.alt = immagine.title;
      imgElement.classList.add("foto");

      // Creo la descrizione
      const descrizione = document.createElement("p");
      descrizione.textContent = immagine.title;
      descrizione.classList.add("descrizione");

      // Inserisco tutto nella card
      card.appendChild(puntina);
      card.appendChild(imgElement);
      card.appendChild(descrizione);

      // Inserisco la card nella colonna
      col.appendChild(card);

      // Inserisco la colonna nella riga
      container.appendChild(col);
    });
  })
  .catch((error) => {
    console.error("Errore nel caricamento delle immagini:", error);
  });
