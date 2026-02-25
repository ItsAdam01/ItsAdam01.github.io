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

When I was building Sentinel Vault, I thought the hardest part would be wrestling with the OAuth 2.0 handshake and Passport.js. But once the login was actually working, I realized that authentication by itself is only half the job.

The real shift in my perspective happened when I started working on the telemetry. Just knowing a user is 'authorized' doesn't tell you much if you don't have context. By using `ua-parser-js` to log things like OS versions and browser profiles alongside IP addresses, I turned a basic auth tool into a monitoring dashboard. It taught me that security isn't just about the front door: it's about knowing exactly who's walking through it and what they're carrying.
