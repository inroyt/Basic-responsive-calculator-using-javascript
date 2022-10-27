                   /* A CALCULATOR */

const keys = document.querySelector(".grid-container");
const numr=[];
keys.addEventListener("click", e => {
 if (e.target.matches("#item1")) { 
    const key = e.target;
    const keyContent = key.textContent;
    numr.push(keyContent);
    let  screen="",result="";
    let symbol=[];
    let flag=0,y=0,z=0; 
    let display="";
    let arr=[],sym=[];
    let a=0;
    let s_text="",r_text="";
    if(keyContent=="<"){                                    //to delete last input
        numr.pop();numr.length-=1;
        if(numr.length==0){
        document.getElementById("screen").innerHTML="0";
        document.getElementById("result").innerHTML="0";}}
    for(let i in numr){  
     if(numr[i]=="."){y++;}                                           
     if(y>1){numr.pop();y=0;}                                             //to prevent "." from occuring more than once
     if((numr[0]=="/")||(numr[0]=="x")||(numr[0]=="=")){numr.pop();}
     if(isNaN(numr[i])){ flag=1;
        if(numr[i]=="C"){                                             //for clearing all inputs and result
            document.getElementById("screen").innerHTML="0";
            document.getElementById("result").innerHTML="0";
            numr.length=0;
            break;
            }
         if(numr[0]=="<"){numr.pop();}
         a++;
         sym.push(numr[i]);
         if(a>0){                                                    //to update last entered symbol ("+","-" etc.)
                arr.push(sym.pop());
                if(a>1){
                    arr.splice(arr.length-2,1);                         
                }
            }
        if(numr[i]=="x"){symbol.push("*");z=1;}
         else{symbol.push(numr[i]);z=0;}
      }
     else{
      if(flag==1){screen+=symbol.pop();}                         
      screen+=numr[i];flag=0;
      arr.push(numr[i]);a=0;
     }
     display=arr.join("");
     s_text=display;
     result=eval(screen);
     r_text=result.toLocaleString();
     if((isNaN(result))){result="0";}
     document.getElementById("result").innerHTML=r_text;
     document.getElementById("screen").innerHTML=s_text;
}
if(keyContent=="="){                                                       //to display calculation history
    numr.pop();
    document.querySelector(".history").style.width = "220px";
    const history=document.querySelector(".history");
    const list=document.createElement("li");
    list.classList.add("list");
    list.style.paddingLeft="10px";
    list.style.font="1.2em calibri";
    list.style.color="blue";
    list.textContent=`${s_text}${r_text}`;
    history.appendChild(list);
}
}})
document.getElementById("cls").onclick=function(){
    document.querySelector(".history").style.width = "0";
}
document.getElementById("clearH").onclick=function(){
    const list=document.body.querySelector(".list")
    const history=document.querySelector(".history");
    history.removeChild(list); 
}
