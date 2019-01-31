const result : HTMLDivElement = document.querySelector('.result');
let computerCoordinate : string = '0';
const computer : HTMLDivElement = document.querySelector("#computer")
const btns = Array.from(document.querySelectorAll('.btn'));

interface RSP{
    paper : string,
    scissors : string,
    rock : string
}

const rockScissorsPaper : RSP = {
    paper : '-150px',
    scissors : '-300px',
    rock : '0px'
};

const computerChoice = (computerCoordinate) => {
    return Object.entries(rockScissorsPaper).find((v) => {
        return v[1] === computerCoordinate
    })[0];
};

let timer : number;

let intervalMaker = () : void =>  {
    timer = setInterval(() => {
        if(computerCoordinate === rockScissorsPaper.rock){
            computerCoordinate = rockScissorsPaper.paper
        } else if (computerCoordinate === rockScissorsPaper.paper){
            computerCoordinate = rockScissorsPaper.scissors
        } else {
            computerCoordinate = rockScissorsPaper.rock;
        }
        computer.style.background =
            'url(paper.jpg) ' + computerCoordinate + ' 0';
    }, 100);
}

intervalMaker();

interface SCO{
    scissors : number,
    rock : number,
    paper : number
}

const score : SCO = {
    scissors : 1,
    rock : 0,
    paper : -1
};

btns.forEach((btn) => {
    btn.addEventListener('click', function(){
        clearInterval(timer);
        setTimeout(() => {
            intervalMaker();
        }, 1000);

        let myChoice : string = this.textContent;
        let myScore : number = score[myChoice];
        let computerScore : number = score[computerChoice(computerCoordinate)];
        let scoreResult : number = myScore - computerScore;

        if(scoreResult === 0){
            result.textContent = '비겼습니다.'
        } else if([-1,2].includes(scoreResult)){
            result.textContent = '이겼습니다.'
        } else {
            result.textContent = '졌습니다.'
        }
    });
});




