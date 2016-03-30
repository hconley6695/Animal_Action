// Javascript Entry Point
import $ from 'jquery';
import _ from 'lodash';

import questions from './questionArray';

class Questions {
	constructor (questions) {
		this.question = questions;
		console.log(this.question);
		this.choices = questions.choices_for_answer;
		this.label = choices.label;
		this.correct = choices.rightOrWrong;
	}
	eachQuestion(questionParam) {

		var imageOne = questionParam.image[0];
		console.log(imageOne);
		var labelArray = this.choices.map(function(choice)	{
			return choice.label;

		})

		var buttons = labelArray.forEach(function(label) {
			$('.question_stage').append(`<li> <button> ${label}</button></li>`);

		})

	}


}
