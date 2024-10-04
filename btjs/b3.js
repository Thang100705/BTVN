// Hàm để bắt đầu trò chơi đoán số
function startGuessing() {
    const randomNumber = Math.floor(Math.random() * 10) + 1; // Số ngẫu nhiên từ 1 đến 10
    let userGuess = 0;
    let resultElement = document.getElementById("result");

    // Lặp lại cho đến khi người dùng đoán đúng
    while (userGuess != randomNumber || userGuess ==randomNumber) {
        userGuess = parseInt(prompt("1-10 thích số nào thì nhập: "), 10);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
            alert("Mắt bị điếc à?");
        } else if (userGuess !== randomNumber) {
            alert("T cài tỷ lệ đoán đúng là 0% rồi đoán bằng mắt");
        }else{
            alert("M đoán đúng nma t bảo méo")
        }
    }

    // alert("Chúc mừng! Bạn đã đoán đúng số " + randomNumber);
    // resultElement.innerText = "Chúc mừng! Bạn đã đoán đúng số " + randomNumber;
}

// Gọi hàm bắt đầu khi trang được tải
startGuessing();
