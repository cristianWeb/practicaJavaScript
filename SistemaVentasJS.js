class Producto {
    static contadorProductos = 0;

    constructor(nombre, precio) {
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        this._precio = precio;
    }

    toString() {
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $ ${this._precio}`
    }
}

class Orden {
    static contsdorOrdenes = 0;

    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor() {
        this._idOrden = ++Orden.contsdorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarProducto(producto) {
        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            this._productos.push(producto);
        } else {
            console.log(' No  se puede agregar mas productos..');
        }
    }

    calcularTotal() {
        let tolalVenta = 0;

        for (let producto of this._productos) {
            tolalVenta += producto.precio; //
            //totalVenta = totalVenta + producto.precio
        }

        return tolalVenta;
    }
}

let producto1 = new Producto("Pantalon", 200);
let producto2 = new Producto("camisa", 100);
console.log(producto1.toString());
console.log(producto2.toString());