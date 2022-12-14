const productos = [
    {id:"1", tipo:"Placa de video", nombre: "Msi 3090", precio: 222000, stock: 10, envio:'si' },
    {id:"2", tipo:"Placa de video", nombre: "Amd 5500", precio: 130000, stock:20, envio:'no' },
    {id:"3", tipo:"Placa de video", nombre: "Zotac 2060", precio: 99999, stock:7, envio: 'no'},
    {id:"4", tipo:"Placa de video", nombre: "Asus Tuf 3080", precio: 191700, stock:0 , envio:'si'},
];


const buscar = (id) => {
  let producto = productos.find((item) => item.id === id);
  
  if(producto){
    let mensaje = `
      Nombre: ${producto.nombre}
      Tipo Producto: ${producto.tipo}
      Precio: ${producto.precio}
      Stock: ${producto.stock}
      Envio gratis: ${producto.envio}
    `;

    alert(mensaje);
  }else{
    alert("Producto no encontrado");
  }
};


let welcome = "Hola bienvenido a Master Race Components, Cual es tu nombre?"
let name = prompt (welcome)
alert (`Hola ${name}, los precios incluyen iva (Presione enter para continuar)`)

let id = prompt("Seleccione la opcion solicitada de su placa de video 1) Msi 3090 , 2) Amd 5500, 3) Zotac 2060, 4) Asus tuf 3080");
buscar(id);

