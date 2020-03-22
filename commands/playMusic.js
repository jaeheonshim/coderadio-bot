let connectionDispatcher;

module.exports = (message, prefix) => {
    if(message.content.startsWith(`${prefix}play`)) {
        const voiceChannel = message.member.voice.channel;
        if(!voiceChannel) {
            return message.channel.send("You need to be in a voice channel!");
        }
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if(!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
            return message.channel.send("I don't have permissions to join and speak in that voice channel!");
        }
        
        voiceChannel.join().then(connection => {
            connectionDispatcher = connection.play("https://coderadio-admin.freecodecamp.org/radio/8010/radio.mp3");
            return message.channel.send("Playing");
        });
    } else if(message.content.startsWith(`${prefix}stop`)) {
        if(connectionDispatcher) {
            connectionDispatcher.end();
            return message.channel.send("Stopped");
        }
    }
}