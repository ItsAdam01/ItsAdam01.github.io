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

I built Sentinel Vault to explore the mechanics of modern identity management and the critical role of visibility in security operations. The project serves as a proof-of-concept for integrating GitHub OAuth 2.0 and capturing granular telemetry for every access event.

### The Challenge
Most applications treat authentication as a 'black box'—either a user is in or they are out. I wanted to build a system where 'getting in' was just the beginning. The goal was to implement a standard OAuth 2.0 flow while simultaneously logging the environmental context of every session to detect anomalies.

### The Solution
The system is built on Node.js and Express, utilizing Passport.js for the GitHub Authorization Code flow. To achieve high visibility, I integrated `ua-parser-js` to decompose user agents into readable device and OS profiles. Every event (successful logins, failed access attempts, unauthorized route hits) is captured in a SQLite database with the user's IP and detailed browser telemetry.

### Security Impact
- **Comprehensive Audit Trail**: Created a system that records not just 'who' logged in, but 'what' they used and 'where' they came from.
- **Real-time Monitoring**: Developed a dashboard with visual severity levels (INFO, WARN, ALERT) to provide an immediate overview of system health.
- **Session Integrity**: Enforced strict session-based route protection, ensuring the 'Vault' and 'Audit' logs remain inaccessible to unauthorized users.
