/**
 * Note: The function defined in this file is used to parse
 * the error response from the API.
 * The function assumes following response json format:
 * {
 *  "error": {
 *    "message": "Error message",
 *    "code": "Error code",
 *    "data?": "Error data"
 *  }
 * }
 *
 * You can modify the function to match the error response from your API.
 * Or simply choose not to use it.
*/

export const errorParser = (error: APIErrorResponseType) => {
  const { message, code, data } = error.error;

  const err = {
    messages: message.split(","),
    statusCode: code,
    data,
  }

  return err;
}
