const btn = document.querySelectorAll('.item');
const scr = document.querySelector('.screen')
var result = 0;
let resultS = '';
var counter = 0;
btn.forEach(btn => btn.addEventListener('click', ()=>{
    
   let hello = btn.textContent;
    
    if (hello != "="){
        
    resultS+=hello;
    scr.textContent = resultS;
    }
    
    if(hello === "=" ){

        calculate(resultS);

    }
    if(hello === "-" ){

        sub(resultS);

    }
    if(hello === '+'){
        
       add(resultS);
    }
    if(hello ==="clear"){
        resultS='';
        result=0;
        scr.textContent = result;
    }
    
}
));

var executed = false;
function add(str){
    if (executed === true){
        
          var b = str.split('+').map(Number);
          for(i in b){
            result+=b[i];
            
          }
          console.log(result);
          result = 0;
          console.log(b);
        executed = false;
    }
    
    executed = true;
  }
function sub(str){

    if (executed === true){
        
        var b = str.split('-').map(Number);
            let help = b.reduce((total,num)=>{
                return total -num;
            });
            
       console.log(help);
       result = 0;
       console.log(b);
      executed = false;
        }
        executed = true;
    }
  

  

  

function calculate(str){
    var b = str.split('+').map(Number);
    for(i in b){
      result+=b[i];
      
    }
    
    scr.textContent = result;
    result = 0;
}