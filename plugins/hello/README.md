# hello plugin

A simple, reusable greeting plugin that others can import and build on.

## Usage

```js
import { hello, greet } from './plugins/hello/index.js';

hello();               // "Hello, World!"
hello('Mrugesh');      // "Hello, Mrugesh!"

greet({ name: 'Mrugesh', language: 'es' }); // "Hola, Mrugesh!"
```

## API

### `hello(name?)`

| Param  | Type   | Default   | Description        |
|--------|--------|-----------|--------------------|
| `name` | string | `'World'` | Name to greet      |

Returns a greeting string.

### `greet({ name, language? })`

| Param      | Type   | Default | Description                          |
|------------|--------|---------|--------------------------------------|
| `name`     | string | —       | Name to greet                        |
| `language` | string | `'en'`  | Language code: `en`, `es`, `fr`, `de`|

Returns a localised greeting string.
