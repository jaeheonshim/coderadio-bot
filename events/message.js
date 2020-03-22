const playMusic = require("../commands/playMusic.js");
const prefix = "!radio";

module.exports = (client, msg) => {
    if (msg.content.startsWith(prefix)) {
        if(msg.content.trim() === prefix) {
            return msg.channel.send("Please enter a command! For information on how to use this bot, type `!radio help`");
        } else if(msg.content.startsWith(`${prefix} help`)) {
            return msg.channel.send("For help and basic commands, visit the CodeRadio bot homepage: https://coderadio.jaeheonshim.dev");
        }
        return playMusic(msg, prefix);
    }
}