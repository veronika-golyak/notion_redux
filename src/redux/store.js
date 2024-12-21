import { createStore, combineReducers } from 'redux';
import authReducer from './authReducer'; 
import notesReducer from './notesReducer'; 

const rootReducer = combineReducers({
    notes: notesReducer,
    auth: authReducer,
});

const store = createStore(rootReducer);

export default store;