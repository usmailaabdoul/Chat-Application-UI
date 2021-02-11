const INITIAL_STATE = {
  activeChat: {}
};

const ChatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ACTIVE_CHAT':
      return {...state, activeChat: action.payload};

    default:
      return state;
  }
};

export default ChatReducer;
