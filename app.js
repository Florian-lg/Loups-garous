const Discord = require('discord.js');
const client = new Discord.Client();
const Config = require('./config.json');

const GameCreation = require('./commands/loups-garous/game/game-creation');
const GameDeletion = require('./commands/loups-garous/game/game-deletion');

client.on('ready', () => {
  console.log('Bot launched');
});

client.on('message', message => {
  GameCreation.parse(message);  
  GameDeletion.parse(message);
});


client.login(Config.token);