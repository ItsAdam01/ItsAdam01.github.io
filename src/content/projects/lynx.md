---
title: "Lynx: File Integrity Monitor"
summary: "High-performance security agent built in Go for real-time monitoring and cryptographic verification of file system changes."
date: "Sep 15 2025"
draft: false
tags:
- Go
- fsnotify
- SHA-256
- HMAC
- Discord Webhooks
repoUrl: "https://github.com/ItsAdam01/Lynx"
---

Lynx is a security agent I built in Go to monitor file system changes in real-time. It uses cryptographic hashing to verify that critical files haven't been tampered with and alerts administrators as soon as a mismatch is detected.

### The Challenge
Most FIMs either eat up too much CPU or bury you in alerts. My objective was to make Lynx lightweight enough to run in the background without affecting performance, while also being smart enough to filter out the noise from normal OS activities.

### The Solution
I used Go for its speed and concurrent nature. The agent uses `fsnotify` to listen for kernel-level file events directly. For security, I used SHA-256 for the file hashes and HMAC-SHA256 to sign the 'Source of Truth' baseline. This prevents an attacker from just updating the baseline to match their changes. I also added a 500ms debouncer to handle the 'atomic save' behavior of most modern code editors.

### Security Impact
- **Tamper-Proof Baseline**: Signing the baseline with HMAC means the agent can detect if its own configuration has been modified.
- **Asynchronous Alerting**: I integrated Discord and Slack webhooks so that alerts are sent out immediately without blocking the main monitoring loop.

![Lynx Discord Alerts](/images/lynx-discord-alerts.png)

- **Recursive Watching**: Lynx automatically adds new subdirectories to its watch list, so the security coverage grows as the project does.
