const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "+"
const Util = require('discord.js');




client.on('ready', function(){
    var ms = 10000 ;
    var setGame = ['premuim : Beta'];
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
		

client.login("NTY4MDc4NDQwNzYzMjI4MjE0.XLoA1w.3huFMiObYa1ybTXipI5KxKvL4Pc");
