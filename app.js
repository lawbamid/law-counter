let number = document.getElementById('num')
let dec = document.getElementById('Dec')
let Res = document.getElementById('Res')
let Inc = document.getElementById('Inc')

function Decrease (){
  number.innerText--
}

let Reset = function(){
     number.innerText = 0
}

Res.addEventListener('click', Reset)

Inc.addEventListener('click',()=>{
    number.innerText++
})