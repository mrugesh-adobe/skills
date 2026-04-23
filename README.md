# Skills

Custom Claude Code skills and reusable plugins by Mrugesh Panchal.

## Plugins

Plugins are standalone utilities other projects can import.

| Plugin | Description |
|--------|-------------|
| [hello](plugins/hello/) | Simple greeting utility — good starting template for new plugins |

## Skills

Custom skills that extend Claude Code's behaviour for this workspace.

## Getting started

Clone the repo and use any plugin directly as an ES module:

```js
import { hello } from './plugins/hello/index.js';

console.log(hello('World')); // Hello, World!
```

## Adding a new plugin

1. Create a directory under `plugins/<your-plugin>/`
2. Add `index.js`, `package.json`, and `README.md`
3. Export your public API from `index.js`
4. List it in this README

## License

Apache 2.0 — see [LICENSE](LICENSE).
