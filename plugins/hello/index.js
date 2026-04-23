/**
 * Hello Plugin
 * A simple example plugin that others can reference or extend.
 */

export function hello(name = 'World') {
  return `Hello, ${name}!`;
}

export function greet({ name, language = 'en' } = {}) {
  const greetings = {
    en: `Hello, ${name}!`,
    es: `Hola, ${name}!`,
    fr: `Bonjour, ${name}!`,
    de: `Hallo, ${name}!`,
  };
  return greetings[language] ?? greetings.en;
}
