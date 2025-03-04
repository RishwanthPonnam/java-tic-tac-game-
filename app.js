document.addEventListener("DOMContentLoaded", () => { 
    let boxes = document.querySelectorAll(".box");
    let reset = document.querySelector(".reset-btn");
    let turnO = true; // true -> 'O', false -> 'X'
    let gameOver = false;

    const winPatterns = [
        [0,1,2], [0,3,6], [0,4,8], 
        [1,4,7], [2,5,8], [2,4,6], 
        [3,4,5], [6,7,8]
    ];

    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            if (box.innerText === "" && !gameOver) {  // Prevent overwriting
                box.innerText = turnO ? "O" : "X"; 
                turnO = !turnO; // Switch turns
                checkWinner();
            }
        });
    });

    // Function to check the winner
    const checkWinner = () => {
        for (let pattern of winPatterns) {
            let [a, b, c] = pattern;
            if (boxes[a].innerText !== "" &&
                boxes[a].innerText === boxes[b].innerText &&
                boxes[b].innerText === boxes[c].innerText) {
                
                gameOver = true;
                alert(`🎉 Player ${boxes[a].innerText} Wins!`);
                return;
            }
        }

        // Check if it's a draw
        if ([...boxes].every(box => box.innerText !== "")) {
            alert("It's a draw! 🤝");
            gameOver = true;
        }
    };

    // Reset the game
    reset.addEventListener("click", () => {
        boxes.forEach(box => box.innerText = "");
        turnO = true;
        gameOver = false;
    });
});
