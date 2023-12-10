import type { ApiErrorScheme } from '@chitchat/exceptions';

class ApiException<ErrorCode = number> extends Error {
  declare code: ErrorCode;

  constructor(data: ApiErrorScheme, code: ErrorCode) {
    super(data['response_messages']);
    this.name = 'ApiException';
    this.code = code;
  }
}

export default ApiException;
