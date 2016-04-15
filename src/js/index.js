// Javascript Entry Point
import $ from 'jquery';
import _ from 'lodash';
import animals from './questionArray';
	
	// var imageOne = question.image; 
	// console.log(imageOne);
// () 

class Question {

	constructor (image, choice1, choice2, choice3, choice4, correct) {
		// this.animals = animals;
		this.image = animals.image;
		this.choice = animals.choice;
		this.choice2 = animals.choice2;
		this.choice3 = animals.choice3;
		this.choice4 = animals.choice4;
		this.correct = animals.correct;

		console.log(animals);
	}
	

}
 	

function stage(qParam) {

//	var animalImage = qParam.image;
	var letter =qParam.choice;
	var letter2 = qParam.choice2;
	var letter3 = qParam.choice3;
	var letter4 = qParam.choice4;

	 // <img src=${animalImage}>
	return `
	<div>

	  <ul>
		<li> <button> ${letter} </button> </li>
		<li> <button> ${letter2} </button> </li>
		<li> <button> ${letter3} </button> </li>
		<li> <button> ${letter4} </button> </li>
	  </ul>	
	</div>`
	}
	
 $('.question_stage').append(stage());
// var turtle = new Question(animals[0]);
// console.log(animalArray);
// var animalQuestions = new Question([animals]);
// console.log(animalQuestions);
// var turtle = new Question('http://icons.iconarchive.com/icons/fixicon/farm/256/turtle-icon.png', 'F', 'L', 'R', 'T', 'T');


// $('.question_stage').append(stage(turtle));









/////////////////////////////////////
// $('.question_stage').on('click',function correctAns(guess) {
// 	var answer = guess.correct;
// 	//console.log(answer);

// 	if ( answer === 'T') {
// 		alert('Great job!');
// 	} else {
// 		alert('Wrong answer!  Try again.');
// 	}
// });

