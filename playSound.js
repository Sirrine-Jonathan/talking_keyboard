
const Tone = require('tone');
const synth = new Tone.Synth().toDestination();
const playSound = (key) => {
    synth.triggerAttackRelease("C4", "8n");
}

module.exports = playSound;