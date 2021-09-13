const SET_ACTIVE_CHAT = "SET_ACTIVE_CHAT";

export const setActiveChat = (username, conversationId, twoWayConvo) => {
  return {
    type: SET_ACTIVE_CHAT,
    payload: {
      username,
      conversationId,
      twoWayConvo,
    }
  };
};

const initialState = { username: "", id: null  };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_CHAT: {
      return { id: action.payload.conversationId, username: action.payload.username, twoWayConvo: action.payload.twoWayConvo};
    }
    default:
      return state;
  }
};

export default reducer;
