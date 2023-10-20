document.addEventListener("DOMContentLoaded", function () {
  const propertyForm = document.getElementById("propertyForm");
  const propertyContainer = document.getElementById("propertyContainer");

  propertyForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Obtener los valores del formulario
      const title = document.getElementById("titulo").value;
      const price = document.getElementById("precio").value;
      const neighborhood = document.getElementById("barrio").value;
      const warranty = document.getElementById("garantia").value;
      const details = document.getElementById("detalles").value;
      const photos = document.getElementById("fotos").files;

      // Crear un nuevo conjunto de divs para este formulario
      const propertySet = crearDivContenedor();

      // Crear un div para el carrusel de fotos
      const photosCarousel = divCarrusel();

      // Crear un div para la información de la propiedad
      const propertyInfo = divInfo();

      // Agregar los elementos al conjunto de divs
      propertySet.appendChild(photosCarousel);
      propertySet.appendChild(propertyInfo);

      // Agregar el conjunto de divs al contenedor principal
      propertyContainer.appendChild(propertySet);

      // Mostrar la información en el conjunto de divs
      const propertyDiv = document.createElement("div");
      propertyDiv.innerHTML = `
          <h2>${title}</h2>
          <p>Precio: ${price}</p>
          <p>Barrio: ${neighborhood}</p>
          <p>Garantía: ${warranty}</p>
          <p>Detalles: ${details}</p>
      `;

      propertyInfo.appendChild(propertyDiv);

      // Mostrar las fotos en el carrusel
      for (let i = 0; i < photos.length; i++) {
          const img = document.createElement("img");
          img.src = URL.createObjectURL(photos[i]);
          photosCarousel.appendChild(img);
      }

      // Limpiar el formulario
      propertyForm.reset();
  });

  function crearDivContenedor() {
      const propertySet = document.createElement("div");
      propertySet.classList.add("property-set");
      return propertySet;
  }

  function divCarrusel() {
      const photosCarousel = document.createElement("div");
      photosCarousel.classList.add("photos-carousel", "carousel");
      photosCarousel.id = `photosCarousel-${new Date().getTime()}`;
      return photosCarousel;
  }

  function divInfo() {
      const propertyInfo = document.createElement("div");
      propertyInfo.classList.add("property-info");
      return propertyInfo;
  }
});