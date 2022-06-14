// Напиши скрипт, который реагирует на изменение значения
//  input#font-size-control (событие input) и изменяет инлайн-стиль
//   span#text обновляя свойство font-size. В результате
//  при перетаскивании ползунка будет меняться размер текста.
const input = document.querySelector('#font-size-control')
const span = document.querySelector('#text')

span.style.fontSize = input.value+'px'

// console.log(document.getElementById('font-size-control').value);
const onInput = input.addEventListener('input', handlerIn)
function handlerIn(value){
   span.style.fontSize = value.target.value+'px'
}