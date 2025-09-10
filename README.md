## Tables Mini App

A small React application demonstrating table creation and rendering with basic state management. Built with Vite, React, Redux Toolkit, TypeScript, and SCSS.

### Tech Stack
- React, React DOM
- Redux Toolkit, React Redux
- TypeScript
- Vite
- SCSS

### Getting Started
1. Install dependencies:
```bash
npm install
```
2. Start the development server:
```bash
npm run dev
```

### Useful Scripts
- `dev`: Run the app in development mode with Vite.
- `build`: Create a production build.
- `preview`: Preview the production build locally.
- `type-check`: Run TypeScript type checks without emitting files.
- `lint`: Lint source files.
- `lint:fix`: Lint and auto-fix issues where possible.
- `format`: Format files with Prettier.
- `format:check`: Check formatting without writing changes.
- `validate`: Run type-check, lint, and formatting checks.

### Project Structure (key parts)
- `src/pages` — pages and routing entry points
- `src/features` — feature-level logic (e.g., create table)
- `src/entities` — reusable domain entities (e.g., table UI)
- `src/widgets` — composed UI blocks
- `src/app` — app setup, providers, store, and global styles
