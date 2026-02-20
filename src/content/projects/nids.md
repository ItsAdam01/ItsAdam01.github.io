---
title: "Network Intrusion Detection & WAF"
summary: "A dual-layer security monitoring system with real-time signature matching and anomaly detection."
date: "May 23 2025"
draft: false
tags:
- Python
- Flask
- Scapy
- React
- Socket.IO
- Docker
repoUrl: "https://github.com/ItsAdam01/Network-Intrusion-Detection"
---

I built this combined NIDS and WAF to practice defense-in-depth on the network layer. It provides real-time monitoring and alerting for both low-level protocol attacks and application-level vulnerabilities.

### The Challenge
The main issue with real-time network monitoring is performance. I needed a system that could sniff raw packets and run regex patterns against payloads without lagging out the dashboard. It also had to distinguish between a regular user and a volumetric attack like a SYN flood.

### The Solution
I used Python and Scapy for the heavy lifting. Scapy allowed me to inspect traffic at the TCP, UDP, and ICMP levels. For the detection logic, I went with a hybrid approach: signature-based matching for web exploits (SQLi, XSS) and rate-based logic for things like Port Scans. The frontend is a React dashboard that receives live alerts via Socket.IO, giving it a real-time terminal feel.

### Security Impact
- **Full Packet Visibility**: I used Layer 2 sockets with custom Ethernet headers to solve the Linux loopback hurdle, making sure local attack simulations were actually captured by the sniffer.
- **Controlled Testing**: I added a built-in attack simulator so I could verify that my rules were actually triggering on real payloads.
- **WAF Tuning**: I implemented a whitelist-heavy approach for scanning headers, which cut down on the false positives that usually plague basic regex firewalls.
