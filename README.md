# Skills

Custom Claude Code skills and reusable plugins by Mrugesh Panchal.

## Plugins

Plugins are standalone utilities other projects can import.

| Plugin | Description |
|--------|-------------|
| [hello](plugins/hello/) | Simple greeting utility — good starting template for new plugins |

## Skills

Custom skills that extend Claude Code's behaviour via the `/hello` slash command.

| Skill | Invoke | Description |
|-------|--------|-------------|
| [hello](skills/hello/SKILL.md) | `/hello [name] [lang]` | Greet a person in English, Spanish, French, or German |

## Using this skill in another project

To make these skills available in another Claude Code workspace, add the following to that project's `.claude/settings.json`:

```json
{
  "enabledPlugins": ["mrugesh-skills"]
}
```

Then register this repo as a plugin source via the CLI (one-time setup):

```sh
claude plugin add /absolute/path/to/mrugesh-adobe/skills
```

Once added, invoke the skill as `/mrugesh-skills:hello [name] [lang]` from any workspace that has it enabled.

To use the JS plugin directly in code, import from the package:

```js
import { greet } from '/absolute/path/to/mrugesh-adobe/skills/plugins/hello/index.js';
```

Or publish `@mrugesh/plugin-hello` to npm and import it as a regular package.

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
