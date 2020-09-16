let leftpo=100;
let toppo=10;
let turndeg = 0;


setInterval(function moving()  {
    
    window.onkeydown = function move (action){

        if(action.keyCode == 39){         
            leftpo = leftpo + 1;
            document.getElementById("plane").style.left = leftpo+"px";
            console.log("saga basildi");         
        }
        else if(action.keyCode==37){   
            leftpo = leftpo - 1;
            document.getElementById("plane").style.left = leftpo+"px";
            console.log("sola basildi");
           
        }
        else if(action.keyCode==38){
            turndeg = turndeg - 10;
            //document.getElementById("plane").style.transform.rotate = leftpo+"deg";
            console.log("yukari basildi");
            document.documentElement.style.cssText = "--turndeg:"+turndeg+"deg";   
            toppo = toppo - 1;
            document.getElementById("plane").style.top = toppo+"px";
        }
    
        else if(action.keyCode==40){
            turndeg = turndeg + 10;
            //document.getElementById("plane").style.transform.rotate = leftpo+"deg";
            console.log("yukari basildi");
            document.documentElement.style.cssText = "--turndeg:"+turndeg+"deg";    
            toppo = toppo + 1;
            document.getElementById("plane").style.top = toppo+"px";
        }
    
    };

}, 10);



