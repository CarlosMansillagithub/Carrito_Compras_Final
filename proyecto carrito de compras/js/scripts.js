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
                            <h2 <i class="fa fa-cart-arrow-down" aria-hidden="true"></i> </h2>
                            <input class="botonAgregarCarrito" type="button" value= "Agregar ">
                        </div> 
    </div> 
    `;
}
console.log("cursos de html", menuesHTML);
const contenedorProductos = document.getElementById("contenedorProductos");
contenedorProductos.innerHTML = menuesHTML;

const elementoCarrito = document.getElementById("elemento");
const totalPagar = document.getElementById("TotalPagar");
console.log(totalPagar);


// guardar en variables los elementos html que vamos a modificar
botonesAgregar = document.querySelectorAll(".botonAgregarCarrito");
console.log(botonesAgregar);
const listaCarrito = document.querySelector("#carrito ul");
console.log(listaCarrito);
const totalCarrito = document.querySelector("#carrito p");
console.log(totalCarrito);
let totalAPagar = 0;
// Agregamos al listener los botones
for (let indice=0; indice < botonesAgregar.length; indice++){
    function agregarElementoCarrito(){
        const elementLi = document.createElement("li");
        elementLi.innerText =  `Curso ${productos[indice].nombre} $${productos[indice].precio}`

        listaCarrito.appendChild(elementLi);
        totalAPagar += productos[indice].precio;
        totalCarrito.innerText = "Total a pagar: $" + totalAPagar; 
    }
    botonesAgregar[indice].addEventListener("click", agregarElementoCarrito);
}
function borrarCarrito(){
    listaCarrito.innerHTML="";
    totalCarrito.innerHTML = "Total a pagar: $0";
    totalAPagar = 0;
    mensaje.innerHTML =""
}
//vamos a agregar listener boton borrar
const botonBorrar = document.querySelector("#boton-borrar");
botonBorrar.addEventListener("click", borrarCarrito);

// agregar listener a boton a pagar
const mensajeCarrito = document.querySelector("#boton-pagar");
const botonPagar = document.querySelector("#boton-pagar");
function irAPagar(){
    if (listaCarrito.innerText === ""){
        mensaje.innerHTML ="Debe ingresar una compra"
    } else{
        window.location.href ="./pagos.html";
    }
    
}
botonPagar.addEventListener("click", irAPagar);