const btn = document.querySelectorAll('.item');
const scr = document.querySelector('.screen')

let operator ='';
let num = [];
let execute = false;

btn.forEach(btn => btn.addEventListener('click', ()=>{
    if(btn.textContent != "+" && btn.textContent != '-' && btn.textContent != '='
    && btn.textContent != '/' && btn.textContent != '*'){
        let number = parseInt(btn.textContent);
        num.push(number);
        console.log(num);
    }
    if (btn.textContent === "+"){
        operator = "+";
        
        if(execute === true){
            calculate();
        }
        execute = true;
    }
    if (btn.textContent === "-"){
        operator = "-";
        if(execute === true){
            calculate();
        }
        execute = true;
    }

}));

function calculate(){

    switch(operator){
        case "+":
               let res = num.reduce((total, num) =>{
                return total + num;
              });
              
              scr.textContent = res;
              console.log(res);
              break;
              

    }
    execute = false;

}