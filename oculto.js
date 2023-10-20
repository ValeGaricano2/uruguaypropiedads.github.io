document.addEventListener("DOMContentLoaded", function(){
    const propertyForm = document.getElementById("propertyForm");
    const propertyList = document.getElementById("listaPropiedades");

    propertyForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Obtener los valores del formulario
      const title = document.getElementById("titulo").value;
      const price = document.getElementById("precio").value;
      const neighborhood = document.getElementById("barrio").value;
      const warranty = document.getElementById("garantia").value;
      const details = document.getElementById("detalles").value;
      const photos = document.getElementById("fotos").files;

      // Crear un objeto con los datos de la propiedad
      const property = {
        title,
        price,
        neighborhood,
        warranty,
        details,
        photos,
      };

      // Guardar la propiedad en el Local Storage
      let properties = JSON.parse(localStorage.getItem("properties")) || [];
      properties.push(property);
      localStorage.setItem("properties", JSON.stringify(properties));

      // Limpiar el formulario
      propertyForm.reset();

      // Mostrar la lista de propiedades
      displayProperties();
    });

    function displayProperties() {
      propertyList.innerHTML = "";

      const properties = JSON.parse(localStorage.getItem("properties")) || [];
      for (let i = 0; i < properties.length; i++) {
        const li = document.createElement("li");
        li.textContent = properties[i].title;
        propertyList.appendChild(li);
      }
    }

    displayProperties();

    
});
 