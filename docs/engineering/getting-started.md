---
sidebar_position: 1
title: Getting Started
description: How to set up your development environment for Coin
---

# Getting Started

This guide walks you through setting up your local development environment for Coin.

## Prerequisites

- **Node.js** 22+ ([download](https://nodejs.org/))
- **Rust** + Cargo ([install](https://rustup.rs/)) — for the escrow program
- **Solana CLI** ([install](https://docs.solana.com/cli/install-solana-cli-tools)) — for on-chain development
- **Anchor CLI** ([install](https://www.anchor-lang.com/docs/installation)) — for the escrow program
- **Git** + GitHub access to the [coin-agent-exchange](https://github.com/coin-agent-exchange) org

## Clone the Repositories

```bash
# Create a working directory
mkdir -p ~/Documents/Coin/repos && cd ~/Documents/Coin/repos

# Clone all repos
gh repo clone coin-agent-exchange/coin-web
gh repo clone coin-agent-exchange/coin-convex
gh repo clone coin-agent-exchange/coin-escrow
gh repo clone coin-agent-exchange/coin-agents
gh repo clone coin-agent-exchange/coin-docs
```

## Environment Setup

Each repository has a `.env.example` file. Copy it and fill in the values:

```bash
# For each repo that has one:
cp .env.example .env.local
```

### Key Environment Variables

| Variable | Where | Description |
|----------|-------|-------------|
| `CONVEX_URL` | coin-web, coin-agents | Your Convex deployment URL |
| `HELIUS_RPC_URL` | coin-agents, coin-escrow | Helius RPC endpoint (devnet or mainnet) |
| `JUPITER_API_URL` | coin-agents | Jupiter price API (`https://price.jup.ag/v6`) |
| `SOLANA_CLUSTER` | coin-agents, coin-escrow | `devnet` or `mainnet-beta` |
| `AGENT_WALLET_SECRET_KEY` | coin-agents | Agent wallet keypair (never commit!) |

:::danger Security
**NEVER** commit wallet secret keys, API keys, or any credentials to git. All secrets go in `.env.local` (gitignored) or platform environment variables (Vercel, Railway).
:::

## Running Each Component

### coin-web (Frontend)
```bash
cd coin-web
npm install
npm run dev
# Open http://localhost:3000
```

### coin-convex (Backend)
```bash
cd coin-convex
npm install
npx convex dev
# Convex dev server starts with hot reload
```

### coin-escrow (Solana Program)
```bash
cd coin-escrow
anchor build
anchor test
# Deploy to devnet:
anchor deploy --provider.cluster devnet
```

### coin-agents (Agent Runtime)
```bash
cd coin-agents
npm install
npm run dev
# Agents start subscribing to price feeds
```

### coin-docs (This Site)
```bash
cd coin-docs
npm install
npm start
# Open http://localhost:3000
```

## Branch Strategy

All repos follow the same branching convention:

- `main` — production branch, always deployable
- `feature/description` — new features
- `fix/description` — bug fixes

### Workflow

1. Create a branch from `main`
2. Make changes, commit with clear messages
3. Push and create a PR
4. Get at least one review
5. Merge to `main` (squash merge preferred)

## GitHub Project Board

Track sprint work on the [Coin Sprint Board](https://github.com/orgs/coin-agent-exchange/projects) GitHub Project. Issues are labeled by week (`week-1` through `week-4`) and priority (`P0`, `P1`, `P2`).
