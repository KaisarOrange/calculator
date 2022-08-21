const btn = document.querySelectorAll('.item');
const scr = document.querySelector('.screen')
let result = 0;
let resultS = '';
btn.forEach(btn => btn.addEventListener('click', ()=>{
    
    hello = btn.textContent;
    resultS += hello;
    scr.textContent = resultS;
    if (hello != "="){
        let a = parseInt(hello);
        result += a;
    }
    
    if(hello === "=" ){
        console.log(result);
    }
}
));