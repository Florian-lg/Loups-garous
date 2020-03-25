const Command = require('../../command');
const GuildSetup = require('./guild-stuff');

module.exports = class GameDeletion extends Command {
    static match (message) {
        return message.content.startsWith(';stop');
    }

    static action (message) {
        const setup = new GuildSetup();
        setup.deleteVoiceChannel(message, "Loups garous 🐺");
    }
}