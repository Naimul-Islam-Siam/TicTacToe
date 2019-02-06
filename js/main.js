var square = document.querySelectorAll(".square");
var turn = "X";
var message = document.querySelector(".message");
var gameover = false;
var gameDraw = false;
var resetBtn = document.querySelector(".resetBtn");
var scoreX = 0;
var scoreO = 0;
var scoreXdisplay = document.querySelector(".score-X");
var scoreOdisplay = document.querySelector(".score-O");
var winner = null;
var btnX = document.querySelector(".btn-X");
var btnO = document.querySelector(".btn-O");
var count = 0;

btnX.classList.add("border");

for(var i = 0; i < square.length; i++){
	square[i].addEventListener("click",function(){
		if(!gameover){
			if(this.textContent === ""){
				this.textContent = turn;
				count++;
				switchTurn(this);
			}
			else{
				if(count != 9)
					message.textContent = "Invalid. Try an empty box."
			}
		}

		else{
			if(count != 9)
				message.textContent = turn + " already won!";
		}
	});
}

function switchTurn(y){
	if(decision(turn, y)){
		gameover = true;
		winner = turn;
		if(winner == "X"){
			scoreX++;
			scoreXdisplay.textContent = scoreX;
		}

		if(winner == "O"){
			scoreO++;
			scoreOdisplay.textContent = scoreO;
		}
		message.textContent = "Congrats " + turn + " you're the winner !!";
	}

	else if(count === 9){
		gameDraw = true;
		message.textContent = "Match Draw!";
		btnX.classList.remove("border");
		btnO.classList.remove("border");
	}

	else if(turn === "X"){
		turn = "O";
		btnO.classList.add("border");
		btnX.classList.remove("border");
		y.style.color = '#545454';
		message.textContent = "It's " + turn + " 's turn.";
	}
	else{
		turn = "X";
		btnX.classList.add("border");
		btnO.classList.remove("border");
		y.style.color = '#fff';
		message.textContent = "It's " + turn + " 's turn.";
	}

	return turn;	
}

function decision(move, y){
	var result = false;
	if( check(1, 2, 3, move) ||
		check(4, 5, 6, move) ||
		check(7, 8, 9, move) ||
		check(1, 4, 7, move) ||
		check(2, 5, 8, move) ||
		check(3, 6, 9, move) ||
		check(1, 5, 9, move) ||
		check(3, 5, 7, move)){
			result = true;
	}
	if(turn === "X")
		y.style.color = '#545454';
	else if(turn === "O")
		y.style.color = '#fff';

	return result;
}

function check(a, b, c, move){
	var result = false;
	if(getValue(a) === move && getValue(b) === move && getValue(c) === move){
		result = true;
	}
	return result;
}

function getValue(number){
	return document.querySelector("#s" + number).textContent;
}

function clearBox(number){
	document.querySelector("#s" + number).textContent = "";
}

resetBtn.addEventListener("click", function(){
	for(var i = 1; i <= square.length; i++){
		clearBox(i);
	}
	message.textContent = "Start Again";
	gameover = false;
	gameDraw = false;
	winner = null;
	count = 0;
	turn = "X";
	btnX.classList.add("border");
	btnO.classList.remove("border"); 
});
