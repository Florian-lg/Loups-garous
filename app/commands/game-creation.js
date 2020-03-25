import Discord from 'discord.js';
import Command from './command'
import ChannelActions from '../actions/channel-actions';

export default class GameCreation extends Command {

    static match(message) {
        return message.content.startsWith(';new');
    }

    static action(message) {
        
        const msg = '[React with 👌 to join the game]; Currently playing :';
        const channelAction = new ChannelActions();

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

                reactionCollector.on('end', () => {
                    message.channel.send('Game starts now');
                    channelAction.createVoiceChannel(message, "Loups garous 🐺", "voice",  "690560401091592254");
                });
            })
            .catch(() => console.error);        
    }
}