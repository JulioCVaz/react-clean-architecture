export enum HttpStatusCode {
  unathorized = 401,
  noContent = 204
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
}
