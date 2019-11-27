import axios from "axios";
import {
  GET_WEIGHTS,
  ADD_WEIGHT,
  DELETE_WEIGHT,
  WEIGHTS_LOADING
} from "./types";

export const getWeights = () => dispatch => {
  dispatch(setWeightsLoading());
  axios.get("/api/weights").then(res =>
    dispatch({
      type: GET_WEIGHTS,
      payload: res.data
    })
  );
};
export const addWeight = weight => dispatch => {
  axios.post("/api/weights", weight).then(res =>
    dispatch({
      type: ADD_WEIGHT,
      payload: res.data
    })
  );
};
export const deleteWeight = id => dispatch => {
  axios
  .delete(`/api/weights/${id}`)
  .then(res =>
    dispatch({
      type: DELETE_WEIGHT,
      payload: id
    })
  )
}

export const setWeightsLoading = weight => {
  return {
    type: WEIGHTS_LOADING
  };
};
