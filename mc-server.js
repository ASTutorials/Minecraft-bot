const Discord = require('discord.js');
const client = new Discord.Client();
client.login('Mzk4MTY3MzQxMDk3Mjg3Njgw.DTUtnA.Kp4tt_AL0aCUnVJO66teA4dqJds');

var request = require('request');
var mcCommand = 'communism?'; // Command for triggering
var mcIP = 'marxstruelegacy.ddns.net'; // Your MC server IP
var mcPort = 25565; // Your MC server port

client.on('message', message => {
    if (message.content === mcCommand) {
        var url = 'http://mcapi.us/server/status?ip=' + mcIP + '&port=' + mcPort;
        request(url, function(err, response, body) {
            if(err) {
                console.log(err);
                return message.reply('Error getting Minecraft server status...');
            }
            body = JSON.parse(body);
            var status = '*Minecraft server is currently offline*';
            if(body.online) {
                status = '**Marx\'s true legacy is online**  ';
                
                }
            
            message.reply(status);
        });
    }
});