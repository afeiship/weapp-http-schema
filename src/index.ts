import httpSchema from '@jswork/http-rest-config';
import NxTaroRequest from '@jswork/next-taro-request';

export default (inConfig): any => {
  const context = {};
  const http = NxTaroRequest.getInstance();
  httpSchema(context, http, inConfig);
  return context;
};
