import {combineReducers} from 'redux';

import exampleReducer from './exampleReducer';
import authReducer from './authReducer';
import chatReducer from './chatReducer';
import inboxReducer from './inboxReducer';

const rootReducer = combineReducers({
  example: exampleReducer,
  auth: authReducer,
  chat: chatReducer,
  inbox: inboxReducer,
});

export default rootReducer;
