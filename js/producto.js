(function(){
    const productos = document.getElementById("productos")
    window.addEventListener('load', () =>{
        productos.className = "menu-activo"      
    })
}());
(function(){
    let productos = document.querySelector("#nuestros-productos");
    let cantidadProductosBolsa = document.querySelector(".cantidad-producto-bolsa");
    let ventanaCarritoCompras = document.querySelector(".ventana-carrito-compras");
    let contadorProductos = 0;
    let productosAgregados = [];
    let valorTotalCompra = 0;

    productos.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-agregar-articulo')) {
            contadorProductos++;
            document.querySelector(".contenedor-bolsa-compras").style = "display: block"
            cantidadProductosBolsa.textContent = contadorProductos;
            let contenedorArticulo =  e.target.parentElement;
            const detalleProducto = {
                imagen: contenedorArticulo.querySelector(".foto-articulo").src,
                titulo: contenedorArticulo.querySelector(".titulo-articulo").textContent,
                precio: contenedorArticulo.querySelector(".precio-articulo").textContent,
                referencia: contenedorArticulo.querySelector(".referencia-articulo").textContent,
                cantidad: 1
            }
            productosAgregados = [...productosAgregados, detalleProducto];
            ventanaCarritoCompras.innerHTML = "";
            productosAgregados.forEach(contenedorArticulo => {
                const {imagen, titulo, precio, referencia, cantidad} = contenedorArticulo;
                const contenedorDetalleProducto = document.createElement('div');
                contenedorDetalleProducto.classList.add('contenedor-detalle-producto');
                contenedorDetalleProducto.innerHTML = `<img src="${imagen}"><div><h4>${titulo}</h4><p>${precio}</p><p>${referencia}</p><p>${cantidad}</p></div><span class="eliminar-producto">&#10006;</span>`;
                ventanaCarritoCompras.appendChild(contenedorDetalleProducto);
                ventanaCarritoCompras.removeAttribute("hidden")   
            });
            valorTotalCompra +=  parseFloat(detalleProducto.precio); 
            document.querySelector(".valor-bolsa-compras").innerHTML = "$&nbsp;" + valorTotalCompra.toFixed(2);
        }
    })
    
}());
(function(){
        const bolsaCompras = document.querySelector(".bolsa-de-compras");
        const contenedorBolsaCompras = document.querySelector(".contenedor-bolsa-compras");
        const contenedorPrincipal = document.querySelector(".contenedor-principal-productos");


        (function salirBolsaCompras(){
                document.querySelector(".salir-bolsa-compras").addEventListener('click', () => {
                contenedorBolsaCompras.style = "display: none";
            });
        }());
        (function mostrarBolsaCompras(){
                bolsaCompras.addEventListener('click', () => {
                contenedorBolsaCompras.style = "display: block";
            });
        }());
}());