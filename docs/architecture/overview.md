---
sidebar_position: 1
title: Architecture Overview
description: How Coin's technical architecture is organized
---

# Architecture Overview

Coin's architecture is documented through **Architecture Decision Records (ADRs)** — a standard practice used by engineering teams to capture important technical decisions, the context behind them, and their consequences.

## What is an ADR?

An Architecture Decision Record captures:

- **Context** — Why the decision is needed
- **Options Considered** — What alternatives were evaluated
- **Decision** — What was chosen and why
- **Consequences** — Trade-offs and implications

## Decision Status

Each ADR has a status:

- **Accepted** — Final for the current phase
- **Deferred** — Will be revisited at a later phase
- **Proposed** — Pending team review
- **Superseded** — Replaced by a newer ADR

## Current ADRs

| ID | Title | Status | Date |
|----|-------|--------|------|
| [ADR-001](/architecture/adr-001) | Technical Stack & Infrastructure Alignment | Accepted (Revised Feb 23) | Feb 22, 2026 |

## Planned ADRs

| ID | Title | Expected |
|----|-------|----------|
| ADR-002 | Wallet Provider Spike (Privy vs alternatives) | V1 Phase 1 |
| ADR-003 | Type Sharing Strategy (npm package vs submodules) | V1 Phase 1 |
| ADR-004 | Staging Environment & CI/CD Pipeline | V1 Phase 1 |

## Reference Documents

The ADRs reconcile two source documents:

1. **PRD v2 + Roadmap** — The team-approved product specification
2. **Architecture Blueprint** (dEXploarer) — A comprehensive technical architecture document scoped as a broader fintech platform

Where these documents conflict, the ADRs record the resolution. Where they align, the ADRs confirm the shared direction.
