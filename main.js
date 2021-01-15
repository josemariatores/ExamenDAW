
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
    for (let x = 0; x < words.length; x++) {
        if (words[x].length > 0) {
            count++;
        }
    }
    document.getElementById('buttons-container').appendChild(boton1);

    return count;

}
const contar = () => {

    if (!newDiv.contains(newSpan)) {
        newDiv.appendChild(newSpan);
    }
    newSpan.textContent = contadorDiv(text);
}

boton.setAttribute('onclick', 'contar()');

const removeSpan = () => {
    if (newDiv.contains(newSpan)) {
        newDiv.removeChild(newSpan);
    }
}
boton1.setAttribute('onclick', 'removeSpan()');
//2 tiene que contar apalabras no letras
const letras = document.getElementsByTagName('input').item(0);
document.getElementsByClassName

const numLetras = (escrito, num_letras) => {
    escrito = escrito.split(" ");
    for(x = 0; x<escrito.length;x++){
        if(!escrito[x].length > 0){
            escrito.splice(x, 1);
            
        }
    }
    escrito = escrito.splice(0,num_letras).join(" ");
    text.textContent = escrito;
}



letras.setAttribute('onfocusout', 'numLetras(text0, letras.value)');

//3
































//5

const nombre = document.getElementsByTagName('input').item(1);
const edad = document.getElementsByTagName('input').item(2);
let btn = document.getElementsByTagName('button').item(1);
const json = document.getElementById('json-result');

btn.setAttribute('onclick', 'conversor()');

const conversor = () => {
    const jJson = {
        nombre: nombre.value,
        edad: edad.value
    };
    console.log(jJson);
    json.textContent = JSON.stringify(jJson);
}

