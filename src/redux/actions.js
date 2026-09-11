import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const fetchStart = () => ({ type: FETCH_START });
export const fetchSuccess = (data) => ({ type: FETCH_SUCCESS, payload: data });
export const fetchError = (error) => ({ type: FETCH_ERROR, payload: error });

export const fetchLorem = () => {
  return async (dispatch) => {
    dispatch(fetchStart());
    try {
      const res = await axios.get("https://api.lorem.com/ipsum");
      dispatch(fetchSuccess(res.data));
    } catch (err) {
      dispatch(fetchError(err.message));
    }
  };
};
