# Neutralinojs + Astro Admin Dashboard Demo

A demo application showing how to build a modern admin dashboard as a native desktop app with **Neutralinojs** and **Astro**.

## What is this?

This project combines two technologies:

- **[Astro](https://astro.build)** generates the frontend as static pages with fast rendering and a component-based architecture.
- **[Neutralinojs](https://neutralino.js.org)** wraps the frontend into a lightweight native desktop application — without the Electron overhead.

The result is an admin dashboard with multiple views that runs both in the browser and as a desktop app. It showcases various Neutralinojs APIs in action — from simple key-value storage to structured JSON files and native OS dialogs.

## Neutralinojs Features (by page)

| Page | API | What it demonstrates |
|------|-----|----------------------|
| **Dashboard** | `Neutralino.computer`, `Neutralino.os` | Live system info (OS, RAM, hostname) |
| **Tasks** | `Neutralino.storage` | CRUD with key-value storage (simplest data access) |
| **Projects** | `Neutralino.filesystem` | Structured JSON files with nested data (Projects → Tasks → Team) |
| **Settings** | `Neutralino.filesystem`, `Neutralino.os` | Read/write preferences as JSON file, native notifications |
| **Reports** | `Neutralino.os`, `Neutralino.filesystem`, `Neutralino.clipboard` | Save dialog, file export (JSON/CSV/TXT), clipboard |

### Data Access: The Progression

This demo shows three levels of data persistence:

1. **Neutralino.storage** (Tasks) — Simple key-value store, ideal for basic data
2. **Neutralino.filesystem with JSON** (Projects, Settings) — Structured documents with nested objects and relations
3. **Note**: For more complex scenarios (full-text search, relations, transactions), a real database should be used (e.g. SQLite via sql.js + filesystem persistence or a Neutralinojs Extension)

## Tech Stack

- **Astro 5** — Static Site Generation
- **Tailwind CSS 4** — Utility-first Styling
- **Neutralinojs 5** — Native Desktop Runtime
- **Webspire** — CSS effects (glassmorphism, animations)

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Header.astro
│   ├── Sidebar.astro
│   └── StatCard.astro
├── layouts/
│   └── DashboardLayout.astro
├── pages/             # Dashboard pages (Astro file-based routing)
│   ├── index.astro         # Dashboard home
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
    ├── global.css           # Design tokens & Tailwind
    └── webspire/            # Webspire CSS effects
```

## Getting Started

### Prerequisites

- Node.js (>= 18)
- pnpm

### Installation

```bash
pnpm install
npx neu update    # Download Neutralino binaries & client
```

### Development (Browser)

```bash
pnpm dev
```

Opens the Astro dev server — ideal for developing and testing in the browser.

### Development (Native App)

```bash
pnpm neu:dev
```

Launches the application as a native desktop app with Neutralinojs.

### Build

```bash
pnpm build        # Astro build to /resources/
pnpm neu:build    # Compile native app
```

## Webspire MCP

This project includes a `.mcp.json` configuration for the [Webspire](https://webspire.de) MCP server. This allows Claude Code to directly access CSS snippets and UI patterns — useful when extending the dashboard.
