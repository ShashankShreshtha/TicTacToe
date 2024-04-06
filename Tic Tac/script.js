console.log("Welcome to Tic-Tac-toe")
let chance=new Audio("chance.mp3")
let gameOver = new Audio("win.mp3")
let turn = "X";
let isGameOver = false;

//Function to change the turn
const changeTurn = ()=>{
        return turn === "X"?"0": "X"
}

//Function to change 
const CheckWin = () =>{
    let boxtext=document.getElementsByClassName('boxtext');
        let wins=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]
        wins.forEach(e =>{
            if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)  && (boxtext[e[2]].innerText === boxtext[e[1]].innerText)  && (boxtext[e[0]].innerText !=="" )){
                document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won."
                isGameOver=true
                gameOver.play();
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "100vw"
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.height = "100vh"
            }
        })
}

//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            chance.play();
           turn =  changeTurn();
           CheckWin();
            if(!isGameOver){
            document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
        }
    }
    })
})

//adding on click listener to reset button

reset.addEventListener('click',()=>{
    let boxtexts= document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
    });
    turn="X";
    isGameOver=false
    document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0vw"
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.height = "0vh"
})