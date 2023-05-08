export const INITIAL_STATE = {
  loading: false,
  songData: {},
  error: "",
};

const songReducer = (state: any, action: any) => {
  if (action.type === "FETCH_START") {
    return {
      loading: true,
      error: false,
      songData: {},
    };
  } else if (action.type === "FETCH_SUCCESS") {
    return {
      loading: false,
      error: false,
      songData: action.payload,
    };
  } else if (action.type === "FETCH_ERROR") {
    return {
      loading: false,
      error: action.payload,
      songData: {},
    };
  } else {
    return state;
  }
};

export default songReducer;
