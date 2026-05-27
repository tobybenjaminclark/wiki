---
title: Automated Verification of Pruning Rules for Runway Sequencing
date: 2026-08-01
publisher: PATAT
publisher_url: https://patatconference.org/patat2026/
description: A placeholder for a published article, paper, essay, or long-form piece.
---

[Paper Download](https://raw.githubusercontent.com/tobybenjaminclark/rsp-smt/main/Automated%20Verification%20of%20Pruning%20Rules%20for%20Runway%20Sequencing.pdf) • [Github Repository](https://github.com/tobybenjaminclark/rsp-smt/tree/main)

Runway sequencing is an NP-hard combinatorial optimisation problem concerned with determining an efficient ordering of aircraft subject to operational constraints. It is difficult to solve exactly, as the number of solutions grows factorially to the number of aircraft. It is also safety-critical; pairs of aircraft must maintain a minimum time separation, as they leave behind swirling [wake vortices](https://en.wikipedia.org/wiki/Wake_turbulence).

<figure class="wake-vortex-figure">
  <img src="{{ '/assets/wake-vortex.png' | relative_url }}" alt="Wake Vortices" width="240">
  <figcaption>Wake vortices are dangerous because they can destabilise an aircraft that flies through them.</figcaption>
</figure>

Many exact approaches rely on pruning rules, which characterise regions of the search space provably dominated by another region. These allow algorithms to effectively 'ignore' entire subtrees. One example of a pruning rule is where two aircraft have an order on release times, if one is available before the other, then it is never worse to sequence the earlier aircraft first.

This simple rule is able to eliminate all sequences in which the later aircraft is sequenced first, for every pair of aircraft where such a property holds. There are several more pruning rules described in both this paper, and the original [[1]](https://www.jstor.org/stable/pdf/48747932.pdf). The rules rely on underlying mathematical proof that the pruned region is always dominated by the retained region, but such proof is manual, and necessitates deep domain-knowledge.

Our paper proposes the use of [Satisfiability Modulo Theories](https://en.wikipedia.org/wiki/Satisfiability_modulo_theories) for the verification of complete and conditional-order pruning rules for the Runway Sequencing Problem. We show how a finite sequence abstraction can be used to quickly check new rules, allowing iterative pruning rule development. This work provides a basis for the future synthesis of pruning rules. Our methodology is detailed in the paper, with accompanying executable notebooks included in the code repository.



---

[[1] Pruning Rule for Optimal Runway Sequencing. Geert De Maere, Jason A. D. Atkin, Edmund K. Burke](https://www.jstor.org/stable/pdf/48747932.pdf)
