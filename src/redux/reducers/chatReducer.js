import { socket } from '../../utils/socketIo';

const INITIAL_STATE = {
  activeChat: {}
};

const ChatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ACTIVE_CHAT':
      const {chat, user} = action.payload;
      const room = 'inbox_' + chat._id;
      socket.emit('join', { room, user_id: user._id }, (error) => {
        if (error) {
          alert(error);
        }
      });

      return { ...state, activeChat: chat };

    default:
      return state;
  }
};

export default ChatReducer;
