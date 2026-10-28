# Dirty Code

**[📕 Read the book → warrfie.github.io/dirty_code](https://warrfie.github.io/dirty_code/)**

[![deploy](https://github.com/warrfie/dirty_code/actions/workflows/pages.yml/badge.svg)](https://github.com/warrfie/dirty_code/actions/workflows/pages.yml)
[![read online](https://img.shields.io/badge/read-online-9b2f1e)](https://warrfie.github.io/dirty_code/)
[![languages](https://img.shields.io/badge/languages-30-blue)](#languages)
[![pages](https://img.shields.io/badge/pages-%E2%88%9E-black)](https://warrfie.github.io/dirty_code/)
[![build step](https://img.shields.io/badge/build%20step-none-brightgreen)](#run-locally)
[![dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](public/)
[![code read by humans](https://img.shields.io/badge/code%20read%20by%20humans-0%25-red)](#where-the-book-came-from)
[![license: MIT](https://img.shields.io/badge/license-MIT-lightgrey)](LICENSE)
[![translations welcome](https://img.shields.io/badge/translations-welcome-orange)](#languages)

## Where the book came from

The book was born from a single tweet. It was written by Robert Martin, the author of “Clean Code” — the book a whole generation of programmers learned from to write code for people: give meaningful names, split functions, keep code readable like good prose. And then this man writes:

> “My current strategy is to not read any of the code written by my agents.”
>
> — [Robert Martin, July 23, 2026](https://x.com/unclebobmartin/status/2080257779395154409)

Ironic. The man who spent decades teaching us to write code for people no longer reads it himself. To be fair, the tweet isn't saying code doesn't need reading — it's about keeping quality without reading it: tests, metrics, checks. But we won't stop there — and that idea is aging before our eyes.

## Languages

The book is available in 30 languages, including Esperanto, Interslavic, Latin and Toki Pona. The language is picked automatically from your browser settings and can be changed in the selector. Translations keep the tone and swap in local realities: John Doe becomes Max Mustermann or 山田太郎, a Telegram bot becomes a WhatsApp, LINE or KakaoTalk bot, and in Hebrew and Arabic the week ends on Thursday.

Russian is the source text: edits go into `public/lang/ru.js` first and are then carried over to the other files.

### Review status

| Language | Status |
| --- | --- |
| Русский (source) | ✅ reviewed |
| English | ✅ reviewed |
| Medžuslovjansky | ✅ reviewed |
| All the others | 🤖 machine-translated, awaiting a native speaker |

**Native speakers are very welcome.** If you speak one of the languages, please read the book in it and open a pull request with fixes — or just an issue pointing at what sounds wrong. New languages are welcome too.

## Add a language

1. Copy `public/lang/ru.js` to `public/lang/<code>.js` and translate it. The author's name in the local script can be set in `ui.author`.
2. Add `['<code>', 'Name']` to the `LANGS` list in `public/book.js`.
3. For right-to-left scripts, add the code to `RTL`.

## Run locally

```bash
python3 -m http.server 8000 --directory public
```

The book opens at http://localhost:8000. If the browser shows an old version after edits, reload with a cache bypass: Cmd+Shift+R on macOS, Ctrl+Shift+R on Windows and Linux.

## License

[MIT](LICENSE) © 2026 Maksim Kuklikov
