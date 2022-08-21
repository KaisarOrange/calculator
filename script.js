const btn = document.querySelectorAll('.item');
const scr = document.querySelector('.screen')
var result = 0;
let resultS = '';
btn.forEach(btn => btn.addEventListener('click', ()=>{
    
    hello = btn.textContent;
    scr.textContent = hello;
    resultS+=hello;
    if(hello === '+'){
        
       add(resultS);
    }

    if (hello != "="  ){
    }
    
    if(hello === "=" ){

        console.log(resultS);

    }
}
));

function add(num){
    if(num === "+"){
        return;
    }
    let r = num;
    r = r.replace('+','');
    r = parseInt(r);
    result+=r;
    resultS='';
    console.log(result);                                                    
}