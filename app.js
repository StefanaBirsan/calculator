let display=document.querySelector('.display');
let buttons=Array.from(document.querySelectorAll('button'));

buttons.map(button =>{
    button.addEventListener('click', (e)=>{
        switch(e.target.innerText){
            case'C':
            display.innerText=" ";
            break;
            case '←':
                if(display.innerText){
                    display.innerText=display.innerText.slice(0, -1);
                }
                break;
                case '=':
                    try{
                        display.innerText=eval(display.innerText);
                    }
                    catch{
                        display.innerText="Error!";
                    }
                    break;
                    default: display.innerText+= e.target.innerText;

        }
    });
    
});
//Do not use eval on projects with real users. The code can be modified in the browser and the eval will run that code.
