import { createStore } from 'redux';

const initialState = {
  searchTerm: '',
  responseInfo: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload,
      };
    case 'SET_RESPONSE_INFO':
      return {
        ...state,
        responseInfo: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
