import httpSchema from '@jswork/http-rest-config';
import NxTaroRequest from '@jswork/next-taro-request';

export default (inConfig, inOptions?): any => {
  const context = {};
  const http = NxTaroRequest.getInstance(inOptions);
  httpSchema(context, http, inConfig);
  return context;
};
