let originalitem = [...items]
let input = document.querySelector('.input')
const child2 = document.querySelector('.child2')
const gchild1 = document.querySelector('.child2-gchild1')
const companies = document.querySelector('.companies')
 //__________________________________________________________________________________________________________________
const displayitem=()=>{
if(originalitem.length<1)
{
    child2.innerHTML = "Sorry No products Found"
    if(child2.innerHTML=="Sorry No products Found")
{
    child2.classList.add('child2newclass')
}
     return
    }
    if(child2.innerHTML=="Sorry No products Found")
    {
        child2.classList.remove('child2newclass')
    }

child2.innerHTML = originalitem.map((product)=>{

    return `<div class="child2-gchild1">
    <img src=${product.image} alt="" class="img" id = ${product.id}>
    <h3>${product.name}</h3>
    <h4>${product.price}</h4>
    </div>`
})
.join('')
 }
displayitem()

//___________________________________________________________________________________________________________________

companies.addEventListener('click',(e)=>{
    const btn = e.target;
    console.log("nitin")
    if (btn.className.includes('company-btn')) {
    
    if(btn.classList.contains('all'))
    {
        originalitem = [...items]
    }
    else{
originalitem = items.filter((element)=>{
    return element.company==btn.id
})
}
input.value = ""
displayitem()
}
})


//____________________________________________________________________________________________________________________
input.addEventListener('keyup',(e)=>{

 
    let searched = input.value.toLowerCase()
  
    originalitem = items.filter((element)=>{
        
         return element.name.match(searched)
    })
    console.log(searched)
    
  
    
     displayitem()
})
