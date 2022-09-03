import youthJson from "../../youthJson";

const initialState = youthJson;

const youthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_YOUTH":
      return [action.payload, ...state];
    case "REMOVE_YOUTH":
      return [...state].filter((youth) => youth.id !== action.payload);
    case "UPDATE_YOUTH":
      return (state = [...state].map((item) =>
        item.id === action.payload.id ? action.payload : item
      ));
    default:
      return state;
  }
};

export default youthReducer;
