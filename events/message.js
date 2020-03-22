const playMusic = require("../commands/playMusic.js");
const prefix = "!";

module.exports = (client, msg) => {
    if (msg.content.startsWith(prefix)) {
        return playMusic(msg, prefix);
    }
}