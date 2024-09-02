const url = 'https://randomuser.me/api/'
const boton = document.getElementById('boton')
const img = document.querySelector('#img')
const number = document.querySelector('#numero')
const nom = document.querySelector('#nombre')
const correo = document.querySelector('#correo')
const gender = document.querySelector('#genero')

const mostrarDataAll = async () => {
    const res = await fetch(url);
    const data =  await res.json();

    img.innerHTML = `<img src='${data.results[0].picture.large}'>`
    nom.innerHTML = `<p>${data.results[0].name.first}</p>`
    number.innerHTML = `<p>${data.results[0].cell}</p>`
    correo.innerHTML = `<p>${data.results[0].email}</p>`
    gender.innerHTML = `<p>${data.results[0].gender}</p>`
}


  
boton.addEventListener('click', mostrarDataAll)