---
name: code-execution notebook quirks
description: Hard limits of the code_execution sandbox that bite long-running scraping/IO loops
---

# code_execution notebook quirks

- **State is wiped on restart.** Long calls can trip an internal restart ("notebook was no longer found"), and every `globalThis`/variable is gone. Do **not** rely on notebook memory to accumulate results across calls.
- **Per-call wall-clock limit is ~600s.** A single `code_execution` that loops `webFetch` over a few hundred URLs will time out before finishing.

**Why:** Both happened while building the Brisbane leads list — a 449-URL fetch loop timed out at 600s, and a later check found the notebook had restarted with all state lost.

**How to apply:** For batch web research / large IO, persist progress to disk after every chunk (e.g. JSON files under `.local/state/<task>/`), keep an `attempted` set so you can resume, and process in time-boxed chunks (~50–140 fetches per call with ~20 concurrency). Re-read from disk at the top of each call; never assume in-memory state survived.
