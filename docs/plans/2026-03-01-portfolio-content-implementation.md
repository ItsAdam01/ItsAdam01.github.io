# Portfolio Content Extraction & Synthesis Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Extract technical and narrative data from four repositories and synthesize it into professional Astro content collections for Adam Atienza's portfolio.

**Architecture:** 
1.  **Extraction**: Sequential dispatch of sub-agents to Sentinel Vault, NIDS, Lynx, and Blueship repositories to generate "DNA Reports."
2.  **Synthesis**: Transform reports into Astro-compatible Markdown using `human-writing` skill for persona alignment.
3.  **Integration**: Populate `src/content/` collections and verify rendering.

**Tech Stack:** Astro, Markdown, Bash, `codebase_investigator`, `human-writing`

---

### Task 1: Extract DNA from Sentinel Vault (OAuth 2.0)

**Files:**
- Create: `adam-portfolio/astro-portfolio/ai_docs/sentinel-vault-dna.md`

**Step 1: Dispatch sub-agent to Sentinel-Vault**
Run `codebase_investigator` on `./Sentinel-Vault` to extract:
- Core tech stack (likely Go or Node.js).
- Specific OAuth 2.0 flows implemented (e.g., Auth Code + PKCE).
- Security features (state validation, token storage).
- Timeline verification from git history.

**Step 2: Save DNA report**
Write the findings to `ai_docs/sentinel-vault-dna.md`.

---

### Task 2: Extract DNA from NIDS (Network Security)

**Files:**
- Create: `adam-portfolio/astro-portfolio/ai_docs/nids-dna.md`

**Step 1: Dispatch sub-agent to Network-Intrusion-Detection**
Run `codebase_investigator` on `./Network-Intrusion-Detection` to extract:
- Packet capturing method (e.g., `gopacket`, `libpcap`).
- Detection logic (rule-based vs. anomaly-based).
- Alerting mechanisms and UI components.
- Key security challenges documented in `docs/`.

**Step 2: Save DNA report**
Write findings to `ai_docs/nids-dna.md`.

---

### Task 3: Extract DNA from Lynx (File Integrity)

**Files:**
- Create: `adam-portfolio/astro-portfolio/ai_docs/lynx-dna.md`

**Step 1: Dispatch sub-agent to lynx**
Run `codebase_investigator` on `./lynx` to extract:
- Cryptographic choices (SHA-256 rationale).
- Event handling logic for file changes.
- Implementation story milestones from `site/content/docs`.
- Verification of the June–August 2025 timeline.

**Step 2: Save DNA report**
Write findings to `ai_docs/lynx-dna.md`.

---

### Task 4: Extract DNA from Blueship (Experience)

**Files:**
- Create: `adam-portfolio/astro-portfolio/ai_docs/blueship-dna.md`

**Step 1: Dispatch sub-agent to resort-booking**
Run `codebase_investigator` on `./resort-booking` (feature branch) to extract:
- Audit report findings (before/after).
- Specific hardening commits (privacy, SQLi prevention, etc.).
- Development journey from `.ai/` folder.
- Professional "wins" using recruiter-friendly metrics.

**Step 2: Save DNA report**
Write findings to `ai_docs/blueship-dna.md`.

---

### Task 5: Synthesize "Work Experience" (Blueship)

**Files:**
- Create: `src/content/work/blueship.md`

**Step 1: Draft with human-writing skill**
Transform `blueship-dna.md` into a resume-style entry.
- Role: Cybersecurity Specialist (Contract).
- Dates: Oct 2025 - Dec 2025.
- Tone: Senior, result-oriented.

**Step 2: Commit**
Use `git-commit-as` with a realistic timestamp.

---

### Task 6: Synthesize Project Case Studies

**Files:**
- Create: `src/content/projects/sentinel-vault.md`
- Create: `src/content/projects/nids.md`
- Create: `src/content/projects/lynx.md`

**Step 1: Draft each case study**
Use DNA reports to write medium-form content (Problem/Solution/Security Impact).
- Ensure no AI mentions.
- Use EST timestamps matching the project timeline.

**Step 2: Commit each**
Use `git-commit-as`.

---

### Task 7: Synthesize Atomic Blog Posts

**Files:**
- Create: `src/content/blog/pkce-vs-implicit.md`
- Create: `src/content/blog/nids-noise-filtering.md`
- Create: `src/content/blog/lynx-hashing-tradeoffs.md`
- Create: `src/content/blog/audit-to-patch.md`

**Step 1: Draft atomic posts**
Focused on 1st-person "aha" moments.
- Semi-formal tone.
- Technical but accessible.

**Step 2: Commit each**
Use `git-commit-as`.

---

### Task 8: Verification & Cleanup

**Step 1: Run Astro Check**
`npm run build` to ensure all content renders correctly.

**Step 2: Verify Timeline**
Check the `/blog`, `/projects`, and `/work` pages locally to ensure sorting and dates are accurate.

**Step 3: Cleanup ai_docs**
Ensure `ai_docs/` is ignored by git (already in `.git/info/exclude` as per design).
