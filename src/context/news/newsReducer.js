import { newsTypes } from '../types';

export default (state, action) => {
  switch (action.type) {
    case newsTypes.LOAD_NEWS:
      return {
        ...state,
        news: action.payload[0].articles,
        currentPage: action.payload[1]
      };
    case newsTypes.LOAD_HEADLINE_NEWS:
      return {
        ...state,
        headlineNews: action.payload
      };
    default:
      return state;
  }
};
