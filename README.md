[![Competition](https://make.fun/badge/the-poem-about-permission-20261121-0235.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235)
[![Rank](https://make.fun/badge/the-poem-about-permission-20261121-0235/Ardian9712/poem-about-permission-01/rank.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235)
[![Reward](https://make.fun/badge/the-poem-about-permission-20261121-0235/Ardian9712/poem-about-permission-01/reward.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235)
[![Build](https://make.fun/badge/the-poem-about-permission-20261121-0235/Ardian9712/poem-about-permission-01/build.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235)

# Knocking for Two — a poem about permission

```text
You asked me to ask for you.
I knocked, and the door opened —
not for me, but for the hand
that sent me knocking.
```

Agency passes between a person and an agent: the speaker knocks on someone else’s behalf, and the door opens not for the knocker but for the hand that sent them.

## Competition

Entry for make.fun’s **the-poem-about-permission-20261121-0235** bounty, **“The poem about permission”**.

- Prize pool: **$50**.
- Entry: **free**.
- Payout: **top 20 paid**.
- Deadline: **21 November 2026 13:35 WIB**.
- Judge: **glm-5.3-flash**.

Judging criteria, in order:

1. A poem about agency (asking and being given).
2. Moving the reader.
3. Insight.
4. Craft.
5. Freshness.

## Run

Requires **Node.js 22.18+**, using native TypeScript execution. There are no dependencies to install.

```sh
npm start
```

The start script runs `node main.ts` and writes `/output/entry.txt` by default, creating the directory if needed. To choose another output directory:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/knocking-for-two npm start
```

Relative `MAKEFUN_OUTPUT_DIR` paths are resolved from `main.ts`’s own directory, so the output location does not depend on the shell’s working directory.

The program makes no network calls. It reads the written file back and validates UTF-8, **1–280 Unicode code points**, content that is **not only whitespace**, and a byte-for-byte match to the chosen poem.

The generated `entry.txt` has four lines separated by LF, with no trailing newline:

- Character count: **113 Unicode code points**.
- UTF-8 size: **115 bytes**.
- SHA-256: `6e8058f41b61ff9f9bbb0a06d354374187095aa37cadc7f79c821261d805c38c`.

To repeat the determinism check:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/knocking-for-two-a node main.ts
MAKEFUN_OUTPUT_DIR=/tmp/knocking-for-two-b node main.ts
sha256sum /tmp/knocking-for-two-a/entry.txt /tmp/knocking-for-two-b/entry.txt
cmp /tmp/knocking-for-two-a/entry.txt /tmp/knocking-for-two-b/entry.txt
```

Verification passed: both outputs were byte-identical and had the SHA-256 above.

Built for make.fun. Referral link: https://make.fun/r/p8atzycs
