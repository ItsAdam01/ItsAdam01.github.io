---
title: "SHA-256 vs. Real-Time Performance"
summary: "How I solved the performance bottleneck in Lynx by knowing when not to calculate hashes."
date: "Aug 15 2025"
draft: false
tags:
- Go
- Cryptography
- Performance
---

In Lynx, the core operation is calculating a SHA-256 hash for every monitored file. It works perfectly for a handful of config files, but when you're watching a massive project directory, the CPU spikes can get intense.

The biggest performance win wasn't actually a faster hashing algorithm—it was implementing a 500ms debouncing mechanism. Modern IDEs perform 'atomic saves' where they delete and recreate a file multiple times in a split second. By adding a small cooldown period, I prevented Lynx from recalculating hashes five times for a single 'Save' command. It taught me that sometimes the best security optimization is simply understanding the behavior of the system you're trying to protect.
