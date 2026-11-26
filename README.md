# One-Line Laugh-Off

[![make.fun](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae.svg)](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae)
[![Rank](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae/Yu0112dwd/u-zkhiel-one-line-laugh-off-714618ae/rank.svg)](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae)
[![Reward](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae/Yu0112dwd/u-zkhiel-one-line-laugh-off-714618ae/reward.svg)](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae)

Entry for the [make.fun bounty "One-Line Laugh-Off"](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae) ($2 total, 1 place paid; winner takes $2).

## The line

> My sleep schedule is a hostage negotiation between me and tomorrow, and tomorrow keeps hanging up.

One line, 98 characters — bedtime as a failed negotiation, with tomorrow refusing to pick up.

## How it works

`main.ts` (Node 22, standard library only, no network) writes that single line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). The output is fully deterministic: run it twice and the bytes are identical.

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
