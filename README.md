# `dom-once`

[![Build Status](https://travis-ci.org/emilbayes/dom-once.svg?branch=master)](https://travis-ci.org/emilbayes/dom-once)

> `.once` for DOM Events

## Usage

```js
var once = require('dom-once')


once(document.body, 'load', function () {
  console.log('Hello world')
})
```

## API

### `once(target, type, listener [, useCapture])`

Works like `target.addEventListener(type, listener, useCapture)` / `target.removeEventListener(type, listener)`
just all automagically. No fluf, no fuss, plain and simple

## Install

```sh
npm install dom-once
```

## License

[ISC](LICENSE.md)
