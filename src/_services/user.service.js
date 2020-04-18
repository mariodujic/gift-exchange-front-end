export const userService = {
  storeUserDataLocally,
  getUser
}

function storeUserDataLocally(type, data) {
  localStorage.setItem(type, JSON.stringify(data))
}

function getUser() {
  return JSON.parse(localStorage.getItem(userLocalKey.USER))
}

export const userLocalKey = {
  USER: 'gift_exchange_user',
  REFRESH_TOKEN: 'gift_exchange_refresh_token',
  ACCESS_TOKEN: 'gift_exchange_access_token'
}
