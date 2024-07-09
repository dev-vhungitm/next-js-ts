export interface ResponseError {
  FieldName: string;
  Message: string;
}

export interface Response<T> {
  statusCode?: number;
  succeeded?: boolean;
  message?: string;
  errors?: ResponseError[];
  data?: T;
}
