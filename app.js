let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let turnO = true;
let audioElement = new Audio('1.mp3');
let newGameBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-Container")
let msg = document.querySelector("#massage")
let count = 0;
let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]

];
const reset = () => {
    turnO = true
    msgContainer.classList.add("hide");
    audioElement.pause();
    enableBoxes()
    count = 0;
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("clicked")
        count += 1;
        if (turnO) {
            box.innerText = ("O");
            turnO = false;
        }
        else {
            box.innerText = ("X");
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i].innerText === "O") {
                boxes[i].style.color = 'green'
            }
            else {
                boxes[i].style.color = 'red'
            }
        }
        console.log(count)
        if (count === 9 ) {
            msg.innerText = `Draw`
            msgContainer.classList.remove("hide");
            
        }
    })
})

const enableBoxes = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
}
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBoxes();
    audioElement.play();
}
const checkWinner = () => {
    for (pattern of winPatterns) {

        let pos1 = boxes[pattern[0]].innerText
        let pos2 = boxes[pattern[1]].innerText
        let pos3 = boxes[pattern[2]].innerText
        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                // console.log(`Winner is ${pos1}`);
                showWinner(pos1);
            }
        }
    }
}
for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].innerText === "O") {
        boxes[i].style.color = 'green'
    }
    else {
        boxes[i].style.color = 'green'
    }
}
newGameBtn.addEventListener("click", reset);
resetBtn.addEventListener("click", reset)