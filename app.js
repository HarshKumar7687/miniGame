score = 0;
cross = true;

audio = new Audio('game.mp3');
audioGameOver = new Audio('gameOver.mp3');
setTimeout(()=>{
    audio.play();
},1000)
document.onkeydown = function(e){
 if(e.keyCode==38){
    rabbit = document.querySelector('.rabbit');
    rabbit.classList.add('animateRabbit');
    setTimeout(()=>{
        rabbit.classList.remove('animateRabbit')
    },700);
 }
 if(e.keyCode==39){
    rabbit = document.querySelector('.rabbit');
    rabbitX = parseInt(window.getComputedStyle(rabbit, null).getPropertyValue('left'));
    rabbit.style.left = rabbitX + 112 + "px";
 }
 if(e.keyCode==37){
    rabbit = document.querySelector('.rabbit');
    rabbitX = parseInt(window.getComputedStyle(rabbit, null).getPropertyValue('left'));
    rabbit.style.left = (rabbitX - 112) + "px";
 }
}


setInterval(()=>{
    rabbit = document.querySelector('.rabbit');
    gameOver = document.querySelector('.gameOver');
    lion = document.querySelector('.lion');

    dx = parseInt(window.getComputedStyle(rabbit, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(rabbit, null).getPropertyValue('top'));

    
    ox = parseInt(window.getComputedStyle(lion, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(lion, null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);

    if(offsetX<113 && offsetY<52){
        gameOver.style.visibility = 'visible';
        lion.classList.remove('animateLion');
        audioGameOver.play();
        setTimeout(()=>{
            audioGameOver.pause();
            audio.pause();
        },1000)
    }else if(offsetX< 73 && cross){
        score = score+1;
        updateScore(score);
        cross = false;
        setTimeout(()=>{
            cross = true;
        },1000);

        setTimeout(()=>{  
        animationDuration = parseFloat(window.getComputedStyle(lion, null).getPropertyValue('animation-duration'));
        newDuration = animationDuration - 0.1;
        lion.style.animationDuration = newDuration + 's';
        },500);
    }
},10);

function updateScore(score){
    scoreCointainer.innerHTML = "Your Score : " + score;
}