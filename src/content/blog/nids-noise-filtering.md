---
title: "Filtering the Noise: Tuning My First WAF"
summary: "The challenge of balancing security sensitivity with legitimate user traffic in my NIDS project."
date: "May 10 2025"
draft: false
tags:
- Network Security
- Python
- Regex
---

Building a Web Application Firewall (WAF) sounds straightforward until you actually turn it on. My first iteration blocked almost everything—including the CSS and JS files the site needed to function.

The lesson? Regex is powerful but blunt. I had to pivot from 'scan everything' to a targeted whitelist approach. I focused my inspection rules specifically on user-controlled inputs like request bodies and query parameters while ignoring static assets and infrastructure headers. It was a classic trade-off: security vs. usability. By the end, I had a system that was quiet during normal use but screamed when it saw an actual SQL injection pattern.
