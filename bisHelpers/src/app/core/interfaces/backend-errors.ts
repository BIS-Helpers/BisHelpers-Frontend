export interface BackendErrorsInterface {
  errors?: ErrorBody[] | null;
  path?: null | string;
  requestId?: null | string;
  statusCode?: number;
  timestamp?: Date;
}

export interface ErrorBody {
  code?: null | string;
  details?: string[] | null;
  message?: null | string;
  suggestion?: null | string;
}
