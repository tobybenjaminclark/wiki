---
title: Dependent Types for Natural Language (Masters Thesis)
date: 2025-05-11
category: miscellaneous
description: Natural Language Semantics can be encode, represented, and checked using Dependent Type Theory.
---

In the Summer of 2024, I was walking with [Amber](www.amber.wiki) talking about Natural Language. We wanted to build a working pinocchio nose that exerts symbolic logic to detect lies. Tools like large language models are able to detect contradictions in text, but are non-deterministic in nature; we aspired to exploit the underlying mathematical structure of natural language to find and prove contradictions.

Montague proposed that there is no difference between natural languages and the artificial languages of logicians, and Aarne Ranta even proposed the use of Martin Löf Type Theory to model natural language semantics. Since we both were studying Computer Science, we decided to work on a joint thesis with [Professor Thorsten Altenkirch](https://en.wikipedia.org/wiki/Thorsten_Altenkirch) to bring this idea to life.

I think exploratory research went beyond mere Computer Science, collating ideas from Logic, Mathematics, and Philosophy. Our core idea was to deterministically translate a natural language sentence into Agda, then prove contradictions and entailment using the lambda calculus and dependent type theory. 

---

Many people handle the processing of natural langauge using machine learning. We used formal linguistics to convert sentences into applications of left and right associative functors using a [Combinatory Categorial Grammar](https://en.wikipedia.org/wiki/Combinatory_categorial_grammar). This is really interesting, as the majority of natural language sentences can be represented through this form. 

After this, we defined a transformation (based on the lambda calculus) to generate typed records from the sentences, based on an underlying ontology of bundle theory and neutral monism. Complexities aside, a sentence like *'Socrates is a man'* compiles to a record consisting of an entity, and corresponding proofs that such an entity is both socrates and a man.

Our framework supported quantification, and even modal logic (which you can reason over using monads and comonads). We evaluated it on a set of examples, where it was able to reason over many basic english sentences. We even used the method to expose the internal mechanics of the Socrates is a man proof (below).

```
postulate
    Entity : Set
    isSocrates : Entity → Set
    isMan : Entity → Set
    isMortal : Entity → Set
    
record Socratesᵣ : Set where
  constructor Socrates꜀
  field
    e₁ : Entity
    p₁ : isSocrates e₁

record ManSocratesᵣ : Set where
  constructor ManSocrates꜀
  field
    e₁ : Entity
    p₁ : isSocrates e₁
    p₀ : isMan e₁

record Manᵣ : Set where
  constructor Man꜀
  field
    e₁ : Entity
    p₁ : isMan e₁

record IsManMortalᵣ : Set where
  constructor IsManMortal꜀
  field
    p : (a₁ : Manᵣ) → isMortal (Manᵣ.e₁)

record MortalSocratesᵣ : Set where
  constructor MortalSocrates꜀
  field
    e₁ : Entity
    p₁ : isSocrates e₁
    p₀ : isMortal e₁

record KnowledgeBaseᵣ : Set where
  constructor KnowledgeBase꜀
  field
    j₁ : ManSocratesᵣ
    j₂ : IsManMortalᵣ

thm₁ : KnowledgeBaseᵣ → MortalSocratesᵣ
thm₁ = λ z →
  MortalSocrates꜀ (z .KnowledgeBaseᵣ.j₁.e₁)
  (z .KnowledgeBaseᵣ.j₁.p₁)
  (z .KnowledgeBaseᵣ.j₂.p
   (Man꜀ (z .KnowledgeBaseᵣ.j₁.e₁)
    (z .KnowledgeBaseᵣ.j₁.p₀)))
```
