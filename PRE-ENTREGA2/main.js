// Carrito de compras y buscador en el cual se agregan articulos de computacion ya existentes en el sistema que se ven que se buscan mediante prompt y se filtra mostrandose en la consola.
// suma el total del precio de los articulos  y mostrar la cantidad de unidades que hay en stock, si no hay stock mostrar mediante alert que no hay stock del producto.


const Articulos = function (nombre, precio, stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}

let articulo1 = new Articulos ("PROCESADOR AMD RYZEN 3 3200G", "$93.600", 15)
let articulo2 = new Articulos ("TARJETA GRAFICA GEFORCE RTX 4090", "$2.090.000", 10)
let articulo3 = new Articulos ("TARJETA GRAFICA GEFORCE RTX 3060", "$350.370", 7)
let articulo4 = new Articulos ("SILLA GAMER CORSAIR T3", "$266.084", 12)
let articulo5 = new Articulos ("SILLA GAMER AUREOX G600", "$179.000", 16)


let listaArticulos = [articulo1, articulo2, articulo3, articulo4, articulo5]




function buscarProductos (){
    let buscador = prompt ("Ingrese el producto que desea buscar").toUpperCase().trim()
    let resultadoBusqueda = listaArticulos.filter (   (revisa)=>revisa.nombre.toUpperCase().includes(buscador)   )
    if(resultadoBusqueda.length>0){
        console.table(resultadoBusqueda)
        agregarAlCarrito()
    }
    else{
        alert(`No se encontro el articulo ${buscador}`)
        confirm ("Desea realizar otra busqueda?")
        if(confirm === true){
            return(buscarProductos())
        }
    }
    
}

const Carrito = function (nombre, cantidad){
    this.articuloAgregado= nombre
    this.cantidad = cantidad
}
let CarritoArmado = []


function agregarAlCarrito(){
    let articuloAgregado =  prompt("cual es el articulo que desea añadir al carrito?")
    let cantidad = parseInt (prompt ("Cuantos desea llevar?"))
        if(cantidad <= articuloAgregado.stock){
        alert ("El articulo fue agregado con exito")
        confirm ("Desea agregar otro articulo?")
            if (confirm === true ){
                return (buscarProductos())
            }
            else{
                alert ("ahora a pagar :)")
            }
        }
        else{
            alert("No hay stock suficiente del producto.")
        }
    


    let articuloEnCarrito = new Carrito (articuloAgregado, cantidad)
    CarritoArmado.push (CarritoArmado)
    console.table

}

buscarProductos()


