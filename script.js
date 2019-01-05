const result = document.querySelector('.result');
let computerCoordinate = '0';
const rockScissorsPaper = {
    paper : '-150px',
    scissors : '-300px',
    rock : '0px'
}

const computerChoice = (computerCoordinate) => {
    return Object.entries(rockScissorsPaper).find((v) => {
        return v[1] === computerCoordinate
    })[0];
}
    
const rockScissorsPaper2 = {
    '-150px' : 'paper',
    '-300px' : 'scissors',
    '0px' : 'rock'
}

let timer;

let intervalMaker = () => {
    timer = setInterval(() => {
        if(computerCoordinate === rockScissorsPaper.rock){
            computerCoordinate = rockScissorsPaper.paper
        } else if (computerCoordinate === rockScissorsPaper.paper){
            computerCoordinate = rockScissorsPaper.scissors
        } else {
            computerCoordinate = rockScissorsPaper.rock;
        }
        document.querySelector("#computer").style.background = 
        'url(paper.jpg) ' + computerCoordinate + ' 0';
    }, 100);
}

intervalMaker();

const score = {
    scissors : 1,
    rock : 0,
    paper : -1
}

document.querySelectorAll('.btn').forEach(function(btn){
    btn.addEventListener('click', function(){
        clearInterval(timer)
        setTimeout(() => {
            intervalMaker();
        }, 1000)
        
        let myChoice = this.textContent;
        let myScore = score[myChoice];
        let computerScore = score[computerChoice(computerCoordinate)];
        let scoreResult = myScore - computerScore;
    
        if(scoreResult === 0){
            result.textContent = '비겼습니다.'
        } else if([-1,2].includes(scoreResult)){
            result.textContent = '이겼습니다.'
        } else {
            result.textContent = '졌습니다.'
        }
    });
});




