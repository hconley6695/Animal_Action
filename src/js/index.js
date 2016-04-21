// Javascript Entry Point
import $ from 'jquery';
import _ from 'lodash';
//import animals from './questionArray';
	
	// var imageOne = question.image; 
	// console.log(imageOne);
// () 

class Animal {

	constructor (image, choice, choice2, choice3, choice4, correct) {
		// this.animals = animals;
		this.image   = image;
		this.choice  = choice;
		this.choice2 = choice2;
		this.choice3 = choice3;
		this.choice4 = choice4;
		this.correct = correct;

	}
}
 	
var turtle = new Animal ('http://icons.iconarchive.com/icons/fixicon/farm/256/turtle-icon.png','F', 'L', 'R','T','T'); 
var elephant = new Animal ('http://cliparts.co/cliparts/rcL/xM8/rcLxM8ypi.png', 'E', 'V', 'M', 'H', 'E');
var zebra = new Animal ('http://zebra-pictures.clipartonline.net/_/rsrc/1448047942245/zebra-images/cartoon_zebra_kicking.png', 'N', 'Z', 'V', 'X', 'Z');
var lion = new Animal ('http://ap.lanexdev.com/user_images/Discovery/image/magazine/2015/01/Lion%20Cartoon%20dreamstime_45671319.png', 'Q', 'L', 'P', 'I', 'L');
var snake = new Animal ('http://clipartsign.com/upload/2016/01/27/cartoon-snakes-clip-art-page-2-snake-images-clipart-free-clip.png', 'K', 'C', 'S', 'D', 'S');
var monkey = new Animal ('http://vignette2.wikia.nocookie.net/headsoccer/images/b/b8/Cartoon-monkey_6.png/revision/latest?cb=20150814115806', 'J', 'N', 'A', 'M', 'M');
var kangaroo = new Animal ('http://www.clipartonline.net/_/rsrc/1434566857092/Kangaroo-Cartoon-Images/kangaroo-with-joey%201.png?height=320&width=320', 'K', 'R', 'Y', 'O', 'K');
var cat = new Animal ('http://cat-pictures.clipartonline.net/_/rsrc/1359117771956/cute-kittens-images-page-2/cat-image%2010.png?height=320&width=320', 'B', 'U', 'C', 'G', 'C');

function stage(qParam) {
	var animalImage = qParam.image;


	var letter =qParam.choice;
	var letter2 = qParam.choice2;
	var letter3 = qParam.choice3;
	var letter4 = qParam.choice4;
	var correct = qParam.correct;


	return `
	<div class='scene'>

	 	<img src=${animalImage} width='300' class='animal-image'>
	  		<ul class='buttons'>
				<li> <button class=${letter===correct}> ${letter} </button> </li>
		 		<li> <button class=${letter2===correct}> ${letter2} </button> </li>
		 		<li> <button class=${letter3===correct}> ${letter3} </button> </li>
		 		<li> <button class=${letter4===correct}> ${letter4} </button> </li>
	  		</ul>	
	</div>`
}


	
$('.question_stage').append(stage(turtle));
// $('.question_stage').append(stage(elephant));




var buttonList = document.querySelector('.buttons');
buttonList.addEventListener('click', function(event) {

	// var letter = event.target.textContent;
	var correctBtn = event.target.className;


	console.log(correctBtn);


 if  (correctBtn === 'false') {
		alert('Try again!')

	} else {
		alert('Great Job!')

	}


})


// $('.question_stage').append(stage(zebra));
// $('.question_stage').append(stage(lion));
// $('.question_stage').append(stage(snake));
// $('.question_stage').append(stage(monkey));
// $('.question_stage').append(stage(kangaroo));
// $('.question_stage').append(stage(cat));





// var turtle = new Question(animals[0]);
// console.log(animalArray);
// var animalQuestions = new Question([animals]);
// console.log(animalQuestions);
// var turtle = new Question('http://icons.iconarchive.com/icons/fixicon/farm/256/turtle-icon.png', 'F', 'L', 'R', 'T', 'T');


// $('.question_stage').append(stage(turtle));



