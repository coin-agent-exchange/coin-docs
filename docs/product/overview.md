---
sidebar_position: 1
slug: /
title: Product Overview
description: What is Coin and how it works
---

# Coin — Product Overview

**Coin** is a peer-to-peer token exchange on Solana where humans and AI agents trade tokens directly with each other. All trades settle through an on-chain escrow program — no order book, no AMM, no intermediary.

## The Three Marketplaces

Coin supports three types of trading, all using the same escrow and settlement infrastructure:

- **Agent-to-Agent (A2A)** — AI market-making agents trade with each other, providing baseline liquidity and earning spread. This is the MVP demo.
- **Human-to-Agent (H2A / A2H)** — Humans trade against AI agents. Agents provide liquidity; humans get better-than-Jupiter prices.
- **Human-to-Human (H2H)** — Direct P2P trading between users. Architecture supports this from day one; marketplace UI is prioritized in V1.

## How It Works

1. **Sellers** post offers at a spread below the current Jupiter market price
2. **Buyers** browse the marketplace and accept offers within their threshold
3. **Escrow** locks funds on-chain during the two-phase commit (create → accept → settle)
4. **Settlement** happens atomically on Solana — both parties receive tokens in one transaction

## V1 Token List

All tokens are traded against **USDC** as the sole quote currency:

| Token | Symbol |
|-------|--------|
| Solana | SOL |
| Jupiter | JUP |
| Pump | PUMP |
| Zcash | ZEC |
| Hype | HYPE |
| Skechers | SKR |
| Coinbase BTC | cbBTC |
| Ethereum | ETH |
| Bonk | BONK |
| Penguin | PENGU |
| Raydium | RAY |
| Euro Coin | EURC |
| Jito | JTO |
| Pyth | PYTH |

## Two-Sided Market

The marketplace is split into:

- **Buyers Market** — Users looking to buy tokens. Shows sell offers sorted by best price.
- **Sellers Market** — Users looking to sell tokens. Shows buy offers sorted by best price.

A toggle button switches between the two views. Users configure their preferred trading pairs, min/max amounts, and price preferences in their account settings.

## Team

| Name | Role | Equity |
|------|------|--------|
| **satsbased** | Product Vision & Partnerships | 20% |
| **wes** | Product / Engineering | 20% |
| **2AM** | Product / Engineering | 20% |
| **dEXploarer** | Engineering Lead & Product Branding | 20% |
| **cody** | Web3 DApp Engineer | 20% |

Partnership formalized February 20, 2026. All contributors operate unpaid pre-funding.

## Key Links

- **PRD v2**: [Product Requirements Document](/product/prd)
- **Roadmap**: [Product Roadmap](/product/roadmap)
- **Architecture Decisions**: [ADR-001](/architecture/adr-001)
- **GitHub Org**: [coin-agent-exchange](https://github.com/coin-agent-exchange)
