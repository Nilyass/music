const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "+"
const Util = require('discord.js');




client.on("ready", () => { 
console.log('By : m7md'); client.user.setPresence({ 
       status: 'dnd', 
       game: { type: 0, name: 'F.B.IGamer 🍷',
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


		

client.login("MjcyMDA0Mjc4MDgyNjAwOTYw.D2q0pA.pd7yfvlgrwCsKDKWcn39ff-3NtQ");
