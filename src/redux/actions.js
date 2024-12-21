export const DELETE_NOTE = 'DELETE_NOTE';
export const ADD_NOTE = 'ADD_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const deleteNote = (id) => ({
    type: 'DELETE_NOTE',
    payload: id,
  });
  
  export const addNote = (note) => ({
    type: 'ADD_NOTE',
    payload: note,
  });
  
  export const updateNote = (note) => ({
    type: 'UPDATE_NOTE',
    payload: note,
  });
  
  export const login = (user) => ({
    type: 'LOGIN',
    payload: user,
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });