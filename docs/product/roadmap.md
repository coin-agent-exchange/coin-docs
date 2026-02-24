---
sidebar_position: 3
title: Product Roadmap
description: Coin development roadmap from MVP through V4+
---

# Product Roadmap

:::info
The full roadmap is maintained as an HTML document with Gantt charts, detailed timelines, and cost breakdowns. This page provides a summary. The complete document is available as a PDF in the [coin-prd repository](https://github.com/coin-agent-exchange/coin-prd).
:::

## Roadmap Philosophy

Every feature earns its place by solving a specific user problem or unblocking a specific growth bottleneck. The team does not advance to the next phase until the current phase's success metrics are confirmed.

## Timeline Overview

| Phase | Duration | Budget | Gate |
|-------|----------|--------|------|
| **MVP** (Weeks 1–4) | 4 weeks | &lt;$50/mo + $200 seed | Working mainnet demo |
| *Funding Period* | ~3 weeks | — | Secure $200–350K |
| **V1 Phase 1** (Weeks 5–8) | 4 weeks | ~$4K/mo | Auth + wallets + agents on devnet |
| **V1 Phase 2** (Weeks 9–12) | 4 weeks | ~$4K/mo | Marketplace + reputation live |
| **V1 Phase 3** (Weeks 13–16) | 4 weeks | ~$4K/mo | Public launch on mainnet |
| **V2** (Months 5–10) | 6 months | Fee revenue | Mobile + fiat + 3rd-party agents |
| **V3** (Months 11–16) | 6 months | Fee revenue | Multi-agent + privacy + institutional |
| **V4+** (Month 17+) | Ongoing | Fee revenue | Token + governance + multi-chain |

## MVP (Weeks 1–4) — Near-Zero Cost

**Goal**: Agent-to-agent trading demo on Solana mainnet for investor meetings.

- Week 1: Anchor escrow program on devnet
- Week 2: Agent runtime + Jupiter price feeds + Convex backend
- Week 3: 2–3 agents trading SOL/USDC on devnet + minimal web UI
- Week 4: Mainnet deploy + polish + investor demo

**Infrastructure**: All free tiers — Vercel, Convex, Helius RPC, Solana devnet.

## V1 (Weeks 5–16) — Post-Funding Build

### Phase 1: Core Infrastructure (Weeks 5–8)
- Privy auth (X + Farcaster + email login)
- Embedded Solana wallets for humans
- .sol domain registration
- Agent identity cNFTs
- 10–20 agents covering all 14 V1 token pairs

### Phase 2: Marketplace + Reputation (Weeks 9–12)
- Buyers/sellers market toggle
- Full marketplace UI (desktop table + mobile cards)
- Reputation system (trade completion rate, volume, disputes)
- User trade preferences
- Privacy controls

### Phase 3: Launch (Weeks 13–16)
- Security review
- US geo-blocking
- Closed beta → public launch
- All Coin-operated agents on mainnet

## V2 (Months 5–10) — Growth

**Entry gate**: Daily GMV >$50K, 100+ active human traders.

- Native mobile apps (React Native + Expo)
- Fiat on-ramp (MoonPay / Transak)
- Third-party agent marketplace
- Social reputation (X integration)
- Advanced trading (limit orders, price alerts)

## V3 (Months 11–16) — Scale

**Entry gate**: 1,000+ daily traders, $500K+ daily GMV sustained 30 days.

- Multi-agent support (multiple agents per user)
- Light Protocol privacy features
- Streaming micropayments (x402)
- Institutional API access
- DEX aggregator integrations

## V4+ (Month 17+) — Ecosystem

**Entry gate**: Proven PMF, sustainable revenue.

- COIN token launch + governance
- Multi-chain expansion (evaluate Wormhole)
- Enterprise features
- Open SDK for third-party embedding
- Decentralized governance

## Cost Breakdown

### MVP Infrastructure (Free Tier)

| Service | Plan | Cost |
|---------|------|------|
| Vercel | Hobby | $0 |
| Convex | Starter | $0 |
| Helius RPC | Free (100K/day) | $0 |
| Solana devnet | Free | $0 |
| Mainnet seed | $50–200 USDC | One-time |
| **Total** | | **&lt;$50/mo** |

### Post-Funding Infrastructure (~$4K/mo)

| Category | Cost | Notes |
|----------|------|-------|
| Infrastructure | ~$4,000/mo | Vercel Pro, Convex (self-hosted on Railway), Helius Growth, Railway |
| Smart Contract Audit | $30–80K | Deferred to V2 |
| Legal | $20–50K | Wyoming DAO LLC, contributor agreement, ToS |
