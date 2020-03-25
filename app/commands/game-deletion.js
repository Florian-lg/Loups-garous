import Command from './command';
import ChannelActions from '../actions/channel-actions';

export default class GameDeletion extends Command {
    static match (message) {
        return message.content.startsWith(';stop');
    }

    static action (message) {
        const channelAction = new ChannelActions();
        channelAction.deleteVoiceChannel(message);
    }
}