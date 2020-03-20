import string from "./css.js"
let n=1;
let demo=document.querySelector(".demo")
let demo2=document.querySelector(".demo2")
let ring=()=>{
    if(n>string.length){
        window.clearInterval(id)
        return
    }
    demo2.innerHTML=string.substr(0,n)
    demo.innerText=string.substr(0,n)
    demo.scrollTop=demo.scrollHeight
    //其实这里要减去滑块高度
    n+=1
}
let time=0
let play=()=>{
    return setInterval(ring, time)
}
let id=play()
const clear=()=>{window.clearInterval(id)}
let fast=document.querySelector("#fast")
let slow=document.querySelector("#slow")
let stop=document.querySelector("#stop")
let start=document.querySelector("#start")
stop.onclick=()=>{
    clear()
}
start.onclick=()=>{
    clear()
    id=play();
}
fast.onclick=()=>{
    if(time>99){
        time-=100
    }
    clear()   
    id=play()
}
slow.onclick=()=>{
    time+=100
    clear()
    id=play()
}
//这里可以把这些函数封装成一个对象，建议用webstorm，vscode太蛋疼