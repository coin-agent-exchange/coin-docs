---
sidebar_position: 2
title: Repositories
description: Overview of all Coin repositories and their responsibilities
---

# Repositories

All repositories are hosted under the [coin-agent-exchange](https://github.com/coin-agent-exchange) GitHub organization.

## Repository Map

```
coin-agent-exchange/
├── coinV1-dex        # Monorepo — the main codebase (everything lives here)
└── coin-docs         # Documentation site (Docusaurus, GitHub Pages)
```

## coinV1-dex (Monorepo)

| | |
|---|---|
| **Stack** | Turborepo + Bun, Next.js 15, React 19, Convex, Hono, shadcn/ui, Tailwind 4, Zustand, Zod |
| **Deploys to** | Vercel (web), Railway (agents + Hono + self-hosted Convex), Solana (escrow) |
| **Purpose** | The entire Coin platform — web app, admin dashboard, backend, agents, escrow, shared packages |

### Monorepo Structure

```
coinV1-dex/
├── apps/
│   ├── web/                    # Consumer web app (Next.js 15, React 19)
│   ├── admin/                  # Admin dashboard (Next.js 15)
│   ├── desktop/                # Desktop app (Electron)
│   └── docs/                   # API docs (Mintlify)
│
├── packages/core/
│   ├── ui/                     # Design system (shadcn/ui + Radix, 40+ components)
│   ├── types/                  # Shared TypeScript types (all domains)
│   ├── utils/                  # Utility functions (formatting, calculations, crypto)
│   ├── validators/             # Zod validation schemas
│   └── analytics/              # Analytics client (Mixpanel + Sentry)
│
├── packages/config/
│   ├── tailwind/               # Shared Tailwind config
│   └── typescript/             # Shared TSConfig
│
├── services/
│   ├── convex/                 # Convex backend (55+ tables, domain-organized functions)
│   ├── trading-engine/         # Trading service (Hono, order matching)
│   ├── payment-processor/      # Payment service (Hono, Stripe)
│   └── notification-service/   # Notification service (Hono, Resend, Firebase)
│
├── infrastructure/
│   ├── docker/                 # Docker Compose for local dev
│   ├── pulumi/                 # IaC config
│   └── scripts/                # Deploy scripts
│
└── .github/workflows/          # CI/CD (lint, typecheck, test, deploy)
```

### Key Components

**Web App** (`apps/web`) — Consumer-facing Next.js 15 application with 20+ feature modules including marketplace, crypto trading, wallet management, and settings. Uses Privy for auth + embedded Solana wallets.

**Admin Dashboard** (`apps/admin`) — Internal admin interface with user management, KYC compliance, support tickets, audit logs, and transaction monitoring.

**Convex Backend** (`services/convex`) — Primary data layer with 55+ tables covering all domains. Functions organized by domain (queries.ts / mutations.ts / actions.ts per feature). Real-time subscriptions for marketplace feed and live updates.

**Hono Services** (`services/`) — Companion compute layer for webhooks, admin API, WebSocket fan-out, and workloads that don't fit Convex's serverless model. Per [ADR-001b](/architecture/adr-001#backend), these run as a thin layer alongside Convex — not as independent microservices.

**Shared Packages** (`packages/core/`) — Design system (40+ components), TypeScript types, Zod validators, utility functions, and analytics client. Shared across web, admin, and services.

**Escrow Program** — Solana Anchor program for on-chain trade settlement. Implements the two-phase commit pattern:
- `create_offer` — Seller locks tokens in PDA escrow account
- `accept_offer` — Buyer sends payment, escrow releases tokens atomically
- `cancel_offer` — Seller can cancel and reclaim tokens if not yet accepted

### Tooling

| Tool | Purpose |
|------|---------|
| **Turborepo** | Monorepo task pipeline (build, lint, typecheck, test) |
| **Bun** | Package manager (fast installs, workspaces) |
| **Biome** | Linting + formatting |
| **Vitest** | Testing framework |
| **GitHub Actions** | CI/CD pipelines |

## coin-docs

| | |
|---|---|
| **Stack** | Docusaurus 3, TypeScript |
| **Deploys to** | GitHub Pages (auto-deploy on push to main) |
| **Purpose** | This documentation site — PRD, roadmap, ADRs, engineering guides |
| **URL** | [coin-agent-exchange.github.io/coin-docs](https://coin-agent-exchange.github.io/coin-docs/) |

Also hosts the styled HTML and PDF versions of product documents in the `/static/html/` and `/static/pdf/` directories.
