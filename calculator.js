
let screen=document.getElementById('name');
let a=document.querySelectorAll('button');
//ek simple variable h 
let screentext='';
//for loop jo h her button pe iterate krega  and her ek item pe click eventlistener add krega .e jo h object h event ka
// e.target means button.
for (item of a) {
    item.addEventListener('click', (e) =>{
       let  atext=e.target.innerText;
        console.log(atext);
       if(atext == 'X')
       {
           atext = '*';
           screentext+=atext;
           //screen.value means screen ke value 
           screen.value=screentext;
           

       }
       else if(atext=='C'){
           screentext="";
           screen.value=screentext;


       }
       else if(atext=='='){
        //eval function jo h calculate krega screen pe jo value h osse and fir screen.value me assign krega.
           screen.value=eval(screentext);
         
       }
       else{
        screentext+=atext;
        screen.value=screentext;
       }
       
      
    })
    
}