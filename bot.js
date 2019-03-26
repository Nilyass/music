const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "+"
const Util = require('discord.js');

const getYoutubeID = require('get-youtube-id');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const queue = new Map();

const ytdl = require('ytdl-core');

const fs = require('fs');

const gif = require("gif-search");



client.on("ready", () => { 
console.log('By : m7md'); client.user.setPresence({ 
       status: 'dnd', 
       game: { type: 0, name: 'F.B.IGamer 🍷 , DANCIN' IN THE DARK',
       details: `https://discord.gg/`, 
       url: 'http://twitch.tv/F.B.IGamer', 
       state: `Deving & Coding`, 
      application_id: '532682436471947264', 

      assets: { 
small_image: `535061300569571329`, 

small_text: 'Narox Devs', 
large_image: `535061300569571329`, large_text: `Road To 1K` } 

} 

}); 
});


		
client.on('message', message => {
  if (!message.content.startsWith(PREFIX)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "272004278082600960") return;

if (message.content.startsWith(PREFIX + 'setstream')) {
  client.user.setGame(argresult, "https://www.twitch.tv/FBIGamer");
	 console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}`)
}

if (message.content.startsWith(PREFIX + 'setname')) {
  client.user.setUsername(argresult).then
	  message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
}
if (message.content.startsWith(PREFIX + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
}
});
////////////

/////////////
client.login("MjcyMDA0Mjc4MDgyNjAwOTYw.D2q0pA.pd7yfvlgrwCsKDKWcn39ff-3NtQ");
