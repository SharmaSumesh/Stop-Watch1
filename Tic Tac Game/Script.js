console.log("tic tac");
let turn  = "X";
let gameover = false;
//function change to turn
changeTurn= ()=>{
    return turn==="X"?"0":"X"
}
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName(".boxtext");
    let win = [[0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8,]]
    win.forEach(e=>{
        if((boxtext[e[0]].innerText ===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!==innerText!==""))
        {
            document.getElementsByClassName('.info').innerText = boxtext[e[0]].innerText+ "win";
            gameover = true;
     
            
        }

    })
};

//Main logic for Game
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',(e)=>{
        if(boxtext.innerText==='')
        {
            boxtext.innerText = turn;
           turn =  changeTurn();
            checkWin();
           if(!gameover)
            {
                document.getElementsByClassName("info")[0].innerText = "Turn for" +  turn;
            }
        }
    })
})