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
          <img src="img/gorra.jpg"/>
        </div>
      </div>
      `)
    }
    else if(nombre === "many" ){
      document.querySelector('.contenido').insertAdjacentHTML("beforeend",`
      <div >
        <div>
          <img src="img/short.jpg"/>
        </div>
      </div>`)
    }
    else {
      alert('estas haciendolo mal')
    }
  }

