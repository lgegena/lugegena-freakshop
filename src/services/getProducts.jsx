const productos = [
    { id: 1,foto:'https://http2.mlstatic.com/D_NQ_NP_941400-MLA47364560459_092021-V.jpg', name: "FarCry 6 PS4 Edition", price: 9999 },
    { id: 2,foto:'https://pbs.twimg.com/media/E0N6wf_VEAQFvpF.jpg' , name: "Funco Pop: The Batman", price: 4399 },
    { id: 3,foto:'https://http2.mlstatic.com/D_NQ_NP_757333-MLA43922830255_102020-O.webp' , name: "Cuentos Completos: HP LoveCraft", price: 7500 },
  ];

  export const getProducts = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(productos)
    }, 2000);
    //reject('400 not found')
})

//Devuelve un solo producto se expresa solo para el desafio de getItem con Detail
export const getItem = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(productos.filter(prod => prod.id === 1))
    }, 2000);
    //reject('400 not found')
})