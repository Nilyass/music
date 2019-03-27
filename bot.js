const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "+"
const Util = require('discord.js');




client.on('ready', function(){
    var ms = 10000 ;
    var setGame = [' 𝓓𝓪𝓷𝓬𝓲𝓷𝓰 𝓲𝓷 𝓽𝓱𝓮 𝓓𝓪𝓻𝓴 𝔀𝓲𝓽𝓱 ${client.users.size} 𝕯𝖊𝖒𝖔𝖓𝖘 '];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/F.B.I Gamer`);
    }, ms);
    
});
		

client.login("MjcyMDA0Mjc4MDgyNjAwOTYw.D2q0pA.pd7yfvlgrwCsKDKWcn39ff-3NtQ");
