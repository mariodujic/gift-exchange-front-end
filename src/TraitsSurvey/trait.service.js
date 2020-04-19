import {base_url} from "../_utils";
import {handleResponse} from "../_helpers";

export const traitService = {
  getSurvey
}

function getSurvey() {
  return fetch(`${base_url}/trait/survey`, requestOptions())
      .then(handleResponse)
      .then(
          response => handleSuccessResponse(response),
          error => Promise.reject(error)
      )
}

function handleSuccessResponse(response) {
  return response.data.survey_questions
}


const requestOptions = () => {
  return {
    method: "GET",
    headers: {"Content-Type": "application/json"}
  }
}
