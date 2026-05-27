---
title: Automated Verification of Pruning Rules for Runway Sequencing
date: 2026-08-01
publisher: PATAT
publisher_url: https://patatconference.org/patat2026/
description: A placeholder for a published article, paper, essay, or long-form piece.
---

[Paper Download](https://raw.githubusercontent.com/tobybenjaminclark/rsp-smt/main/Automated%20Verification%20of%20Pruning%20Rules%20for%20Runway%20Sequencing.pdf) • [Github Repository](https://github.com/tobybenjaminclark/rsp-smt/tree/main)

Runway sequencing is an NP-hard combinatorial optimisation problem concerned with determining an efficient ordering of aircraft subject to operational constraints. It is difficult to solve problem instances exactly, as the number of solutions grows factorially to the number of aircraft. For many airports, sequencing is a real-time, safety-critical timetabling problem; pairs of aircraft must maintain a minimum time separation, as they leave behind swirling [wake vortices](https://en.wikipedia.org/wiki/Wake_turbulence).

<figure class="wake-vortex-figure">
  <img src="{{ '/assets/wake-vortex.png' | relative_url }}" alt="Wake Vortices" width="240">
  <figcaption>Wake vortices are dangerous because they can destabilise an aircraft that flies through them.</figcaption>
</figure>

Despite the NP-hardness of the general formulation, practical runway sequencing instances often exhibit structural characteristics that can be exploited to find optimal solutions in realtime. That is, the regulatory and real-world semantics of the problem model admit additional structure that can leveraged to safely discard entire regions of the search space, making exact optimisation tractable.

Many exact solutions exploit this structure using pruning rules, which characterise regions of the search space provably dominated by another region. These allow algorithms to effectively 'ignore' entire subtrees. One example of a pruning rule is where two aircraft have an order on release times, if one is available before the other, then it is never worse to sequence the earlier aircraft first.

This simple rule is able to eliminate all sequences in which the later aircraft is sequenced first, for every pair of aircraft where such a property holds. There are several more pruning rules described in both this paper, and the original [[1]](https://www.jstor.org/stable/pdf/48747932.pdf). The rules rely on underlying mathematical proof that the pruned region is always dominated by the retained region, but such proof is manually derived, and often necessitates deep domain-knowledge.

#### Contribution
Our paper proposes the use of [Satisfiability Modulo Theories](https://en.wikipedia.org/wiki/Satisfiability_modulo_theories) for the verification of complete and conditional-order pruning rules for the Runway Sequencing Problem. We provide machine-checked correctness guarantees for several rules in [[1]](https://www.jstor.org/stable/pdf/48747932.pdf), and establish a automated verification framework for the quickly checking new rules and problem variants.

SMT enables automated, symbolic reasoning over constraints in rich background theories, and has become a standard tool for the automated verification of programs. Our approach interprets pruning rule correctness as a logical invariant of the problem model, rather than a modification to the search procedure. Specifically, we use the [Z3 Theorem Prover](https://github.com/z3prover/z3) to verify the following attributes:

1. Pruning Rules must never prune away a better solution, if both branches are equally optimal, then one may be pruned.
2. Pruning Rules must be non-vacuous, meaning they must trigger in atleast one feasible configuration (this is an artefact of proof-by-unsatisfiability).

This work is intended to form the basis of a future pruning rule synthesis methodology to automatically discover and prove new rules in other Single Machine Scheduling Problems.

---

[[1] Pruning Rule for Optimal Runway Sequencing. Geert De Maere, Jason A. D. Atkin, Edmund K. Burke](https://www.jstor.org/stable/pdf/48747932.pdf)
