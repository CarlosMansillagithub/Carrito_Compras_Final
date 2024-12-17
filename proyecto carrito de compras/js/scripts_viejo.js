console.log("Ok");
const productos = [
    {
        id: 1,
        nombre: "Canelones de Carne",
        descripcion: "Los canelones de carne lleva masa con relleno de carne",
        imagen: "images/Canelones_de_carne.jpeg",
        precio: 3500
    },
    {
        id: 2,
        nombre: "Canelones de Verduras",
        descripcion: "Los canelones de verduras llevan masa con relleno de verduras",
        imagen: "images/Canelones_verduras.jpg",
        precio: 3400
    },
    {
        id: 3,
        nombre: "Hamburguesas",
        descripcion: "Las hamburguesas son de carne con lechuga, tomate, huevo y aderezzos",
        imagen: "images/hamburguesa.jpg",
        precio: 2500
    },
    {
        id: 4,
        nombre: "Panchos",
        descripcion: "Es super pancho c/ papitas pay y aderezzos",
        imagen: "images/pancho.jpg",
        precio: 1200
    },
    {
        id: 5,
        nombre: "Pebetes con Jamon y Queso",
        descripcion: "Es pebete con Jamon y Queso y puede llevar aderezzo y papitas pay",
        imagen: "images/pebete_con_jamon.jpg",
        precio: 2000
    },
    {
        id: 6,
        nombre: "Pebetes con Salame y Queso",
        descripcion: "Es pebete con Salame y Queso y puede llevar aderezo y papitas pay",
        imagen: "images/pebete_con_salame.jpeg",
        precio: 2000
    },
    {
        id: 7,
        nombre: "Pizza con Huevo",
        descripcion: "Pizza con Mozzarella y huevo",
        imagen: "images/Pizza_con_huevo.jpeg",
        precio: 3500
    },
    {
        id: 8,
        nombre: "Pizza con Morron",
        descripcion: "Es una pizza con Mozzarella y Morron",
        imagen: "images/Pizza_con_morron.jpeg",
        precio: 4500
    },
    {
        id: 9,
        nombre: "Sopa Paraguaya",
        descripcion: "Es almidon, con queso y cebolla",
        imagen: "images/Sopa_paraguaya.jpeg",
        precio: 5200
    }
]
let menuesHTML = "";
for (let indice=0; indice<productos.length;indice++){
    menuesHTML += `
    <div class="Targetas">
                        <h2 id="Canelones_carne">${productos[indice].nombre}</h2>
                        <img src=${productos[indice].imagen} alt="Imagen de Productos">
                        <div class="contenido">    
                            <h2>Descripcion</h2>
                            <p>${productos[indice].descripcion}</p>
                            <h3>Precio $${productos[indice].precio}</h3>
                            <a href="pages/detalle.html">Detalle</a>
                            <input id="botonAgregarCarrito${indice}" type="button" value="Agregar${indice}">
                        </div> 
    </div> 
    `;
}
console.log("cursos de html", menuesHTML);
const contenedorProductos = document.getElementById("contenedorProductos");
contenedorProductos.innerHTML = menuesHTML;
// definicion boton agregar
//for (indice = 0;  indice < productos.length; indice++){
//const btnHacerClick[indice] = document.getElementById(`botonAgregarCarrito${indice}`);
//    console.log(btnHacerClick[indice])
//}
const elementoCarrito = document.getElementById("elemento");
const totalPagar = document.getElementById("TotalPagar");
console.log(totalPagar);
// Funcion agregar carrito agrega los elementos al carrito
let contadorBoton;
let contador = 0;
let precioTotal = 0;
function agregarCarrito0(){
    elemento.innerHTML +=`<li>${contador} ${productos[0].nombre} ${productos[0].precio}</li>`;
    contador++;
    precioTotal +=productos[0].precio;
    console.log(totalPagar);
    totalPagar.innerHTML =`<p>Precio total : $${precioTotal}</p>`;
}
function agregarCarrito1(){
    elemento.innerHTML +=`<li>${contador} ${productos[1].nombre} ${productos[1].precio}</li>`;
    contador++;
    precioTotal +=productos[1].precio;
    totalPagar.innerHTML =`<p>Precio total : $${precioTotal}</p>`;
}
function agregarCarrito2(){
    elemento.innerHTML +=`<li>${contador} ${productos[2].nombre} ${productos[2].precio}</li>`;
    contador++;
    precioTotal +=productos[2].precio;
    totalPagar.innerHTML =`<p>Precio total : $${precioTotal}</p>`;
}
function agregarCarrito3(){
    elemento.innerHTML +=`<li>${contador} ${productos[3].nombre} ${productos[3].precio}</li>`;
    contador++;
    precioTotal +=productos[3].precio;
    totalPagar.innerHTML =`<p>Precio total : $${precioTotal}</p>`;
}
function agregarCarrito4(){
    elemento.innerHTML +=`<li>${contador} ${productos[4].nombre} ${productos[4].precio}</li>`;
    contador++;
    precioTotal +=productos[4].precio;
    totalPagar.innerHTML =`<p>Precio total : $${precioTotal}</p>`;
}
function agregarCarrito5(){
    elemento.innerHTML +=`<li>${contador} ${productos[5].nombre} ${productos[5].precio}</li>`;
    contador++;
    precioTotal +=productos[5].precio;
    totalPagar.innerHTML =`<p>Precio total : $${precioTotal}</p>`;
}
function agregarCarrito6(){
    elemento.innerHTML +=`<li>${contador} ${productos[6].nombre} ${productos[6].precio}</li>`;
    contador++;
    precioTotal +=productos[6].precio;
    totalPagar.innerHTML =`<p>Precio total : $${precioTotal}</p>`;
}
function agregarCarrito7(){
    elemento.innerHTML +=`<li>${contador} ${productos[7].nombre} ${productos[7].precio}</li>`;
    contador++;
    precioTotal +=productos[7].precio;
    totalPagar.innerHTML =`<p>Precio total : $${precioTotal}</p>`;
}
function agregarCarrito8(){
    elemento.innerHTML +=`<li>${contador} ${productos[8].nombre} ${productos[8].precio}</li>`;
    contador++;
    precioTotal +=productos[8].precio;
    totalPagar.innerHTML =`<p>Precio total : $${precioTotal}</p>`;
}
// Hacemos el agregado en el carrito cada vez que tocamos los botones de agregar

const btnHacerClick0 = document.getElementById("botonAgregarCarrito0");
const btnHacerClick1 = document.getElementById("botonAgregarCarrito1");
const btnHacerClick2 = document.getElementById("botonAgregarCarrito2");
const btnHacerClick3 = document.getElementById("botonAgregarCarrito3");
const btnHacerClick4 = document.getElementById("botonAgregarCarrito4");
const btnHacerClick5 = document.getElementById("botonAgregarCarrito5");
const btnHacerClick6 = document.getElementById("botonAgregarCarrito6");
const btnHacerClick7 = document.getElementById("botonAgregarCarrito7");
const btnHacerClick8 = document.getElementById("botonAgregarCarrito8");

 

console.log(btnHacerClick0);
btnHacerClick0.addEventListener("click",agregarCarrito0);
btnHacerClick1.addEventListener("click",agregarCarrito1);
btnHacerClick2.addEventListener("click",agregarCarrito2);
btnHacerClick3.addEventListener("click",agregarCarrito3);
btnHacerClick4.addEventListener("click",agregarCarrito4);
btnHacerClick5.addEventListener("click",agregarCarrito5);
btnHacerClick6.addEventListener("click",agregarCarrito6);
btnHacerClick7.addEventListener("click",agregarCarrito7);
btnHacerClick8.addEventListener("click",agregarCarrito8);

// guardar en variables los elementos html que vamos a modificar
botones-agregar = document.querySelectorAll(".boton-agregar-carrito");
console.log(botones-agregar);
const listaCarrito = document.querySelector("#Carrito ul");
console.log(listaCarrito);
const totalCarrito = document.querySelector("#Carrito p");
console.log(totalCarrito);
let totalAPagar = 0;
// Agregamos al listener los botones
for (let indice=0; indice < botones-agregar.length; indice++){
    function agregarElementoCarrito(){
        const elementLi = document.createElement("li");
        elementLi.innerText =  `Curso ${productos[indice].nombre} $${productos[indice].precio}`

        listaCarrito.appendChild(elementLi);
        totalAPagar += productos[indice].precio;
        totalCarrito.innerText = "Total a pagar: $" + totalAPagar; 
    }
    botones-agregar[indice].addEventListener("click", agregarElementoCarrito);
}
function borrarCarrito(){
    listaCarrito.innerHTML="";
    totalCarrito.innerHTML = "Total a pagar: $0";
    totalAPagar = 0;
}
// vamos a agregar listenesr boton borrar
const boton-borrar = document.querySelector("boton-borrr");
boton-borrar.addEventListener("click", borrarCarrito);

// agregar listener a boton a pagar
const mensajeCarrito = document.querySelector("#boton-pagar");
const botonPagar = document.querySelector("#boton-pagar");
function irAPagar(){
    if (listaCarrito.innerText === ""){
        mensajePgst
    } else{

    }
    window.location.href ="./pagos.html";
}
botonPagar.addEventListener("click", irAPagar);