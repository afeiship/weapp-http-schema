import NxFetch from '@jswork/next-fetch';
import httpSchema from '@jswork/http-schema';
import nxTaroRequest from '@jswork/next-taro-request';
import nxFetchWithContentType from '@jswork/next-fetch-with-content-type';
import nxFetchWithDebug from '@jswork/next-fetch-with-debug';
import nxApplyFetchMilddeware from '@jswork/next-apply-fetch-middleware';

export default (inConfig, inOptions?): any => {
  const fetch = nxApplyFetchMilddeware([nxFetchWithContentType, nxFetchWithDebug], nxTaroRequest);
  const http = NxFetch.getInstance({
    pipeStyle: 'request',
    fetch,
    ...inOptions
  });
  return httpSchema(inConfig, http);
};
