const {ProductManager} = require("./managers/ProductManager");

const manager = new ProductManager('./files/productos.json');

const env = async () => {
    const productos = await manager.getProduct();
    console.log(productos);

    const producto = {
        title: 'Pollo',
        description: 'Fresco',
        price: '15',
        thumbnail: './files/img.jpg',
        code: 'prod-0001',
        stock: '10'
    };

    await manager.agregarProductos(producto);

    const productoResultadoFinal = await manager.getProduct();
    console.log(productoResultadoFinal);
}

env();
