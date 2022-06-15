// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
// Сколько символов должно быть в инпуте, указывается
 //в его атрибуте data-length.
// Если введено подходящее количество символов,
// то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы
//  valid и invalid, которые мы уже добавили в исходные файлы задания.

const input = document.querySelector('#validation-input')
const onInput = input.addEventListener('blur', handlerIn)


function handlerIn(event){
    console.log(event.target.value.length);
   if( event.target.value.length === Number(input.dataset.length)){
    input.classList.add('valid')
    input.classList.remove('invalid')
    return
   }
   input.classList.add('invalid')

}



