export interface IResponseError {
  FieldName: string;
  Message: string;
}

export interface IResponse<T = null> {
  statusCode?: number;
  succeeded?: boolean;
  message?: string;
  errors?: IResponseError[];
  data?: T;
}
