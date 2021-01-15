
//Json
//const nombre = document.getElementsByTagName('input').item(1);
//const edad = document.getElementsByTagName('input').item(2);
//let btn = document.getElementsByTagName('button').item(1);
//const json = document.getElementById('json-result');

//btn.setAttribute('onclick', 'convertir()');

//const convertir = () => {
    //const s = {
        //nombre: nombre.value,
      //  edad: edad.value
    //};
    //console.log(s);
  //  json.textContent = JSON.stringify(s);
//}


























//1
const boton = document.createElement('button');

document.getElementById('buttons-container').appendChild(boton);

boton.innerHTML = "Contar palabras";

const boton1 = document.createElement('button');
boton1.innerHTML = "Restablecer";

const newSpan = document.createElement('span');

const newDiv = document.createElement('div');

newDiv.appendChild(newSpan);

document.getElementsByClassName('text-container').item(0).appendChild(newDiv);

const text = document.getElementsByClassName('text-container').item(0);

const text0 = document.getElementsByClassName('text-container').item(0).textContent;

const contadorDiv = (div) => {
    let count = 0;
    const text = div.textContent.replace(',', '');
    const textContent = text.replace('.', '');
    const words = textContent.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            count++;
        }
    }
    document.getElementById('buttons-container').appendChild(boton2);

    return count;

}
