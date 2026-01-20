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

This project represents my deep dive into network-layer security. I developed a combined Network Intrusion Detection System (NIDS) and Web Application Firewall (WAF) to provide defense-in-depth for web environments.

### The Challenge
Monitoring network traffic in real-time requires balancing depth of inspection with performance. My objective was to create a system that could detect both high-level application attacks (like SQLi) and low-level network threats (like SYN floods) while streaming alerts to a live dashboard without noticeable lag.

### The Solution
The backend is powered by Python and Scapy, which allows for raw packet sniffing and inspection across TCP, UDP, and ICMP protocols. I implemented a hybrid detection engine: signature-based matching using regex for common web exploits, and rate-based logic for detecting volumetric attacks like Port Scans. Alerts are streamed via Flask-SocketIO to a React-based frontend designed with a terminal aesthetic.

### Security Impact
- **L2/L3 Visibility**: Solved the Linux loopback sniffing hurdle by utilizing Layer 2 sockets with custom Ethernet headers, ensuring local simulation traffic was captured correctly.
- **Attack Simulation**: Integrated a built-in simulator to verify detection rules against live (but controlled) attack patterns.
- **Noise Mitigation**: Refined regex patterns through a targeted whitelist approach, significantly reducing false positives in the WAF layer.
