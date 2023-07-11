// let nombre = 'Michelle Obama';
// let nombre2= 'John Smith';
// let edad = 47;
// let anoActual = new Date().getFullYear();
// let imagen= "passport_image.jpg";

// let resultado = "She is " + nombre + " and she had " + edad + " years old";
// let resultado2 = `Her name is ${nombre} and she had ${edad} years old`;

// console.log(resultado);
// console.log(resultado2);
// //con una function ===>
// const anoDeNacimiento = () => anoActual - edad;

// console.log(`${nombre} was born in ${anoDeNacimiento()} and she had ${edad} years old`);
// //============================
// document.querySelector("body").innerHTML=`
// <div class="imagen">
//   <img src="img/passport_image.jpg" alt="passport">
// </div>
// <div>
//   <p>My name is <span class="color-red">${nombre}</span> and I was born in ${anoDeNacimiento()}</p>
//   <p>I am <b>${edad} years old</p>
// </div>
// <button class="boton">click here</button>
// `;

// document.querySelector('.boton').onclick= action ;

// function action(){
//   document.querySelector('body').insertAdjacentHTML("beforeend",`
//     <div class="second-div"> 
//       Good norning. My name is ${nombre2}
//       <div class="second-div"> 
//   `);
//   if(nombre2 !== " "){
//     alert(`${nombre}`)
//   }
 
// }
//=================================
window.onload= incio ;
document.querySelector("body").insertAdjacentHTML('beforeend',`<section class="mi-ejercicio">
    <h1>Mi ejercicio</h1>
    <div>
      <input type="text" placeholder="usuario Name:" id="nombre">
      <input type="number" placeholder="password" id="password">
      <button class="boton">Click</button>
    </div>
    <div class="contenido"></div>
  </section>
  `);

function incio(){
  document.querySelector('.boton').onclick= action2;  
  }

  function action2(){
    let nombre=document.getElementById('nombre').value ;
    let password=document.getElementById('password').value;

    if(nombre !== "" && password == 123){
      document.querySelector('.contenido').insertAdjacentHTML("beforeend",`
      <div class="contenido">
        <div>
          <img src="img/img2/gorra.jpg"/>
        </div>
      </div>
      `)
    }
    else if(nombre === "many" ){
      document.querySelector('.contenido').insertAdjacentHTML("beforeend",`
      <div >
        <div>
          <img src="img/img2/short.jpg"/>
        </div>
      </div>`)
    }
    else {
      alert('estas haciendolo mal')
    }
  }
//======================================
//JAB SHOPPING
let usuario = 'John Smith';
let productAcheter = 1; //<==depende si utilisamo el 'array 0' o el 'array 1'
const DISCOUNT = 0.1;

let prixDiscount; //<==sera una fuction (restandolo del prix 1 o prix 2 - discount)
const PRODUCT = [
  {
    product: 'Pantalon',
    prix: 10,
    talla: 'm',
    imgage: 'short.jpg'
  },
  {
    product: 'Casquette',
    prix: 5,
    talla: 's',
    imgage:'gorra.jpg'
  }
]
//----------------
document.querySelector('body').insertAdjacentHTML("beforeend",`
<h1 class="nom-client">${usuario}</h1>
<section class="jab-ejercice">
  <div>
  ${PRODUCT[productAcheter].product} =
  ${PRODUCT[productAcheter].prix}$
</div>
<div>Prix descount = ${calculoDiscount()}$</div>
<div>
  <strong>
    Prix Total: ${calculoPrixFinal()} $
  </strong>
</div>
<div>talla: ${PRODUCT[productAcheter].talla.toUpperCase()}</div>
<img src="/img/img2/${PRODUCT[productAcheter].imgage}" />
</section>`);

function calculoDiscount(){
  prixDiscount =PRODUCT[productAcheter].prix * DISCOUNT;
  return prixDiscount;
};

function calculoPrixFinal(){
  return PRODUCT[productAcheter].prix - prixDiscount;
}

