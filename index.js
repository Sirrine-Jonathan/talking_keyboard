const readline = require('readline');
const sayKey = require('./sayKey');
const playSound = require('./playSound');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

class PlayType {
	static KEYS = 'KEYS';
	static MUSIC = 'MUSIC';

	constructor(current = PlayType.KEYS){
		this.current = current;
	}

	toggleType = () => {
		if (this.current === PlayType.KEYS){
			this.current = PlayType.MUSIC;
		} else if (this.current === PlayType.MUSIC){
			this.current = PlayType.KEYS;
		}
	}
}
let playType = new PlayType();
if (process.env.DEV_MODE) console.log('DEV MODE');

process.stdin.on('keypress', (str, key) => {
	if (key.sequence == '\u0003' && process.env.DEV_MODE) process.exit();
	if (key.sequence === '\u001b[G' || key.name === 'undefined') playType.toggleType(); 
	if (playType.current === PlayType.KEYS)
		sayKey(key);
	else if (playType.current === PlayType.MUSIC)
		playSound(key);
});	


