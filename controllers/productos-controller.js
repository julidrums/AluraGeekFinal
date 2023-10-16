import { productoServices } from "../servicios/producto-servicios.js";
// import { formatPrice } from "../formtatter-prices.js";

const nuevoProducto = ( imageUrl,name, price, id) => {
  const card = document.createElement("div");
  const contenido = `
  <div class ="productos">
  <img class="img-producto" src="${imageUrl}" alt="img">
  <p class="product-name">${name}</p>
  <p class="precio">${price}</p>
  <a class="ver-producto" href="id=${id}">Ver Producto</a>
</div>  
    `;
  card.innerHTML = contenido;
  card.dataset.id = id;

  return card;
};

const productosI = document.querySelector("[data-product]");

const render = async () => {
  try {
    const listaProductos = await productoServices.listaProductos();
    listaProductos.forEach((elemento) => {
      productosI.appendChild(
        nuevoProducto(
          elemento.imageUrl,
           elemento.name,
           elemento.price,
          elemento.id
         
        )
      );
    });
  } catch (error) {
    console.log(error);
  }
};

render();
