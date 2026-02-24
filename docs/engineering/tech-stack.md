---
sidebar_position: 3
title: Tech Stack
description: Complete technology stack for Coin
---

# Tech Stack

All technology choices are documented in [ADR-001](/architecture/adr-001). This page provides a quick reference.

## Frontend

| Layer | Technology | Notes |
|-------|-----------|-------|
| Framework | **Next.js 15** (App Router) | Server Components, streaming, ISR |
| Language | **TypeScript 5** | Strict mode |
| Styling | **Tailwind CSS 4** | Utility-first, design tokens |
| UI Components | **shadcn/ui** (Radix primitives) | Accessible, composable |
| State (client) | **Zustand** | Lightweight stores, persisted to localStorage |
| State (server) | **Convex reactive queries** | Real-time, auto-synced |
| Forms | **React Hook Form + Zod** | Schema-driven validation |
| Charts | **Recharts** (+ Lightweight Charts for trading) | Financial charting |
| Hosting | **Vercel** | Edge deployment, preview URLs per PR |

## Backend

| Layer | Technology | Notes |
|-------|-----------|-------|
| Primary Backend | **Convex** | Real-time DB, serverless functions, scheduling |
| Compute Layer | **Hono** | Webhooks, admin API, WebSocket fan-out |
| Auth | **Privy** | Social login + embedded Solana wallets |
| Hosting (MVP) | **Convex Cloud** | Free tier, zero ops |
| Hosting (V1) | **Self-hosted Convex on Railway** | Data sovereignty, Docker + Postgres |

## Blockchain

| Layer | Technology | Notes |
|-------|-----------|-------|
| Network | **Solana** | Devnet (testing) → Mainnet (production) |
| Smart Contracts | **Anchor** (Rust) | Escrow program with PDA accounts |
| RPC | **Helius** | Free tier (100K credits/day) → Growth plan |
| Price Feeds | **Jupiter API** | WebSocket + REST for real-time prices |
| Wallet (Human) | **Privy embedded wallet** | MPC key management, social recovery |
| Wallet (Agent) | **Programmatic Solana keypair** | Spending limits enforced by escrow |

## Agent Runtime

| Layer | Technology | Notes |
|-------|-----------|-------|
| Language | **TypeScript / Node.js** | Long-running workers |
| Solana Client | **@solana/web3.js + Anchor client** | Transaction building and signing |
| Price Data | **Jupiter WebSocket** | Real-time SOL/USDC and all token pairs |
| Offer Management | **Convex client** | Real-time subscription to new offers |
| HTTP Server | **Hono** | Health checks, admin endpoints |
| Hosting | **Railway** | Auto-restart, logging, GitHub deploy |

## Development & Tooling

| Tool | Purpose |
|------|---------|
| **GitHub Actions** | CI/CD — lint, typecheck, test, build |
| **Biome** | Linting + formatting (alternative to ESLint + Prettier) |
| **Vitest** | Unit + integration testing |
| **Zod** | Runtime validation schemas (shared across frontend + backend) |
| **Puppeteer** | PDF generation from HTML docs |

## V1 Token List

All 14 tokens traded against **USDC** as the sole quote currency:

```
SOL  JUP   PUMP  ZEC   HYPE  SKR  cbBTC
ETH  BONK  PENGU RAY   EURC  JTO  PYTH
```

## Infrastructure Cost

| Phase | Monthly | Notes |
|-------|---------|-------|
| MVP (Weeks 1–4) | &lt;$50 | All free tiers |
| V1 (Weeks 5–16) | ~$4,000 | Vercel Pro, self-hosted Convex, Helius Growth, Railway |
| V2+ | $8–15K | Additional services as product scales |
