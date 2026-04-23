# Skills Project — Claude Context

This repo contains custom Claude Code skills and reusable plugins.

## Structure

```
skills/
├── plugins/          # Reusable utility plugins
│   └── hello/        # Example greeting plugin
├── skills/           # Custom Claude Code skill definitions
├── CLAUDE.md         # This file — Claude context
├── README.md
└── .gitignore
```

## Plugins

Plugins live under `plugins/<name>/`. Each plugin has:
- `index.js` — the implementation (ES module)
- `package.json` — metadata and exports
- `README.md` — usage docs

## Skills

Custom skills live under `skills/`. Each skill is a markdown file with
instructions Claude follows when the skill is invoked.

## Testing

Run a plugin directly:
```sh
node -e "import('./plugins/hello/index.js').then(m => console.log(m.hello('You')))"
```
