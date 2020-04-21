export const userService = {
  storeUserDataLocally,
  removeUserDataLocally,
  getUser,
  hasCompletedTraitSurvey,
  getLocalStorageAccessTokenObject
}

function storeUserDataLocally(type, data) {
  localStorage.setItem(type, JSON.stringify(data))
}

function removeUserDataLocally() {
  localStorage.removeItem(userLocalKey.USER)
  localStorage.removeItem(userLocalKey.REFRESH_TOKEN)
  localStorage.removeItem(userLocalKey.ACCESS_TOKEN)
}


function getUser() {
  return JSON.parse(localStorage.getItem(userLocalKey.USER))
}

function hasCompletedTraitSurvey() {
  return localStorage.getItem(userLocalKey.TRAIT_SURVEY_COMPLETED)
}

function getLocalStorageAccessTokenObject() {
  return JSON.parse(localStorage.getItem(userLocalKey.ACCESS_TOKEN))
}

export const userLocalKey = {
  USER: 'gift_exchange_user',
  REFRESH_TOKEN: 'gift_exchange_refresh_token',
  ACCESS_TOKEN: 'gift_exchange_access_token',
  TRAIT_SURVEY_COMPLETED: 'gift_exchange_trait_survey',
}
