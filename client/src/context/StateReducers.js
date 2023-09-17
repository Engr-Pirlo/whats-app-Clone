import { reducerCase } from "./constants";

export const initialState = {
  userInfo: undefined,
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCase.SET_USER_INFO: {
      return {
        ...state,
        userInfo: action.userInfo,
      };
    }

    case reducerCase.SET_NEW_USER:
      return {
        ...state,
        newUser: action.newUser,
      };

    default:
      return state;
  }
};

export default reducer;
