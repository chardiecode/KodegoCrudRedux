export const addYouth = (newYouth) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_YOUTH",
      payload: newYouth,
    });
  };
};

export const removeYouth = (id) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_YOUTH",
      payload: id,
    });
  };
};

export const updateYouth = (youth) => {
  return (dispatch) => {
    dispatch({
      type: "UPDATE_YOUTH",
      payload: youth,
    });
  };
};
