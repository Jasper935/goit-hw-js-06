const input = document.querySelector("#name-input");
const title = document.querySelector("#name-output");
console.log(title);
input.addEventListener("input", handlerInput);

function handlerInput(event) {

  if (event.target.value === ""){
   return title.textContent = 'Anonymous'
  }
  
  title.textContent = event.target.value
}
