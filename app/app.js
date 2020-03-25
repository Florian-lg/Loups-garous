import Discord from 'discord.js';
import MessageParser from './command-parser';
import Config from './../config.json';
import Dao from './db/dao';
import { path } from 'path';

const client = new Discord.Client();


client.on('ready', () => {
  console.log('Bot launched 🐺');  
  const dao = new Dao();
  dao.initializeTables();
});

client.on('message', message => {
  const messageParser = new MessageParser(message);
  messageParser.analyzeMessage();
});


client.login(Config.token);