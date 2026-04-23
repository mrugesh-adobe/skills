---
name: hello
description: Greet a person by name, optionally in a specific language. Use when the user asks to say hello, greet someone, or test the hello plugin. Supports English, Spanish, French, and German.
tools: Bash
---

# Hello Skill

Greet the user or a named person using the hello plugin.

## Usage

The user may invoke this as `/hello`, optionally passing a name and language:

- `/hello` — greet the world in English
- `/hello Mrugesh` — greet a specific person
- `/hello Mrugesh es` — greet in Spanish

## How to respond

1. Parse the arguments: first token is the name (default `World`), second token is the language code (default `en`).
2. Run the greeting inline — do **not** import from an external file, the logic is self-contained here:

```bash
node --input-type=module <<'EOF'
const greetings = { en: 'Hello', es: 'Hola', fr: 'Bonjour', de: 'Hallo' };
const g = greetings['$LANG'] ?? greetings.en;
console.log(`${g}, $NAME!`);
EOF
```

Replace `$NAME` with the actual name argument and `$LANG` with the language code before running.

3. Output the greeting clearly to the user.

## Supported languages

| Code | Language |
|------|----------|
| `en` | English  |
| `es` | Spanish  |
| `fr` | French   |
| `de` | German   |

If an unsupported language code is given, fall back to English and let the user know.
