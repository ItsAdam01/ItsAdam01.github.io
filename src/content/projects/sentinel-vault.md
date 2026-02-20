---
title: "Sentinel Vault: Identity & Access Management PoC"
summary: "Secure OAuth 2.0 integration with detailed audit telemetry and real-time security monitoring."
date: "Feb 20 2025"
draft: false
tags:
- Node.js
- Express
- OAuth 2.0
- Passport.js
- SQLite
repoUrl: "https://github.com/ItsAdam01/Sentinel-Vault"
---

Sentinel Vault is a proof-of-concept I built to look deeper into identity management. I wanted to move beyond just 'letting users in' and focus on the technical context of every access event through detailed telemetry.

### The Challenge
Most apps treat auth as a black box. Once a user is in, the system stops asking questions. I wanted to build something where 'getting in' was just the start. The goal was to implement a standard GitHub OAuth flow while logging the environmental data of every session to spot potential anomalies early.

### The Solution
I built the backend with Node.js and Express, using Passport.js for the Authorization Code flow. To get the visibility I wanted, I used `ua-parser-js` to break down user agents into OS and device profiles. I logged everything—login successes, failed attempts, and unauthorized route hits—into a SQLite database along with the user's IP and telemetry.

### Security Impact
- **Granular Audit Logs**: The system tracks exactly who logged in, what device they used, and their location (via IP).
- **Security Dashboard**: I developed a simple monitoring view with INFO, WARN, and ALERT severity levels to give a quick overview of system health.
- **Protected Routes**: I enforced strict session checks so that sensitive areas like the Vault and Audit logs stay restricted to authorized users only.
