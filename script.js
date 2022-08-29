const btn = document.querySelectorAll('.item');
const scr = document.querySelector('.screen')

let operator ='';
let cal = '';
let num = [];
let execute = false;
let result = 0;

btn.forEach(btn => btn.addEventListener('click', ()=>{

    
    if(btn.textContent != "+" && btn.textContent != '-' && btn.textContent != '='
    && btn.textContent != '/' && btn.textContent != '*'){
        
        cal+=btn.textContent;
        scr.textContent = cal;
    }

    if (btn.textContent === "+"){
        
        if(execute === true){
            calculate();
        }
        operator = "+";
    }
    if (btn.textContent === "+"){
        
        
        execute = true;
        if(num.length === 0){
            num[0] = parseInt(cal); 
             
        }else{
            num[1] = parseInt(cal);
            
        } 
        cal='';
    }
    
    if (btn.textContent === "-"){
        
        if(execute === true){
            calculate();
        }
        operator = "-";
    }
    if (btn.textContent === "-"){

        execute = true;
        if(num.length === 0){
            num[0] = parseInt(cal); 
             
        }else{
            num[1] = parseInt(cal);
            
        } 
        cal='';
    }
    
    if (btn.textContent === "*"){
        
        if(execute === true){
            calculate();
        }
        operator = "*";
    }
    if (btn.textContent === "*"){

        execute = true;
        if(num.length === 0){
            num[0] = parseInt(cal); 
             
        }else{
            num[1] = parseInt(cal);
            
        } 
        cal='';
    }
    
    
    if (btn.textContent === "/"){
        
        if(execute === true){
            calculate();
        }
        operator = "/";
    }
    if (btn.textContent === "/"){

        execute = true;
        if(num.length === 0){
            num[0] = parseInt(cal); 
             
        }else{
            num[1] = parseInt(cal);
            
        } 
        cal='';
    }

    if (btn.textContent === "clear"){
        cal = "";
        scr.textContent = "0";
        result = 0;
        num = [];
    }
    if(btn.textContent === "delete"){
        cal 
    }
    
   // console.log(num);

}));

function calculate(){

    
    num[1] = parseInt(cal);
    
    console.log("cal: " +operator);
    if(cal == ""){
        return;
    }
    switch(operator){
        case "+":
                
                result = num.reduce((total, num) =>{
                return total + num;
              });
              
              scr.textContent = result;
              num[0]= result;
              
              break;
              
        case "-":
                result = num.reduce((total, num) =>{
                return total - num;
           });
           
           scr.textContent = result;
           num[0]= result;
           console.log(result);
           break;
           
        case "*":
            result = num.reduce((total, num) =>{
            return total * num;
       });
       
            scr.textContent = result;
            num[0]= result;
            console.log(result);
            break;
        case "/":
                
            result = num.reduce((total, num) =>{
            return total / num;
        });
              
            scr.textContent = result;
            num[0]= result;
            break;
              

    }
    execute = false;
    

}