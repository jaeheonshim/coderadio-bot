# CodeRadio Discord Bot
The CodeRadio discord bot automatically streams audio from the official freeCodeCamp code radio and broadcasts it inside your discord server's voice channel(s).

## Screenshots
![][voiceChannel]
![][textchat]

## Using the bot
First, [invite the bot to your discord server.](https://discordapp.com/api/oauth2/authorize?client_id=691360591507619881&permissions=3147776&scope=bot).

![][discordbot]

Once the bot is in your server, enter any voice channel. Then, in any text chat, type `!play` to get the music started.

### Commands
`!play` - Adds the bot to the voice channel the user who used the command is in, and starts streaming music.  
`!pause` - Pauses the music, but keeps the bot in the voice channel. Send `!play` to resume.  
`!stop` - Stops the music and the bot will leave the voice channel.

[discordbot]: ./img/discordStatus.png
[voicechannel]: ./img/voiceChannel.png
[textchat]: ./img/textChat.png