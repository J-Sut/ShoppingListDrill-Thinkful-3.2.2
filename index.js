//	1) Single State object: 
var state = {
	items: []
}

//	2) functions that modify state: 

var addItem = function(state, item) {
	state.items.push(item);
};

//var checkedItem = function() {};
//var deletedItem = function() {};

// 3) Functions that render state:
// The render functions should all take two arguments: 
// the state object, and a DOM element to render into.

var renderList = function(state, element) {
	var itemsHTML = state.items.map(function(item) {
		return  "<li>"  +
					"<span class='shopping-item'>" + item + "</span>" +
        			"<div class='shopping-item-controls'>" +
				          "<button class='shopping-item-toggle'>" +
				             "<span class='button-label'>" + "check" + "</span>" +
	          				"</button>" + 
	         			"<button class='shopping-item-delete'>" + 
	            			"<span class='button-label'>" + "delete" + "</span>" +
				          "</button>" +
			        "</div>" +
      			"</li>"
	});
	element.html(itemsHTML)

};

// 4) Event listeners

$('#js-shopping-list-form').submit(function(event) {
	console.log("fired inside submit form listener");
	event.preventDefault();
	addItem(state, $("#shopping-list-entry").val());
	renderList(state, $('.shopping-list'));
});

$("body").on("click", ".shopping-item-delete", function(evt) {
	console.log("fired inside delete button listener");
	$(this).parentsUntil($('ul')).detach();
});

$("body").on("click",".shopping-item-toggle", function(evt) {
	console.log("fired inside check button listener");
	$(this).parentsUntil($('ul')).toggleClass("shopping-item__checked");
});

