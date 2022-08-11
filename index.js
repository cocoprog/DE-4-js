

const lista = document.getElementById("listado");
fetch("./data.json")
.then(response => response.json())
.then(productos => {
  productos.forEach(producto => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h4>${producto.nombre}</h4>
      <p>Precio $ ${producto.precio}</p>
      <p>ID: ${producto.id}</p>
      <hr />
    `;
    lista.append(li);
  });
});