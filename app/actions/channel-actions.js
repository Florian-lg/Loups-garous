export default class GuildActions {

    /**
     * @param {Message} message
     * @param {String} name 
     * @param {String} type 
     * @param {String} parent 
     */
    createVoiceChannel(message, name, type, parent) {
        message.guild.channels.create(name, {
            "type": type,
            "parent": parent
        });
    }

    /**
     * 
     * @param {Array} players 
     */
    moveAllPlayersToChannel(players) { }

    /**
     * 
     * @param {Message} message 
     * @param {String} name of the channel
     */
    deleteVoiceChannel(message) {
        console.log(message.guild.channels.resolve('692465313438236772'));

        // if (command === 'delete') {
        //     fetchedChannel.delete();
        // }
    }
}
