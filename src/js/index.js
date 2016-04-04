// Javascript Entry Point
import $ from 'jquery';
import _ from 'lodash';

import questions from './questionArray';
	
	// var imageOne = question.image; 
	// console.log(imageOne);

class Question {
	constructor (image, choice1, choice2, choice3, choice4, correct) {
		this.image = image;
		this.choice1 = choice1;
		this.choice2 = choice2;
		this.choice3 = choice3;
		this.choice4 = choice4;
		this.correct = correct;
	}
}


var turtle = new Question('http://icons.iconarchive.com/icons/fixicon/farm/256/turtle-icon.png', 'F', 'L', 'R', 'T', 'T');
	


function  firstQ(qParam) {
	var animalImage = qParam.image;
	return `<img src=${animalImage}>`;
}


$('.question_stage').html(firstQ(turtle));

function button1(q1) {
	var letter1 = q1.choice1;
	return `<li> <button> ${letter1} </button> </li>`;
}

$('.question_stage').append(button1(turtle));

function button2(q2) {
	var letter2 = q2.choice2;
	return `<li> <button> ${letter2} </button> </li>`;
}

$('.question_stage').append(button2(turtle));

function button3(q3) {
	var letter3 = q3.choice3;
	return `<li> <button> ${letter3} </button> </li>`;
}

$('.question_stage').append(button3(turtle));

function button4(q4) {
	var letter4 = q4.choice4;
	return `<li> <button> ${letter4} </button> </li>`;
}

$('.question_stage').append(button4(turtle));

function correctAns(answer) {


}


	//$('.question_stage').append();		

		// var labelArray = this.choices.map(function(choice)	{
		// 	return choice.label;

		// })

		// var buttons = labelArray.forEach(function(label) {
		// 	$('.question_stage').append(`<li> <button> ${label}</button></li>`);

		// })

