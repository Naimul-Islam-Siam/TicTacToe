var square = document.querySelectorAll(".square");
var turn = "X";
var message = document.querySelector(".message");
var gameover = false;
var resetBtn = document.querySelector(".resetBtn");

for(var i = 0; i < square.length; i++){
	square[i].addEventListener("click",function(){
		if(!gameover){
			if(this.textContent === ""){
				this.textContent = turn;
				switchTurn(this);
			}
			else{
				message.textContent = "Invalid. Try an empty square."
			}
		}

		else{
			message.textContent = turn + " already won!";
		}
	});
}

function switchTurn(y){
	if(decision(turn, y)){
		gameover = true;
		message.textContent = "Congrats " + turn + " you're the winner !!";
	}
	else if(turn === "X"){
		turn = "O";
		y.style.color = '#545454';
		message.textContent = "It's " + turn + " 's turn.";
	}
	else{
		turn = "X";
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
	turn = "X"; 
});
