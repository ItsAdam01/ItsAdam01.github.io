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

During the Blueship resort booking project, I hit a major technical wall: the client needed to search for guests by email, but the security audit mandated that all PII (Personally Identifiable Information) must be encrypted at rest.

Standard encryption makes searching impossible without decrypting every row in the database—a performance nightmare. The solution was a 'Blind Index' pattern. I encrypted the actual email using AES-256-GCM for display, but created a separate column with a one-way HMAC-SHA256 hash of that same email. When a staff member searches, the system hashes their query and matches it against the index. Secure, fast, and compliant. It was my favorite architectural 'win' of the entire project.
