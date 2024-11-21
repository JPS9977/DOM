// // const menu = document.querySelector('#links')

// const image = document.querySelector('nav>img')
// // console.log(image.alt)
// image.alt = 'Icono'

// const link1 = document.querySelector('#link1')
// console.log(link1);
// link1.innerText = 'HOME'

// link1.innerHTML = '<p>Home</p>'

// //Cambiar estilos del elemento con la propiedad style

// link1.style.color = 'red'

// const list = document.querySelector('#links')

// console.log(list);
// //Crear elemento
// const li = document.createElement('li')
// //Agregamos texto o atributos 
// li.innerText = 'About'
// li.setAttribute('id', 'ultimo link')
// //agregamos el elemento al contenedor padre

// list.append(li)

// const sectionProductos = document.querySelector('.productos')
// console.log(sectionProductos);

// sectionProductos.classList.add('fondo-verde')
// // sectionProductos.classList.remove('fondo-verde')
// // sectionProductos.classList.toggle('fondo-verde')

// console.log(sectionProductos.classList.contains('fondo-verde'));

// //contenedor
// const header = document.querySelector('header')
// //elemento
// const boton = document.createElement('button')

// boton.innerText = 'MENÚ'
// //asociar el elemento
// header.append(boton)

// boton.addEventListener('click', ()=>{
//     console.log('BOTÓN PRESIONADO');
// })

// // EJEMPLO
// // ALTERNAR LOS ESTILOS DE UN ELEMENTO DEL HTML CON UN BOTÓN



const boton = document.querySelector('#miBoton');
const parrafo = document.querySelector('p');
boton.addEventListener('click', function(){
    parrafo.classList.toggle('fondo-verde')
})


const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(event){
    event.preventDefault()
    console.log('first');
    const datos = Object.fromEntries(new FormData(event.target))
    console.log(datos)
})