const say = require('say');
const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
	//if (key.sequence == '\u0003') process.exit();
	sayKey(key);
});	
const sayKey = (key) => {
	let text = ""
	if (key.name && !override.find((name) => name === key.name)){
		text = key.name;
	} else if (convert[key.sequence]){
		text = convert[key.sequence];
	} else if (convert[key.name]){
		text = convert[key.name];
	} else {
		text = "Unknown Key";
	}


	// prepend shift
	if (capitals.split('').find((letter) => letter == key.sequence)){
		text = "Captial " + text;
	} else if (key.shift){
		text = "Shift " + text;
	} 

	// prepend alt 
	if (key.meta){
		text = "Alt " + text;
	}

	// prepend ctrl
	if (key.ctrl){
		text = "Control " + text;
	}

	say.speak(text);
}

const capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const override = [
	'pageup',
	'space'
];

const convert = {
	'`': 'Back tick',
	'~': 'Tilde',
	'!': 'Exclamation Point',
	'@': 'At Symbol',
	'#': 'Pound',
	'$': 'Dollar Sign',
	'%': 'Percent Sign',
	'^': 'caret', 
	'&': 'Ampersand',
	'*': 'Asterisk',
	'(': 'Open Parenthesis',
	')': 'Close Parenthesis',
	'-': 'Minus',
	'_': 'Underscore',
	'+': 'Plus',
	'=': 'Equals',
	'\\': 'Back Slash',
	'/': 'Forward Slash',
	'|': 'Pipe',
	'[': 'Open Bracket',
	']': 'Close Bracket',
	'{': 'Open Brace',
	'}': 'Close Brace',
	"'": 'Apostrophe',
	'"': 'Quotation Marks',
	':': 'Colon',
	';': 'Semi-colon',
	'?': 'Question Mark',
	'.': 'Period',
	'>': 'Greater Than',
	'<': 'Less Than',
	',': 'comma',
	'pageup': 'page up',
	'space': 'Space Bar',
}
