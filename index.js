//	1 Single State object: 

var state = {
	items: []
}

//	2 functions that modify state: 

var addItem = function(state, item) {
	state.items.push(items);

};

// 3 Functions that render state:
// The render functions should all take two arguments: 
// the state object, and a DOM element to render into.

var renderList = function(state, element) {
	var itemsHTML = state.items.map(function(item) {
		return '<li>' + item + '</li>';
	};)
	element.html(itemsHTML)
};

// 4 Event listeners

$('.shopping-list-add').submit(function(event) {
	event.preventDefault();
	addItem(state, $('.shopping-list-add-input').val());
	renderList(state, $('.shopping-list'));
});