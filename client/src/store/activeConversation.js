const SET_ACTIVE_CHAT = "SET_ACTIVE_CHAT";

export const setActiveChat = (username, conversationId) => {
  return {
    type: SET_ACTIVE_CHAT,
    payload: {
      username,
      conversationId,
    }
  };
};

const initialState = { id: null, username: "" };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_CHAT: {
      return { id: action.payload.conversationId, username: action.payload.username };
    }
    default:
      return state;
  }
};

export default reducer;
