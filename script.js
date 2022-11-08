let divek = document.querySelectorAll('.mole');
let score = 0;
let scoreCounter = document.querySelector('.points');

function pressedToNewTarget(e){
    let mole = e.target;
    mole.classList.toggle('selected');
    score++;
    scoreCounter.innerHTML = 'Score: ' + score;
    mole.removeEventListener('click', pressedToNewTarget);
    newTarget();
}

function newTarget(){
    let r = Math.floor((divek.length-1)*Math.random());
    divek[r].classList.toggle('selected');
    divek[r].addEventListener('click', pressedToNewTarget)
}

newTarget();