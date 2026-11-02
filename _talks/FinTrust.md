---
title: "Can We Trust LLMs in Finance? Lessons from Three Benchmarks on How Models Read, Judge and Act"
collection: talks
type: "Invited Talk"
permalink: /talks/FinNLP2026
venue: "FinNLP-2026 Workshop, co-located with EMNLP 2026"
date: 2026-10-28
location: "Budapest, Hungary"
---

This invited talk asks a simple question: can we trust large language models (LLMs) in finance? LLMs now sound like financial experts, but sounding right is not the same as being right. The talk answers this question through three benchmarks, each testing a different job that LLMs now do in finance: reading, judging and acting. Each benchmark removes one kind of help that standard evaluations quietly give the model.

**Read: RFC-Bench (ACL 2026).** Can an LLM spot a manipulated financial news paragraph without the original to compare against? Across 1,826 expert-checked pairs and 15 LLMs, the best model reaches only 53.6% on its own, close to a coin flip, but 97.7% when shown the original. A financial professional scores 71.5%.

**Judge: MFMD-Scen (Findings of ACL 2026).** Does an LLM give the same answer to the same claim, regardless of who is asking? Adding a short investor scenario (persona, region or identity) shifts F1 on true claims by up to 28 points, across 144 claims, 4 languages and 22 LLMs.

**Act: HERCULEAN (arXiv 2026).** Can LLM agents complete real financial workflows: trading, hedging, market insights and auditing? Across 30 agent–LLM configurations, no system wins every workflow. Only 7 of 30 make money at hedging, the best auditing accuracy is 54.7%, and strong research reports do not lead to profitable decisions.

The common lesson: in every case, the model is missing a way to check its answer against something it can trust. All data and code are public.

Workshop programme: [FinNLP-2026](https://sigfintech.github.io/finnlp2026/program.html) · HERCULEAN: [paper](https://arxiv.org/abs/2605.14355), [data](https://huggingface.co/datasets/TheFinAI/Herculean), [code](https://github.com/xueqingpeng/trading-analysis), [leaderboard](https://xueqingpeng.github.io/herculean)


[Download presentation here](https://github.com/prayagtiwari/prayagtiwari.github.io/tree/master/files/CanWeTrustLLMsInFinance.pdf)


