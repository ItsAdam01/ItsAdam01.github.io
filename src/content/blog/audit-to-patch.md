---
title: "Searchable Encryption: The PII Balancing Act"
summary: "How I implemented Blind Indexing at Blueship to secure guest data without breaking search functionality."
date: "Dec 15 2025"
draft: false
tags:
- Next.js
- Encryption
- PII
- PostgreSQL
---

While working on the Blueship resort project, I ran into a classic security conflict: the client needed to search for guests by email, but our audit requirements insisted that all PII had to be encrypted at rest.

If you just encrypt a database column, you can't query it without decrypting everything first, which is a massive performance hit. My solution was to use a 'Blind Index' pattern. I kept the email encrypted with AES-256-GCM for display, but added a secondary column with a one-way HMAC-SHA256 hash of the email. To search, the system just hashes the user's query and checks it against that index. It's fast, compliant, and was easily my favorite technical win of the project.
