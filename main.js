let leftpo=200;
let toppo=50;
let turndeg =0;

let rightfunction;
let leftfunction;
let upfunction;
let downfunction;


let timinga = 0;
let timingb = 0;
let timingc = 0;
let timingd = 0;


let lastClick = 0;
let delay = 20;

let planePo = document.getElementById("plane").getBoundingClientRect();
planex = planePo.left;
planey = planePo.top;
console.log(planex, planey);

let tank = document.getElementById("tank1")
let bomb = document.getElementById("bomb")
let twingo = document.getElementById("twingo")
let tankleft = tank.getBoundingClientRect().left
let tanktop = tank.getBoundingClientRect().top
let bombleft = bomb.getBoundingClientRect().left
let bombtop = bomb.getBoundingClientRect().top
let twingoleft = twingo.getBoundingClientRect().left
let twingotop = twingo.getBoundingClientRect().top

let fire = document.getElementById("fire")

let score = 0;

//  function start(){    
//      setInterval(function(){
//          tankspeed = Math.ceil(Math.random()*5)+10;
//          document.documentElement.style.cssText = "--tankspeed:"+tankspeed+"s";
//          console.log(tankspeed);
//      },3000)
//  }

function start (){
    
    let tank = document.getElementById("tank1")
    let bomb = document.getElementById("bomb")

    setInterval(function position(){

        let tankleft = tank.getBoundingClientRect().left
        let tanktop = tank.getBoundingClientRect().top
        let bombleft = bomb.getBoundingClientRect().left
        let bombtop = bomb.getBoundingClientRect().top
        let twingoleft = twingo.getBoundingClientRect().left
        let twingotop = twingo.getBoundingClientRect().top

        if(tankleft - bombleft <= 80 && bombleft - tankleft <=80 && tanktop - bombtop <=50 &&bombtop - tanktop<=50 ){
        console.log("helal bee");
        fire.style.opacity = "1"
        document.getElementById("shoot").style.display ="inline"
        score = score + 0.5;
        document.getElementById("score").innerHTML = score;


            setTimeout(function(){
                fire.style.opacity = "0"
                document.getElementById("shoot").style.display ="none"

            },2000)

        }

        else if(twingoleft - bombleft <= 50 && bombleft - twingoleft <=50 && twingotop - bombtop <=50 &&bombtop - twingotop<=50 ){
            console.log("CONNAARRRRDDD !!!")
            document.getElementById("warning").style.display = "inline";
            fire1.style.opacity = "1"

            setTimeout(function(){
                fire1.style.opacity = "0"
                document.location.reload(true);
            },3000)

        }

       

    },100);

    

    console.log("tank left : ",tankleft);

    console.log("tank top : ",tanktop);

    console.log("bomb left : ",bombleft);

    console.log("bomb top : ",bombtop);

    console.log("twingo left : ",twingoleft);

    console.log("twingo top : ",twingotop);


    //if(tank.getBoundingClientRect().left )


    let topbomb = document.getElementById("bomb").style.top;

    console.log(document.getElementById("bomb").style.top);
}

//bomb.style.left = planePo.left + "px";
//bomb.style.top = planePo.top + "px";
//console.log("last", lastClick);
//console.log("last", lastClick-delay);




window.onkeydown = function move (action){

    if(action.keyCode == 39){
        
        //console.log("saga basildi");
        

        
        if(timinga <= 1){
            rightfunction =  setInterval(function(){
                
                //jai supprimé nom de fonction "moveright"
    
                    timinga = timinga + 1;
                    //console.log("RIGHT WORKING", timinga);
    
                    if(timinga < 100 ){
                        leftpo = leftpo + 1;
                        document.getElementById("plane").style.left = leftpo+"px";     
                    }
    
                    else{
                        clearInterval(rightfunction);
                        timinga = 0;        
                    }
                     
            }, 10); 
        }
           
        

            
    }
    else if(action.keyCode==37){

        //console.log("sola basildi");


        if(timingb<=1){
            leftfunction = setInterval(function(){
                timingb = timingb + 1;
                //console.log("LEFT WORKING", timingb);

                if(timingb < 100){
                    leftpo = leftpo - 1;
                    document.getElementById("plane").style.left = leftpo+"px";
                }

                else{
                    clearInterval(leftfunction);
                    timingb = 0;
                }
            
            }, 10);
        }      
    }
    else if(action.keyCode==38){

        //console.log("yukari basildi");   
        
        if(turndeg >= -10){
            turndeg = turndeg - 10;
            document.documentElement.style.cssText = "--turndeg:"+turndeg+"deg"; 
        //document.getElementById("plane").documentElement.style.cssText = "--turndeg:"+turndeg+"deg"; 
        }

        
        

        if(timingc<=1){

        upfunction = setInterval(function(){
            timingc = timingc + 1;
            //console.log("UP WORKING", timingc);

            

                if(timingc < 100){
                    toppo = toppo - 1;
                    document.getElementById("plane").style.top = toppo+"px";
                }
                
                else{
                turndeg = 0;  
                document.documentElement.style.cssText = "--turndeg:"+turndeg+"deg";
                clearInterval(upfunction);
                timingc = 0;
                
                }; 
        }, 10);

    }


    }
    else if(action.keyCode==40){

        //console.log("asagi basildi"); 
        
        if(turndeg <= 10){
            turndeg = turndeg + 10;
            document.documentElement.style.cssText = "--turndeg:"+turndeg+"deg"; 
        }

           

        
        if(timingd<=1){
            
            downfunction = setInterval(function(){
                timingd = timingd + 1;
                //console.log("DOWN WORKING", timingd);

                if(timingd <=100){
                    toppo = toppo + 1;
                    document.getElementById("plane").style.top = toppo+"px";
                }

                else{
                    turndeg = 0;
                    document.documentElement.style.cssText = "--turndeg:"+turndeg+"deg";    
                    timingd = 0;
                    clearInterval(downfunction);
                }
  
    
            }, 10);

        }
    }
    else if (action.keyCode== 17){
        //console.log("space basildi");
        //const bomb = document.createElement("div");
        //let planePo = document.getElementById("plane").getBoundingClientRect();
        //planex = planePo.left;
        //planey = planePo.top;
        //console.log(planex,planey);
        //bomb.id = "bomba" 
        //document.body.appendChild(bomb);
        //bomb.style.left = planePo.left + "px";
        //bomb.style.top = planePo.top + "px";

        

        if(document.getElementById("bomb").classList != "animation"){
            document.getElementById("bomb").classList.add("animation");


        }
        else{
            document.getElementById("bomb").classList.remove("animation");
        }   
        
        
        console.log("tank left : ",tankleft);

        console.log("tank top : ",tanktop);

        console.log("bomb left : ",bombleft);

        console.log("bomb top : ",bombtop);



    } 
}


