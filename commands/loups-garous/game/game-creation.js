const Command = require('../../command');
const Discord = require('discord.js');
const Guildstuff = require('./guild-stuff');

module.exports = class GameCreation extends Command {

    static match(message) {
        return message.content.startsWith(';new');
    }

    static action(message) {
        
        const msg = '[React with 👌 to join the game]; Currently playing :';
        message.channel.send(msg)
            .then(messageReaction => {
                const filter = (reaction, user) => {
                    return reaction.emoji.name === '👌';
                };

                const reactionCollector = new Discord.ReactionCollector(messageReaction, filter, {
                    time: 15000
                });

                reactionCollector.on('collect', msgReact => {
                    msgReact.users
                    .fetch()
                    .then(users => {
                        msgReact.message.edit(msg + users.map(user => ` <@${user.id}>`).toString());
                    });
                });

                reactionCollector.on('end', () => message.channel.send('Game starts now'));
            });
            
            const setup = new GuildStuff();
            setup.createVoiceChannel(message, "Loups garous 🐺", "voice",  "690560401091592254");
    }
}