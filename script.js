let boxes = document.querySelectorAll(".box");
let msg = document.querySelector("#msg");
let msgContainer =  document.querySelector(".msg-container");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newGame");

let oScore  =0;
let xScore =0;
let oScorepara = document.querySelector("#o-score");
let xScorepara = document.querySelector("#x-score");


let turnO =true;   //playerO : playerX
let count =0;

const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
      
        if(turnO===true){
            box.innerText="O";
            turnO=false;
            count++;
           }
          else{
            box.innerText="X";
            box.style.color="#3d2b1f";
            turnO=true; 
        count++; }

          box.disabled = true;
            checkWinner();
            draw();
            
    });
});


const checkWinner =() =>{
 for(pattern of winPattern){
    let posVal1= boxes[pattern[0]].innerText;
    let posVal2= boxes[pattern[1]].innerText;
    let posVal3= boxes[pattern[2]].innerText;

   
    if(posVal1 !=="" && posVal2 !=="" &&  posVal3 !==""){
        if(posVal1 == posVal2 && posVal2==posVal3){
            showWinner(posVal1);
        }
        }
 }
};


const showWinner =(winner) =>{
   

 if(winner==="O"){
  oScore++;
  oScorepara.innerText =oScore;
  msg.innerText=`congratulation winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
 }

 else{
  xScore++;
  xScorepara.innerText =xScore;
  msg.innerText=`congratulation winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
 }
 

}


const disableBoxes=()=>{
    for(box of boxes){
        box.disabled = true;
    }
  }


  
const resetGame =()=>{
  count =0;
  oScore =0;
  xScore=0;
  oScorepara.innerText =oScore;
  xScorepara.innerText =xScore;
  turnO=true;
   enableBoxes();
   msgContainer.classList.add("hide");
  }


  const newGame =()=>{
    count = 0;
    turnO=true;
    enableBoxes();
   msgContainer.classList.add("hide");

  }

  const enableBoxes=()=>{
    for(box of boxes){
        box.disabled = false;
     box.innerText="";
    }}





  const draw =()=>{  
  if(count===9){
    msg.innerText="draw game";
    msgContainer.classList.remove("hide");
    disableBoxes();
  }
    
  

    
    }
    newGameBtn.addEventListener("click",newGame);
    resetBtn.addEventListener("click",resetGame);    

