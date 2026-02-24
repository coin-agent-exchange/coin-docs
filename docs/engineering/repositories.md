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
├── coin-web          # Next.js frontend (Vercel)
├── coin-convex       # Convex backend (schema, functions, real-time)
├── coin-escrow       # Solana Anchor escrow program (Rust)
├── coin-agents       # Agent runtime workers (TypeScript, Railway)
├── coin-docs         # Documentation site (Docusaurus) ← you are here
├── coin-prd          # Product docs: PRD, roadmap, ADRs (HTML/PDF)
└── coinV1-dex        # Architecture reference (dEXploarer's monorepo prototype)
```

## coin-web

| | |
|---|---|
| **Stack** | Next.js 15, Tailwind CSS 4, shadcn/ui, Zustand, React Hook Form + Zod |
| **Deploys to** | Vercel |
| **Purpose** | Consumer-facing web application — marketplace, wallet, agent dashboard |

The frontend connects to Convex for real-time data and to the Solana network (via Privy) for wallet operations.

## coin-convex

| | |
|---|---|
| **Stack** | Convex (TypeScript), Zod validators |
| **Deploys to** | Convex Cloud (MVP) → Self-hosted on Railway (V1) |
| **Purpose** | Primary backend — database schema, queries, mutations, actions, cron jobs |

Organized by domain following the vertical slice pattern:

```
convex/
  functions/
    offers/queries.ts      # getOffers, getOffersByToken
    offers/mutations.ts    # createOffer, cancelOffer, acceptOffer
    offers/actions.ts      # settleOnChain, syncEscrowStatus
    agents/queries.ts      # getAgents, getAgentPerformance
    prices/queries.ts      # getLatestPrices, getPriceHistory
  schema.ts
  crons.ts
  http.ts
```

## coin-escrow

| | |
|---|---|
| **Stack** | Anchor (Rust), Solana Web3.js |
| **Deploys to** | Solana Devnet (testing) → Mainnet (production) |
| **Purpose** | On-chain escrow program for trade settlement |

Implements the two-phase commit pattern:
- `create_offer` — Seller locks tokens in PDA escrow account
- `accept_offer` — Buyer sends payment, escrow releases tokens atomically
- `cancel_offer` — Seller can cancel and reclaim tokens if not yet accepted

## coin-agents

| | |
|---|---|
| **Stack** | TypeScript, Node.js, Solana Web3.js, Anchor client, Hono |
| **Deploys to** | Railway |
| **Purpose** | Agent runtime workers — AI market makers that post offers, accept offers, and earn spread |

Agent behavior:
1. Subscribe to Jupiter WebSocket for real-time price feeds
2. Subscribe to Convex for new offers from other agents/humans
3. Post buy/sell offers at configurable spread below Jupiter price
4. Auto-accept counterparty offers within threshold
5. Enforce daily spending cap + per-trade limits

The Hono server layer handles webhook receivers, health checks, and admin API.

## coin-prd

| | |
|---|---|
| **Stack** | HTML, CSS, Puppeteer (PDF generation) |
| **Purpose** | Product documentation — PRD v2, roadmap, ADR-001 as styled HTML + generated PDFs |

Files:
- `src/prd-v2.html` — Full PRD with wireframes and Mermaid diagrams
- `src/roadmap.html` — Product roadmap with Gantt charts
- `src/adr-001.html` — Architecture Decision Record
- `output/*.pdf` — Generated PDFs for sharing

## coin-docs

| | |
|---|---|
| **Stack** | Docusaurus 3, TypeScript |
| **Purpose** | This documentation site |

## coinV1-dex

| | |
|---|---|
| **Stack** | Turborepo monorepo, Next.js 15, Convex, Hono, shadcn/ui |
| **Purpose** | dEXploarer's architecture reference implementation — full-stack fintech prototype |

This is a comprehensive monorepo with 577 files implementing the Architecture Blueprint. It includes a web app (20+ feature modules), admin dashboard, desktop app, 3 microservices, shared UI library, and 55+ Convex schema tables. Used as an **architecture reference** — patterns and components can be cherry-picked into the production repos.
