//List of all used classes
import GameCreation from './commands/game-creation';
import GameDeletion from './commands/game-deletion';

export default class CommandParser {

    /**
     * @param {Message} message 
     */
    constructor (message) {
        this.message = message;
        this.msg = message.content.split(' ')[0];
    }

    /**
     * Used to parse message throught all commands available
     */
    analyzeMessage () {
        switch(this.msg) {
            case ";new":
                GameCreation.parse(this.message);
                break;
            case ";stop":
                GameDeletion.parse(this.message);
                break;
        }
    }
}