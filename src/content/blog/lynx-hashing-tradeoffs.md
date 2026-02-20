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

The core of my file monitor, Lynx, is a loop that calculates SHA-256 hashes. It works great for a few config files, but as soon as I started watching a full project directory, my CPU usage went through the roof.

The fix wasn't some complex cryptographic optimization. I just needed to understand how modern IDEs actually save files. Most of them do 'atomic saves' where they create and delete temporary files in rapid succession. Lynx was trying to re-hash everything five times for a single 'Ctrl+S'. By adding a 500ms debouncer, I merged those events into a single action. It was a good reminder that the best performance fix is often just a bit of practical system knowledge.
