import {userService} from '../_services';

export default function authHeader() {
  const localAccessToken = userService.getLocalStorageAccessTokenObject()
  if (localAccessToken && localAccessToken.token) {
    return {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localAccessToken.token}`}
  } else {
    return {}
  }
}
