
var d1 = Math.floor(Math.random() * 100 % 6) + 1;
document.querySelector("img.img_1").setAttribute("src", "images/dice" + d1 + ".png");

var d2 = Math.floor(Math.random() * 100 % 6) + 1;
document.querySelector("img.img_2").setAttribute("src", "images/dice" + d2 + ".png");

if (d1 > d2) {
    document.querySelector("h2.banner").innerHTML = "<img class ='emoji_hand' src='images/victory_hand.png' alt='emoji'>Player 1 Wins";
} else if (d1 < d2) {
    document.querySelector("h2.banner").innerHTML = "Player 2 Wins<img class ='emoji_hand' src='images/victory_hand.png' alt='emoji'>";
} else {
    document.querySelector("h2.banner").textContent = "DRAW";
}

const refreshButton = document.getElementById("refreshButton");
refreshButton.addEventListener("click", function () {
    location.reload();
});
