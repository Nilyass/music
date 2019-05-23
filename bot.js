const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "+"
const Util = require('discord.js');




client.on('ready', function(){
    var ms = 10000 ;
    var setGame = ['https://discord.gg/6kedqJf'];
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
        client.user.setGame(setGame[i],`http://www.twitch.tv/salma`);
    }, ms)
    
});
		

client.login("NTE5NjI3OTExODg4ODk2MDA1.XNRMqA.Oo3zSp_fzm5oW4t45POj523go1k");
