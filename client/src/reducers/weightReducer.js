import {
  GET_WEIGHTS,
  ADD_WEIGHT,
  DELETE_WEIGHT,
  WEIGHTS_LOADING
} from "../actions/types";

const initialState = {
  weights: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_WEIGHTS:
      return {
        ...state,
        weights: action.payload,
        loading: false
      };
    case DELETE_WEIGHT:
      return {
        ...state,
        weights: state.weights.filter(weight => weight._id !== action.payload)
      };
    case ADD_WEIGHT:
      return {
        ...state,
        weights: [action.payload, ...state.weights]
      };
    case WEIGHTS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
