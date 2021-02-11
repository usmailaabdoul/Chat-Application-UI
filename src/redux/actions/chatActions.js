export const setActiveChat = (chat) => {
  return {
    type: 'ACTIVE_CHAT',
    payload: chat,
  };
};
