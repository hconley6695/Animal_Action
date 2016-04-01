// Javascript Entry Point
import $ from 'jquery';
import _ from 'lodash';

import questions from './questionArray';
	
	// var imageOne = question.image; 
	// console.log(imageOne);

class Question {
	constructor (question) {
		// this.question = question;
		this.image = question.image;
		// this.choices = questions.choices_for_answer;
		// this.label = choices.label;
		// this.correct = choices.rightOrWrong;
	}
	eachQuestion(qParam) {

		var animalImage = this.image;
		('.question_stage').append(`<img src=${animalImage}>`);


		//var imageOne = questionParam.questions[0].image;

		// var labelArray = this.choices.map(function(choice)	{
		// 	return choice.label;

		// })

		// var buttons = labelArray.forEach(function(label) {
		// 	$('.question_stage').append(`<li> <button> ${label}</button></li>`);

		// })

	}


}

console.log(questions);

var createQ = function(data){
	var thingy = new Question(data);
};

var questArray = _.forEach(questions, createQ);
console.log(questArray);

// var qs = new Question (questions);

// console.log(qs);