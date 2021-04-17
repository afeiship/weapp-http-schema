# taro-http-schema
> Http schema for taro..

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/taro-http-schema
```

## usage
```js
import httpSchema from '@jswork/taro-http-schema';

const apis = httpSchema({
  host: 'https://api.github.com',
  request: ['', 'json'],
  items: [
    {
      items: {
        profile: ['get', '/users/afeiship']
      }
    }
  ]
});

apis.profile().then((res) => {
  console.log(res);
});
```

## license
Code released under [the MIT license](https://github.com/afeiship/taro-http-schema/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/taro-http-schema
[version-url]: https://npmjs.org/package/@jswork/taro-http-schema

[license-image]: https://img.shields.io/npm/l/@jswork/taro-http-schema
[license-url]: https://github.com/afeiship/taro-http-schema/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/taro-http-schema
[size-url]: https://github.com/afeiship/taro-http-schema/blob/master/dist/taro-http-schema.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/taro-http-schema
[download-url]: https://www.npmjs.com/package/@jswork/taro-http-schema
