
var inpuWord = document.getElementById('inputWord'),
 	btnRevert = document.getElementById('btnRevert'),
 	ul = document.getElementById('list'),
 	dictionary = []
 
btnRevert.onclick = () => {	
	word = inputWord.value;
	dictionary.push(revertWord(word));
	addLi();
}

function addLi(){
	var li = document.createElement('li');
	 	textNode = document.createTextNode(dictionary[dictionary.length - 1]);

	li.appendChild(textNode);
	ul.appendChild(li);
}

function revertWord(word){

	var word_array = word.split('');

	word = "";
	for (var i = word_array.length - 1; i >= 0; i--) 
		word += word_array[i];

	return word;
}