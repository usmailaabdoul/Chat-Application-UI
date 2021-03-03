import { socket } from '../../utils/socketIo';

const INITIAL_STATE = {
  activeChat: {}
};

const ChatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ACTIVE_CHAT':
      const inbox = action.payload;
      const room = 'room_' + inbox._id;
      
      socket.emit('join', { room }, (error) => {
        if (error) {
          alert(error);
        }
      });

      return { ...state, activeChat: inbox };

    default:
      return state;
  }
};

export default ChatReducer;
