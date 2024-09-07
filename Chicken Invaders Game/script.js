var chicken = document.querySelector('.chicken');
var noOfChickens=64;

for(var x=0;x<noOfChickens;x++){
    
    var newchicken = document.createElement('img');
    chicken.append(newchicken);
    newchicken.setAttribute('src','Images/Images/Chicken.png');
}


var rocket=document.querySelector('.rocket');
rocket.innerHTML='<img src="Images/Images/Rocket.png" />';

var positionY=0
var positionX=0
var windowwidth=window.screen.availWidth;
var windowheight=window.screen.availHeight;

window.addEventListener('keydown',function(e){
    if(e.code==='ArrowUp'){
        positionY+=10
        if(positionY<=windowheight-200){
            rocket.style.bottom=positionY+'px';
        }
        else{
            positionY=10;
            rocket.style.bottom=positionY;
        }
    }else if(e.code==='ArrowDown'){
        positionY -=10
        if(positionY>=10){
            rocket.style.bottom=positionY+'px';
        }
        else{
            positionY=10;
            rocket.style.bottom=positionY+'px';
        }
    }else if(e.code==='ArrowLeft'){
        positionX+=10
        if(positionX<=windowwidth-200){
            rocket.style.right=positionX+'px';
        }
        else{
            positionX=10;
            rocket.style.right=positionX+'px';
        }
        
    }else if(e.code==='ArrowRight'){
        positionX-=10
        if(positionX>=10){
            rocket.style.right=positionX+'px';
        }
        else{
            positionX=10;
            rocket.style.right=positionX+'px';
        }
        
    }
})

var bullet = document.querySelector('.bullet')

var newbullet=document.createElement('img');
    bullet.append(newbullet);
    newbullet.setAttribute('src','Images/Images/Bullet.png')

rocket.onclick=function(e){
    var newbullet=document.createElement('img');
    bullet.append(newbullet);
    newbullet.setAttribute('src','Images/Images/Bullet.png') 
    setInterval(() => {
        var height=0;
        height+=5;
        newbullet.style.bottom=height+'px';
    }, 1000);
}


