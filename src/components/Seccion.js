import Tarjeta from "./Tarjeta"



const Seccion = () => {
    return (
        <section
            style={{
                backgroundColor:"##808080",
                width: "100%",
                maxWidth: "100vw",
                height: "90vh",
                maxHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent:"space-evenly",
                flexWrap:"wrap",
                gap:"10px"
}}>
            {
                productos.map(el => <Tarjeta key={el.id}
                    el={el} />)
            }
        </section>
    );
}

export default Seccion;




const productos = [
    {
        id: 1,
        imagen: "https://bicimarket.com/blog/wp-content/uploads/2020/02/9-60_-1.jpg",
        nombre: "Bicicleta",
        precio: 1500,
        cuotas: "6 cuotas sin interés de $300",
        descripcion: "Bicicleta Felt para competicion. Aluminio R29"
    },
    {
        id: 2,
        imagen: "https://www.venex.com.ar/products_images/1664897826_auris1.png",
        nombre: "Airpods",
        precio: 90,
        cuotas: "6 cuotas sin interés de $15",
        descripcion: "Airpods ultimo modelo 300w de potencia"
    },
    {
        id: 3,
        imagen: "https://www.lg.com/ar/images/televisores/md06198516/gallery/DES_1_N.jpg",
        nombre: "Smart TV",
        precio: 2000,
        cuotas: "6 cuotas sin interés de $333",
        descripcion: "Smart Tv ultima generación. Pantalla curva, resolución 4k Full HD"
    },
    {
        id: 4,
        imagen: "https://i.blogs.es/86b11e/ps51/1366_2000.jpeg",
        nombre: "PlayStation 5",
        precio: 3000,
        cuotas: "6 cuotas sin interés de $500",
        descripcion: "PlayStation 5 con 2 controles y 5 juegos incluidos"
    },
    {
        id: 4,
        imagen: "https://images.fravega.com/f300/4fb2fb4fd95617ceeb28d3aa1e1a9e2c.jpg.webp",
        nombre: "MacBook Air 13",
        precio: 6000,
        cuotas: "6 cuotas sin interés de $1000",
        descripcion: "MacBook Air 13 Core i5 128GB 8GB MQD32LE/A"
    }
]

