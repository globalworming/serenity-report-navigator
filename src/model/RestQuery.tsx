interface RestQuery {
  method: string
  path: string
  content: string
  contentType: string
  requestHeaders: string
  requestCookies: string
  responseHeaders: string
  responseCookies: string
  responseBody: string
  statusCode: string
}

export default RestQuery