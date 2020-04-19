import {base_url, errorText} from '../_utils';
import {handleResponse} from "../_helpers";
import {userLocalKey, userService} from "./user.service";

export const authenticationService = {
  register,
  login
}

function register(firstName, lastName, username, password) {
  return fetch(`${base_url}/user/register`, requestOptions({
    first_name: firstName,
    last_name: lastName,
    username,
    password
  })).then(handleResponse)
      .then(
          response => handleSuccessResponse(response),
          error => Promise.reject(error)
      ).catch(reason => {
        return Promise.reject(errorText.serverFetchFatalError)
      })
}

function login(username, password) {
  return fetch(`${base_url}/user/login`, requestOptions({
    username,
    password
  })).then(handleResponse)
      .then(
          response => handleSuccessResponse(response),
          error => Promise.reject(error)
      ).catch(reason => {
        return Promise.reject(errorText.serverFetchFatalError)
      })
}

function handleSuccessResponse(response) {
  handleUserData(response)
  return getUserFromResponse(response)
}

function handleUserData(response) {
  userService.storeUserDataLocally(userLocalKey.USER, getUserFromResponse(response))
  userService.storeUserDataLocally(userLocalKey.ACCESS_TOKEN, getAccessTokenFromResponse(response))
  userService.storeUserDataLocally(userLocalKey.REFRESH_TOKEN, getRefreshTokenFromResponse(response))
}

function getUserFromResponse(response) {
  return response.data.user
}

function getAccessTokenFromResponse(response) {
  return response.data.access_token
}

function getRefreshTokenFromResponse(response) {
  return response.data.refresh_token
}

const requestOptions = (data) => {
  return {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  }
}
