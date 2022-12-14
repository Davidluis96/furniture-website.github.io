var inputBuscador = document.createElement("input");
var contenedorIconos = document.getElementById("contenedor-iconos");
var iconoBolsaDeCompra = document.querySelector(".fa-magnifying-glass");
var cont = 0;
document.querySelector(".fa-magnifying-glass").addEventListener('click', () => {
    cont++;
    if(cont == 1){
        inputBuscador.setAttribute("type","search");
        inputBuscador.setAttribute("placeholder","Buscar...");
        
        contenedorIconos.insertBefore(inputBuscador,iconoBolsaDeCompra);
    }
    if(cont == 2){
        inputBuscador.remove();
        cont = 0;
    }
})


//cambiar pantalla principal
var imgPrincipal = document.getElementById("imagen-principal");
var rutas = ["./img/image-banner.png","./img/mueble1.png","./img/muebleCeleste.png","./img/mueble3.png","./img/mueble4.png","./img/salaModular.png"];

sucesiones();
setInterval(() => {
    for (let i = 0; i < rutas.length; i++) {
        setTimeout(() => {
            imgPrincipal.setAttribute("src",rutas[i]);
        }, 4000*i);
    }
}, 24000);

function sucesiones(){
    for (let i = 0; i < rutas.length; i++) {
        setTimeout(() => {
            imgPrincipal.setAttribute("src",rutas[i]);
        }, 4000*i);
    }
}

(function(){
    "use strict"
    const itemsNav = document.getElementsByClassName("items-navbar");
    const itemInicio = document.getElementById("inicio");

    for (let i = 0; i < 3; i++) {
        itemsNav[i].addEventListener('mouseover', () => {
        itemInicio.style = "color: #FFFFFF; background-color: #206060;"
        }); 
    }
    
    for (let i = 0; i < 3; i++) {
        itemsNav[i].addEventListener('mouseout', () => {
            itemInicio.style = "color: #FFFFFF; background-color: #206060; transition: 2s ease-out";
        });
    }
}());

(function(){
    "use strict"
    let contenedorNombreCategoria = document.getElementsByClassName("contenedor-nombre-categoria");
    let leyendaCategoria = document.getElementsByClassName("leyenda-categorias");

    for (let i = 0; i < contenedorNombreCategoria.length; i++) {
        contenedorNombreCategoria[i].addEventListener('mouseover', () => {
            leyendaCategoria[i].style = "cursor: pointer;box-shadow: inset 100px 0 0 10px #414344;color: white;"
        });
    }
    for (let i = 0; i < contenedorNombreCategoria.length; i++) {
        contenedorNombreCategoria[i].addEventListener('mouseout', () => {
            leyendaCategoria[i].removeAttribute("style")
        });
    }
}());