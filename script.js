'use strict';

let inputText = document.getElementById('sentence');
let outputText = document.getElementById('translate');
const btnSend = document.querySelector('button');

btnSend.addEventListener('click', () => {
    event.preventDefault();
// const sendData = (text, outputData) => {
    let text = encodeURIComponent(inputText.value);
    const urlSite = "https://translate.yandex.net/api/v1.5/tr.json/translate?key='trnsl.1.1.20200506T181858Z.e5c26b35b19ac266.3132f4519b958e6ab7d02b8b82c4c3e19ccd021d'&text='text'&lang=en-ru";

    const request = new XMLHttpRequest();
    request.open('GET', urlSite, true);
    request.setRequestHeader('Content-type', 'application/json');
    request.addEventListener('readystatechange', () => {
        if(request.readyState !== 4){
            return;
        }
        if(request.state === 200) {
            const data = JSON.parse(request.responseText);
            outputText.value = data.text;
            // outputData(response);
        } else {
            console.error(request.statusText);
        }
    });
    request.send();
});

