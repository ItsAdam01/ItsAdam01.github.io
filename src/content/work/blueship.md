---
company: "Blueship Technologies Inc."
role: "Cybersecurity Specialist (Contract)"
dateStart: "10/01/2025"
dateEnd: "12/31/2025"
---

I worked on the Blueship Resort Booking project to transition their prototype into a production-ready system that meets Philippine Data Privacy Act standards. My focus was on hardening the application stack and securing customer data without compromising site performance. You can find more about the company at [blueship.bernardtapiru.com](https://blueship.bernardtapiru.com).

- Implemented a Blind Indexing pattern for sensitive guest information like emails and phone numbers. I used AES-256-GCM for data at rest and HMAC-SHA256 for searchable hashes, which kept PII private while allowing the staff to query the database efficiently.
- Hardened the Next.js 15 and Payload CMS 3.0 backend by enforcing strict RBAC and validating server actions against origin and referer headers.
- Built-in protection against brute-force and injection attacks using in-memory rate limiting and strict Zod schema validation for all inbound PayMongo payment webhooks.
- Configured production HTTP security headers (CSP, HSTS, X-Frame-Options) to mitigate XSS and clickjacking risks.
