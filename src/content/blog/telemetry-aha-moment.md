---
title: "Beyond Login: The Importance of Audit Telemetry"
summary: "Why I spent more time on logging than on the actual authentication flow in Sentinel Vault."
date: "Feb 25 2025"
draft: false
tags:
- OAuth 2.0
- Security
- Node.js
---

When I first started building Sentinel Vault, I thought the 'hard part' would be getting the OAuth 2.0 handshake to work with Passport.js. While the configuration was definitely a headache, the real 'aha' moment came after the login was finished.

I realized that just knowing someone is 'authorized' isn't enough for a secure system. You need to know the context. By integrating `ua-parser-js` and logging every IP address and browser profile, I turned a simple login page into a security dashboard. Now, if an authorized user suddenly logs in from a different OS or a suspicious IP, the system doesn't just let them in—it flags it. Security is as much about visibility as it is about access.
