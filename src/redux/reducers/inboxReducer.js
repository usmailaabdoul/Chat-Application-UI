import SocketIo from '../../utils/socketIo';

const INITIAL_STATE = {
  inbox: []
};

const InboxReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CREATE_NEW_INBOX':
      const {sender, reciever} = action.payload;
      SocketIo.createNewInbox(sender, reciever)

      return {...state};

    default:
      return state;
  }
};

export default InboxReducer;
