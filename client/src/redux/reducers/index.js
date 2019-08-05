import
{
  CLEAR_STATE,
}
from "../constants/action-types";

const initialState = {
  userInfo: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_STATE:
      return { ...initialState }
    default:
      return state;
  }
};
export default rootReducer;