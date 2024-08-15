///                          LOGIC ONE

// let Green =document.getElementById('Green')
// let Red=document.getElementById('Red')
// let Blue=document.getElementById('Blue')
// let Random=document.getElementById('Random')
// const body=document.getElementsByTagName("body")[0]
// const buttn=document.querySelectorAll("button")

//   buttn.forEach(button=>{
//     button.addEventListener('click',()=>{
//         if(button==Green){
//             body.style.backgroundColor='green'
//         }
//         else if(button==Red){
//             body.style.backgroundColor='red'
//         }
//         else if(button==Blue){
//             body.style.backgroundColor='blue'
//         }
//         const random=`rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`
//         if(button==Random){
//             body.style.backgroundColor=random
//         }

//     })
//   })

                            // LOGIC TWO
const body=document.getElementsByTagName("body")[0]   
let One=(name)=>{
   body.style.backgroundColor=name
}     
let Random=()=>{
       const green=Math.round(Math.random()*255)
       const red=Math.round(Math.random()*255)
       const blue=Math.round(Math.random()*255)
       let color=`rgb(${green},${red},${blue})`
       body.style.backgroundColor=color
}




