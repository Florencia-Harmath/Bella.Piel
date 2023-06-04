console.log("Estamos online");


//menú hambuerguesa
const ham = document.querySelector(".ham");
const enlace = document.querySelector(".enlaces-menu");
const barras = document.querySelectorAll(".ham span");

ham.addEventListener("click", () => {
  enlace.classList.toggle("activado");
  barras.forEach(child => { child.classList.toggle("animado") });
});


//carrusel
function changeSlide(carouselId, n) {
  const carousel = document.getElementById(carouselId);
  const slides = carousel.getElementsByClassName('slides')[0];
  const slideIndex = parseInt(carousel.getAttribute('data-slide-index')) || 0;

  const newSlideIndex = slideIndex + n;
  const slideWidth = slides.offsetWidth / 3;

  if (newSlideIndex >= slides.children.length || newSlideIndex < 0) {
    return;
  }

  slides.style.transform = `translateX(-${slideWidth * newSlideIndex}px)`;
  carousel.setAttribute('data-slide-index', newSlideIndex);
}


//Funciones con ciclos y condicionales primer pre-entrega

//CONDICIONAL 20% descuento al producto en caso que aplique

function obtenerPrecio(precioProducto, descuento, usarDescuento) {
  let precioTotal = 0
  if (usarDescuento) {
    precioTotal = precioProducto * descuento;
    console.log('Te llevas el producto con descuento, pagas ' + precioTotal + "$");
  } else {
    console.log('El producto no posee descuento, pagas ' + precioProducto + "$");
  }
}

const precioProducto = 500;
const descuento = 0.8;
const usarDescuento = true;
obtenerPrecio(precioProducto, descuento, usarDescuento);




//CICLOS mostrar productos


function mostrarStock(cantidadProductos) {
  for (let producto = 0; producto <= cantidadProductos; producto++) {
    console.log("Producto numero: " + producto);
  }
}

const cantidadProductos = 20;
mostrarStock(cantidadProductos);
















