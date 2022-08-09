let number = document.getElementById('num')
let dec = document.getElementById('Dec')
let Res = document.getElementById('Res')
let Inc = document.getElementById('Inc')
let body = document.body



function Decrease (){
  number.innerText--
  if(number.innerText < 0){
    body.style.backgroundColor = 'red'
  }
}

let Reset = function(){
     number.innerText = 0
     if(Number(number.innerText) === 0){
        body.style.backgroundColor = 'blue'
     }
}

Res.addEventListener('click', Reset)

Inc.addEventListener('click',()=>{
    number.innerText++
    if(number.innerText > 0){
        body.style.backgroundColor = 'green'
    }
})
