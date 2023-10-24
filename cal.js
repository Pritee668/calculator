let inp=document.querySelector(".input");
let obrac=document.querySelector(".obrac");
let cbrac=document.querySelector(".cbrac");
let ans=document.querySelector(".ans");
let del=document.querySelector(".del");
let clear=document.querySelector(".clear");
let seven=document.querySelector(".seven");
let eight=document.querySelector(".eight");
let nine=document.querySelector(".nine");
let mod=document.querySelector(".mod");
let root=document.querySelector(".root");
let four=document.querySelector(".four");
let five=document.querySelector(".five");
let six=document.querySelector(".six");
let mul=document.querySelector(".mul");
let divide=document.querySelector(".divide");
let one=document.querySelector(".one");
let two=document.querySelector(".two");
let three=document.querySelector(".three");
let plus=document.querySelector(".plus");
let minus=document.querySelector(".minus");
let dot=document.querySelector(".dot");
let zero=document.querySelector(".zero");
let plusMinus=document.querySelector(".plusMinus");
let enter=document.querySelector(".enter");
del.addEventListener("click",function(){
    inp.textContent=inp.textContent.toString().slice(0,-1);
});
clear.addEventListener("click",function(){
    inp.textContent='';
})
obrac.addEventListener("click",function(value){
    inp.textContent+=obrac.innerText;
   
    
   
});
cbrac.addEventListener("click",function(){
    inp.textContent+=cbrac.innerText;
   
    
});
seven.addEventListener("click",function(){
    inp.textContent+=seven.innerText;
    
});
eight.addEventListener("click",function(){
    inp.textContent+=eight.innerText;
   
});
nine.addEventListener("click",function(){
    inp.textContent+=nine.innerText;
   
});
mod.addEventListener("click",function(){
    inp.textContent+=mod.innerText;
    
});
root.addEventListener("click",function(){
    inp.textContent+=root.innerText;
    
});
four.addEventListener("click",function(){
    inp.textContent+=four.innerText;
   
});
five.addEventListener("click",function(){
    inp.textContent+=five.innerText;
    
});
six.addEventListener("click",function(){
    inp.textContent+=six.innerText;
   
});
mul.addEventListener("click",function(){
    inp.textContent+=mul.innerText;
   
});
divide.addEventListener("click",function(){
    inp.textContent=divide.innerText;
   
});
one.addEventListener("click",function(){
    inp.textContent+=one.innerText;
   
});
two.addEventListener("click",function(){
    inp.innerText+=two.innerText;
   
});
three.addEventListener("click",function(){
    inp.textContent+=three.innerText;
   
});
plus.addEventListener("click",function(){
    inp.textContent+=plus.innerText;
    
});
minus.addEventListener("click",function(){
    inp.textContent+=minus.innerText;
   
});
dot.addEventListener("click",function(){
    inp.textContent=dot.innerText;
   
});
zero.addEventListener("click",function(){
    inp.textContent+=zero.innerText;
    
});
plusMinus.addEventListener("click",function(){
    inp.textContent=plusMinus.innerText;
   
});
enter.addEventListener("click",function(){
    inp.textContent=eval((inp.textContent));
    
});





