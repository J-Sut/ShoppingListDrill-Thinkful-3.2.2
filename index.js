//	1) Single State object: 
var state = {
	items: []
}	

//	2) functions that modify state: 
var eventListener = function() {
	$(".shopping-item-delete").on("click", function(evt) {
		//console.log("fired inside delete button listener");
		deletedItem($(this).closest('li').attr("id"));
		//console.log($(this).parent("li").attr("id"));
		$(this).closest('li').remove();
	});

	$(".shopping-item-toggle").on("click", function(evt) {
		//console.log("fired inside check button listener");
		$(this).parentsUntil($('ul')).toggleClass("shopping-item__checked");
	});
};

var addItem = function(state, item) {
	state.items.push(item);
	
};

//var checkedItem = function() {};
var deletedItem = function(item) {
	var currentItem = state.items.indexOf(item);
	//delete this item from the array by its index
	state.items.splice(currentItem, 1);
	//console.log(state.items);
	//console.log(currentItem);
	//console.log(item);
};

// 3) Functions that render state:
// The render functions should all take two arguments: 
// the state object, and a DOM element to render into.

var renderList = function(state, element) {
	var itemsHTML = state.items.map(function(item) {			
		return  "<li id='" + item + "'>"  +
						"<span class='shopping-item'>" + item + "</span> <div class='shopping-item-controls'><button class='shopping-item-toggle'> <span class='button-label'> check </span> </button><button class='shopping-item-delete'><span class='button-label'> delete </span></button></div></li>"
	});
	element.html(itemsHTML);
	eventListener();
};

// 4) Event listeners

$('#js-shopping-list-form').submit(function(event) {
	//console.log("fired inside submit form listener");
	event.preventDefault();
	addItem(state, $("#shopping-list-entry").val());
	renderList(state, $('.shopping-list'));
});





