# Design: Portfolio Content Strategy & Narrative Construction

## Overview
This design outlines the process for extracting project data from multiple repositories and synthesizing it into professional, recruiter-friendly content for Adam Atienza's portfolio. The goal is to build a coherent story of technical growth in cybersecurity.

## Goals
1.  **Authenticity**: Reflect Adam's actual learning journey and professional contributions.
2.  **Professionalism**: Use resume-quality language for work experience and recruiter-friendly descriptions for projects.
3.  **Efficiency**: Use sub-agents to "interview" existing codebases and extract key technical DNA.
4.  **Consistency**: Maintain the "Adam Atienza" persona (no AI mentions, no em-dashes, EST timezone).

## Timeline & Narrative
- **January - February 2025**: Sentinel Vault (OAuth 2.0 / Identity)
- **March - May 2025**: NIDS (Visibility / Network Security)
- **June - August 2025**: Lynx (Integrity / File System Security)
- **October - December 2025**: Blueship Hardening (Professional / Production Security)
- **January - February 2026**: Portfolio Development

## Data Extraction Strategy
We will dispatch sub-agents to the following locations to extract "Project DNA":
- `Sentinel-Vault/`: OAuth flows and documentation.
- `Network-Intrusion-Detection/`: Packet capturing and alerting logic.
- `lynx/`: Cryptographic hashing and implementation milestones.
- `resort-booking/`: Security audits, privacy improvements, and hardening commits.

## Content Architecture
### 1. Work Experience (`src/content/work/`)
- **Blueship**: Highlight the "win" from the security audit. Focus on privacy and vulnerability mitigation.

### 2. Projects (`src/content/projects/`)
- Medium-form case studies for Sentinel, NIDS, and Lynx.
- Structure: Problem, Solution (Tech Stack), and Security Impact.

### 3. Blog Posts (`src/content/blog/`)
- Atomic, 1st-person insights.
- Focused on specific technical challenges or "aha" moments.

## Tone & Style
- **Voice**: Professional, first-person, technical yet accessible.
- **Constraints**: 
    - NO em-dashes (—).
    - NO mentions of AI or "assistance."
    - EST Timezone for all dates.
    - Standard keyboard-friendly punctuation.

## Success Criteria
- Portfolio content is populated for all major projects and work experience.
- The site renders professional-grade project briefs and blog posts.
- No trace of AI usage is visible in any content.
