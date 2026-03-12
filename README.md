# Neutralinojs + Astro Admin Dashboard Demo

Eine Demo-Anwendung, die zeigt, wie man mit **Neutralinojs** und **Astro** ein modernes Admin-Dashboard als native Desktop-App bauen kann.

## Was ist das?

Dieses Projekt kombiniert zwei Technologien:

- **[Astro](https://astro.build)** generiert das Frontend als statische Seiten mit schnellem Rendering und komponentenbasierter Architektur.
- **[Neutralinojs](https://neutralino.js.org)** verpackt das Frontend in eine leichtgewichtige native Desktop-Anwendung — ohne Electron-Overhead.

Das Ergebnis ist ein Admin-Dashboard mit mehreren Ansichten, das sowohl im Browser als auch als Desktop-App läuft. Die App zeigt verschiedene Neutralinojs-APIs im Einsatz — von einfachem Key-Value-Storage bis zu strukturierten JSON-Dateien und nativen OS-Dialogen.

## Neutralinojs-Features (nach Seite)

| Seite | API | Was wird gezeigt |
|-------|-----|------------------|
| **Dashboard** | `Neutralino.computer`, `Neutralino.os` | Live System-Info (OS, RAM, Hostname) |
| **Aufgaben** | `Neutralino.storage` | CRUD mit Key-Value Storage (einfachster Datenzugriff) |
| **Projekte** | `Neutralino.filesystem` | Strukturierte JSON-Dateien mit verschachtelten Daten (Projekte → Tasks → Team) |
| **Einstellungen** | `Neutralino.filesystem`, `Neutralino.os` | Preferences als JSON-Datei lesen/schreiben, native Notifications |
| **Berichte** | `Neutralino.os`, `Neutralino.filesystem`, `Neutralino.clipboard` | Save-Dialog, Datei-Export (JSON/CSV/TXT), Clipboard |

### Datenzugriff: Die Progression

Das Demo zeigt drei Stufen der Datenpersistenz:

1. **Neutralino.storage** (Tasks) — Einfacher Key-Value Store, ideal für simple Daten
2. **Neutralino.filesystem mit JSON** (Projekte, Settings) — Strukturierte Dokumente mit verschachtelten Objekten und Relationen
3. **Hinweis**: Für komplexere Szenarien (Volltextsuche, Relationen, Transaktionen) sollte eine echte Datenbank eingesetzt werden (z.B. SQLite über sql.js + Filesystem-Persistenz oder eine Neutralinojs Extension)

## Tech-Stack

- **Astro 5** — Static Site Generation
- **Tailwind CSS 4** — Utility-first Styling
- **Neutralinojs 5** — Native Desktop-Runtime
- **Webspire** — CSS-Effekte (Glassmorphism, Animationen)

## Projektstruktur

```
src/
├── components/        # Wiederverwendbare UI-Komponenten
│   ├── Header.astro
│   ├── Sidebar.astro
│   └── StatCard.astro
├── layouts/
│   └── DashboardLayout.astro
├── pages/             # Dashboard-Seiten (Astro File-based Routing)
│   ├── index.astro         # Dashboard-Startseite
│   ├── analytics.astro
│   ├── projects.astro
│   ├── tasks.astro
│   ├── calendar.astro
│   ├── messages.astro
│   ├── team.astro
│   ├── reports.astro
│   ├── settings.astro
│   └── profile.astro
└── styles/
    ├── global.css           # Design-Tokens & Tailwind
    └── webspire/            # Webspire CSS-Effekte
```

## Starten

### Voraussetzungen

- Node.js (>= 18)
- pnpm

### Installation

```bash
pnpm install
npx neu update    # Neutralino-Binaries & Client herunterladen
```

### Entwicklung (Browser)

```bash
pnpm dev
```

Öffnet den Astro Dev-Server — ideal zum Entwickeln und Testen im Browser.

### Entwicklung (Native App)

```bash
pnpm neu:dev
```

Startet die Anwendung als native Desktop-App mit Neutralinojs.

### Build

```bash
pnpm build        # Astro-Build nach /resources/
pnpm neu:build    # Native App kompilieren
```

## Webspire MCP

Das Projekt enthält eine `.mcp.json`-Konfiguration für den [Webspire](https://webspire.de) MCP-Server. Damit kann Claude Code direkt auf CSS-Snippets und UI-Patterns zugreifen — nützlich bei der Weiterentwicklung des Dashboards.
