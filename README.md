# Neutralinojs + Astro Admin Dashboard Demo

Eine Demo-Anwendung, die zeigt, wie man mit **Neutralinojs** und **Astro** ein modernes Admin-Dashboard als native Desktop-App bauen kann.

## Was ist das?

Dieses Projekt kombiniert zwei Technologien:

- **[Astro](https://astro.build)** generiert das Frontend als statische Seiten mit schnellem Rendering und komponentenbasierter Architektur.
- **[Neutralinojs](https://neutralino.js.org)** verpackt das Frontend in eine leichtgewichtige native Desktop-Anwendung — ohne Electron-Overhead.

Das Ergebnis ist ein Admin-Dashboard mit mehreren Ansichten (Analytics, Projekte, Aufgaben, Kalender, Nachrichten, Team, Reports, Einstellungen), das sowohl im Browser als auch als Desktop-App läuft.

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

### Installation

```bash
npm install
```

### Entwicklung (Browser)

```bash
npm run dev
```

Öffnet den Astro Dev-Server — ideal zum Entwickeln und Testen im Browser.

### Entwicklung (Native App)

```bash
npm run neu:dev
```

Startet die Anwendung als native Desktop-App mit Neutralinojs.

### Build

```bash
npm run build        # Astro-Build nach /resources/
npm run neu:build    # Native App kompilieren
```

## Webspire MCP

Das Projekt enthält eine `.mcp.json`-Konfiguration für den [Webspire](https://webspire.de) MCP-Server. Damit kann Claude Code direkt auf CSS-Snippets und UI-Patterns zugreifen — nützlich bei der Weiterentwicklung des Dashboards.
