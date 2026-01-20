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

Lynx is a real-time security agent designed to safeguard file system integrity. Built in Go, it monitors critical system files and notifies administrators immediately if unauthorized changes occur, using cryptographic proof to ensure the 'Source of Truth' remains untampered.

### The Challenge
File integrity monitors often suffer from two main issues: performance overhead and 'alert fatigue' caused by the frequent file events triggered by modern operating systems. My goal was to create a lightweight agent that could handle kernel-level events efficiently while filtering out the noise of normal system activity.

### The Solution
I chose Go for its concurrency model and high-performance execution. Lynx utilizes the `fsnotify` library to listen for kernel file events directly. To ensure security, I implemented SHA-256 content hashing and protected the baseline configuration with HMAC-SHA256 signatures. I also developed a custom 500ms debouncing mechanism to merge the multiple rapid-fire events caused by 'atomic saves' into a single, meaningful alert.

### Security Impact
- **Self-Protecting Baseline**: By signing the baseline file with HMAC, Lynx ensures that even if an attacker gains local access, they cannot modify the 'Source of Truth' to hide their activity.
- **Real-time Alerting**: Integrated asynchronous Discord and Slack webhooks, allowing for immediate remote notification of critical integrity failures.
- **Recursive Security**: Built-in support for recursive directory watching ensures that the security perimeter automatically expands as new folders are created.
