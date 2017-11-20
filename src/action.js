export function requestItem(id) {
  return {
    type: 'REQUEST_ITEM',
    payload: id
  };
}

export function receiveItem(result) {
  return {
    type: 'RECEIVE_ITEM',
    payload: result
  };
}
