//------------------------1----------------------------------
const li = document.querySelectorAll('.item')
const newLi= Array.from(li)
console.log('Number of categories:', newLi.length);



const doc = document.querySelectorAll('.item')
const newDoc= Array.from(doc)

newDoc.forEach((el)=>{
    console.log('Category:', el.children[0].textContent)
    console.log('Elements:', el.children[1].children.length)})
    

