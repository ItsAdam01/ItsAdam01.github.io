---
company: "Blueship Technologies Inc."
role: "Cybersecurity Specialist (Contract)"
dateStart: "10/01/2025"
dateEnd: "12/31/2025"
---

I was brought into the Blueship Resort Booking project to lead a comprehensive security overhaul, transforming a functional prototype into a production-ready system compliant with the Philippine Data Privacy Act. My work focused on securing sensitive guest data and establishing a zero-trust architecture across the application stack.

- Implemented a Blind Indexing pattern for PII (emails and phone numbers), using AES-256-GCM for encryption and HMAC-SHA256 for searchable hashes, ensuring data privacy at rest while maintaining query performance.
- Hardened the Next.js 15 and Payload CMS 3.0 infrastructure by enforcing strict role-based access controls (RBAC) and validating all server actions against origin and referer headers.
- Mitigated automated threats and injection attacks by implementing in-memory rate limiting and deep schema validation with Zod for all inbound webhook payloads.
- Configured production-grade HTTP security headers, including Content Security Policy (CSP) and HSTS, to protect against common web vulnerabilities like XSS and clickjacking.
