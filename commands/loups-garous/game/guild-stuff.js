module.exports = class GuildStuff {

    /**
     * 
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
     * @param {String} message 
     * @param {String} name of the channel
     */
    deleteVoiceChannel(message, name) {
        //message.guild.channels.remove();
    }
}
