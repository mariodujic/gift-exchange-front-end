export function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (data.status === 200) {
      return data;
    } else {
      const error = data.message || "Unrecognized error on server side";
      return Promise.reject(error);
    }
  });
}
