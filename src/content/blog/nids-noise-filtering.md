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

Building a WAF sounds simple enough on paper until you actually deploy it. My first attempt was basically a security blanket that smothered the site: it blocked so much that even the CSS and JS files couldn't load.

I quickly learned that regex is a blunt instrument. If you're too aggressive, you break the site; if you're too passive, you're just wasting CPU cycles. I had to pivot to a whitelist-first approach, focusing my inspection rules on actual user-controlled inputs like request bodies and query strings while letting the boring infrastructure traffic pass through. It took some tuning, but I eventually hit that sweet spot where the system stays quiet until a real SQL injection attempt shows up.
