import {base_url, errorText} from "../../_utils";
import {handleResponse} from "../../_helpers";
import authHeader from "../../_helpers/auth-header";

export const traitService = {
  getSurvey,
  postSurvey
}

function getSurvey() {
  return fetch(`${base_url}/trait/survey`, {
    method: "GET",
    headers: {"Content-Type": "application/json"}
  })
      .then(handleResponse)
      .then(handleGetSurveySuccess, Promise.reject)
      .catch(reason => Promise.reject(errorText.serverFetchFatalError))
}

function handleGetSurveySuccess(response) {
  return response.data.survey_questions
}

function postSurvey(completedSurveyData) {
  return fetch(`${base_url}/trait/update`, {
    method: "POST",
    headers: authHeader(),
    body: JSON.stringify(completedSurveyData)
  })
      .then(handleResponse)
      .then(handlePostSurveySuccess, Promise.reject)
      .catch(reason => Promise.reject(errorText.serverFetchFatalError))
}

function handlePostSurveySuccess(response) {
  return response.data.description
}
