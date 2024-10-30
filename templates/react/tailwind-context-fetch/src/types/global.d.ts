type dynamicObject = {
  [key: string]: unknown;
}

type APIErrorResponseType = {
  error: {
    message: string;
    code: string;
    data?: string;
  }
}

type TokenStrategy = 'cookie' | 'session' | 'local';
