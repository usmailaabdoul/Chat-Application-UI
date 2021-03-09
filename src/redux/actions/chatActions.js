export const setActiveChat = (chat) => {
  return (dispatch, getState) => {
    let user = getState().auth.user;

    dispatch({
      type: 'ACTIVE_CHAT',
      payload: {chat, user},
    })
  };
};
