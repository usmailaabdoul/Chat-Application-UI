export const createNewInbox = (sender, reciever) => {
  return {
    type: 'CREATE_NEW_INBOX',
    payload: {sender, reciever}
  }
}