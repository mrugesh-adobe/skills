---
name: hello
description: Greet a person by name, optionally in a specific language. Use when the user asks to say hello, greet someone, or test the hello plugin. Supports English, Spanish, French, and German.
compatibility: claude-code
allowed-tools: []
---

# Hello Skill

Greet the user or a named person.

## Usage

- `/hello` — greet the world in English
- `/hello Mrugesh` — greet a specific person
- `/hello Mrugesh es` — greet in Spanish

When consumed from an external project via the mrugesh-skills plugin, invoke as:
`/mrugesh-skills:hello [name] [lang]`

## How to respond

1. Parse the arguments: first token is the name (default `World`), second token is the language code (default `en`).
2. Look up the greeting:

| Code | Greeting word |
|------|---------------|
| `en` | Hello         |
| `es` | Hola          |
| `fr` | Bonjour       |
| `de` | Hallo         |

3. Respond with: `<greeting>, <name>!`

If an unsupported language code is given, fall back to English and let the user know.

## Examples

- `/hello` → `Hello, World!`
- `/hello Mrugesh` → `Hello, Mrugesh!`
- `/hello Mrugesh es` → `Hola, Mrugesh!`
- `/hello Mrugesh fr` → `Bonjour, Mrugesh!`
