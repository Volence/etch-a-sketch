var divAmounts = 16;
var coloringType = 0;
var colorClick

function resetGrid() {
$('.box').css("background-color", "white");
};

function setGridSize() {
	$('.mainContainer').empty();
	var gridAmount = prompt("How many boxes would you like?", 16);
	if (gridAmount !== null || gridAmount !== 0) {
	createBox(gridAmount);
	} else {
	createBox(16);
	}
};


function setRandomColors() {
	coloringType = 1;
	document.body.style.cursor = "default";
};

function setWhite() {
	coloringType = 2;
	document.body.style.cursor = "default";
};

function selectColor() {
	coloringType = 3;
	document.body.style.cursor = "crosshair";
};

function createBox(divAmounts) {
	var columns = divAmounts;
    var rows = divAmounts;
    var width = parseInt(400 / divAmounts);
    var height = parseInt(400 / divAmounts);
    for(i = 0; i < rows; i++){
    	for(j = 0; j < columns; j++){
    		$('.mainContainer').append('<div class=box></div>')
    		$('.box').width(width).height(height);
    	}
    }
    $('.box').on('mouseenter', function() {
	if(coloringType === 0) {
		$(this).css("background-color","black");
	}else if(coloringType === 1) {
		var r = Math.floor(Math.random() * 16777215);
		var hex = ('#' + r.toString(16));
		$(this).css("background-color",hex);
	} else if(coloringType === 2) {
		$(this).css("background-color","white");
	} else if(coloringType === 4) {
		$(this).css("background-color",colorClick);
		console.log(colorClick);
	}
});
    $('.box').on('click', function() {
    	    		console.log(coloringType);
    	if(coloringType === 3) {
			colorClick = $(this).css('background-color');
			coloringType++;
			console.log(coloringType);
			document.body.style.cursor = "default";
		}	
	});
};

$(document).ready(function() {
	createBox(divAmounts);



});