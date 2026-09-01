# backend-demo

To install dependencies:

```bash
npm install
```

## Environment variables

Copy `.env.example` and create environment-specific files:

| File | Used when | Location |
|------|-----------|----------|
| `.env.development` | `npm run dev` | Local machine |
| `.env.local` | `npm run dev` (optional overrides) | Local machine |
| `.env.production` | `npm start` / PM2 | Server only |

Load order: `.env` → `.env.<NODE_ENV>` → `.env.local` (skipped in production).

On the server, keep production secrets at `~/<username>/.env.backend-demo` (outside the repo). Deploy copies it to `.env.production` in the project:

```bash
mkdir -p ~/$USER
cp .env.example ~/$USER/.env.backend-demo
```

To run in development:

```bash
npm run dev
```

To build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

To test:

```bash
npm test
```
