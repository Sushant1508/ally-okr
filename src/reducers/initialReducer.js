import { API_STATUS, PUBLISH_CATEGORIES } from '../utils/constants';

export function onLoadReducer (state = { responseArray: [] }, action) {
  switch (action.type) {
    case API_STATUS.SUCCESS: {
      return { ...state, responseArray: action.payload };
    }

    case API_STATUS.FAILURE: {
      return { ...state, responseArray: action.payload };
    }

    case PUBLISH_CATEGORIES.OKR_CATEGORIES: {
      return { ...state, categories: action.payload };
    }

    default:
      return { ...state };
  }
}
