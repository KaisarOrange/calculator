const btn = document.querySelectorAll('.item');
const scr = document.querySelector('.screen')

let operator ='';
let cal = '';
let num = [];
let next = [];
let execute = false;

btn.forEach(btn => btn.addEventListener('click', ()=>{
    
    if(btn.textContent != "+" && btn.textContent != '-' && btn.textContent != '='
    && btn.textContent != '/' && btn.textContent != '*'){
        
        cal+=btn.textContent;
        
         console.log("cal: " +cal);
    }
    if (btn.textContent === "+"){
        operator = "+";
        
        
        if(num.length === 0){
            num[0] = parseInt(cal); 
             
        }else{
            num[1] = parseInt(cal);
            
        } 
        cal='';
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
    
    console.log(num);

}));

function calculate(){

    switch(operator){
        case "+":
                
               const res = num.reduce((total, num) =>{
                return total + num;
              });
              
              scr.textContent = res;
              num[0]= res;
              
              break;
              
        case "-":
                let reso = num.reduce((total, num) =>{
             return total - num;
           });
           
           scr.textContent = reso;
           num[0]= reso;
           console.log(reso);
           break;
              

    }
    console.log("next: "+ next);
    execute = false;

}