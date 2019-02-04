var square = document.querySelectorAll(".square");
var turn = "X";
var message = document.querySelector(".message");

for(var i = 0; i < square.length; i++){
	square[i].addEventListener("click",function(){
		if(this.textContent === ""){
			this.textContent = turn;
			switchTurn();
		}
		else{
			message.textContent = "Invalid. Try an empty square."
		}
	});
}

function switchTurn(){
	if(decision(turn)){
		message.textContent = "Congrats " + turn + " you're the winner !!";
	}
	else if(turn === "X"){
		turn = "O";
		message.textContent = "It's " + turn + " 's turn.";
	}
	else{
		turn = "X";
		message.textContent = "It's " + turn + " 's turn.";
	}
	
	return turn;	
}

function decision(move){
	var result = false;
	if(check(1, 2, 3, move) ||
		check(4, 5, 6, move) ||
		check(7, 8, 9, move) ||
		check(1, 4, 7, move) ||
		check(2, 5, 8, move) ||
		check(3, 6, 9, move) ||
		check(1, 5, 9, move) ||
		check(3, 5, 7, move)){
			result = true;
	}
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


