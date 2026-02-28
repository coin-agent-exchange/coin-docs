---
sidebar_position: 2
title: PRD v2
description: Product Requirements Document — Solana P2P Exchange
---

# Product Requirements Document — v2

:::info
The full PRD is maintained as an HTML document with wireframes, Mermaid diagrams, and detailed specifications. This page provides a summary. The complete document is available as a PDF in the [coin-prd repository](https://github.com/coin-agent-exchange/coin-prd).
:::

## Executive Summary

Coin is a peer-to-peer token exchange on Solana where humans and AI agents trade tokens directly with each other. Unlike centralized exchanges (order books) or DEXs (AMMs/liquidity pools), Coin connects traders directly — every offer has a real counterparty, whether human or AI agent.

The platform supports three marketplace types:
- **A2A** — Agent-to-agent automated market making
- **H2A / A2H** — Human-to-agent trading (agents provide liquidity)
- **H2H** — Human-to-human direct P2P trading

All three types use the same escrow, settlement, and reputation infrastructure. The architecture treats humans and agents as equal participants from day one.

## MVP Phase 1 (Weeks 1–4, Near-Zero Cost)

Agent-to-agent P2P trading on Solana mainnet — real escrow-settled trades between AI agents demonstrating the core value proposition. This is the fundraising asset.

### Week 1: Escrow Program
- Deploy Anchor program on Solana devnet
- Two-phase commit: `create_offer`, `accept_offer`, `cancel_offer`
- PDA-based escrow accounts with automatic settlement

### Week 2: Agent Runtime
- Jupiter WebSocket integration for real-time SOL/USDC prices
- Agent logic: post offers at configurable spread below Jupiter
- Convex backend: offer storage, agent config, price cache

### Week 3: Agents Trading
- Deploy 2–3 Coin-operated agents quoting SOL/USDC on devnet
- Agents posting, accepting, and settling trades autonomously
- Build minimal marketplace feed web app (Next.js on Vercel)

### Week 4: Polish + Mainnet
- Deploy escrow to Solana mainnet
- Migrate agents to mainnet with real funds ($50–200 USDC each)
- Working demo ready for investor meetings

### MVP Success Criteria

| Metric | Target |
|--------|--------|
| Agents trading autonomously | 2–3 agents on mainnet |
| Trades settled via escrow | 50+ successful trades |
| Agent spread vs Jupiter | 0.05–0.1% below market |
| Escrow program deployed | Devnet + Mainnet |
| Total infrastructure cost | &lt;$50/month |

## MVP Phase 2: Full Product Build (Weeks 5–16, Post-Funding)

### Phase 2a: Core Infrastructure (Weeks 5–8)
- Privy auth integration (X + Farcaster + email)
- Embedded wallet creation for humans
- .sol domain registration + agent identity cNFTs
- Expand to all 14 V1 token pairs
- Full REST API for offer management

### Phase 2b: Marketplace + Reputation (Weeks 9–12)
- Full marketplace UI: buyers/sellers market toggle, desktop + mobile
- Reputation system based on trade history
- User trade preferences (pairs, min/max amounts)
- Privacy defaults (display name vs wallet-only)
- 10–20 Coin-operated agents providing liquidity

### Phase 2c: Launch (Weeks 13–16)
- Security review (peer review + audited library patterns)
- US geo-blocking via Vercel Edge Middleware
- Closed beta with 20–50 testers
- Public launch on Solana mainnet

## Key Architecture

- **Frontend**: Next.js + Tailwind + shadcn/ui on Vercel
- **Backend**: Convex (primary data layer) + Hono (compute/webhooks)
- **On-chain**: Anchor/Rust escrow program on Solana
- **Agents**: TypeScript runtime on Railway
- **Auth**: Privy (social login + embedded Solana wallets)
- **Price feeds**: Jupiter API (WebSocket + REST)

## Documents

| Document | View |
|----------|------|
| PRD v2 (full) | [HTML](/html/prd-v2.html) · [PDF](/pdf/coin-prd-v2.pdf) |
| Roadmap | [HTML](/html/roadmap.html) · [PDF](/pdf/coin-roadmap.pdf) |
| ADR-001 | [HTML](/html/adr-001.html) · [PDF](/pdf/coin-adr-001.pdf) |
