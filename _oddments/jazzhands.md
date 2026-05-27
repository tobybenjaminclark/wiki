---
title: Jazzhands Game
date: 2023-11-04
category: competitions
description: Jazzhands is a gesture controlled, action-based rhythm game developed at HackNotts84.
---

[Steam Page](https://store.steampowered.com/app/2701220/Jazzhands/) • [BBC World](https://www.bbc.co.uk/news/live/cgqy2dypdw0t?post=asset%3A81099280-9f40-49a9-99e2-8e49f94df069#post) • [Original Devpost](https://devpost.com/software/jazzhands)

Jazzhands is a gesture controlled rhythm game that I co-developed with [Amber Swarbrick](https://www.amber.wiki/). The concept is simple, the player follows on-screen hand choreography whilst a song plays. We use a simple computer vision model to process the gesture in realtime, and process scoring.

We prototyped the idea at [HackNotts84](https://hn84.devpost.com/), where we won overall 1st. Since then, the project has been showcased at research events, demonstrated to [Sir Andrew Witty](https://en.wikipedia.org/wiki/Andrew_Witty), showcased on [BBC World](https://www.bbc.co.uk/news/live/cgqy2dypdw0t?post=asset%3A81099280-9f40-49a9-99e2-8e49f94df069#post), and made an appearance at EGX London 2024 as part of the [leftfield exhibit](https://www.egx.net/london/en-gb/things-to-do/panels/panel-information.html?gtID=876544&panel-name=Jazzhands).

#### Hackathon Prototype

We had developed the first prototype during a 24-hour hackathon, aiming to create something similar to Guitar Hero, but with an AI twist. Since the hackathon had a retro theme, we wanted to make a small arcade machine for it, and make it have multiple levels. The main menu looped an 8-bit rendition of Radiohead’s Creep, while the playable levels used 8-bit versions of Thriller, Rasputin, and the Tetris theme.

I think that whilst the original version was unpolished, it had some charm and was fun to play. Technically, it was a mess - owing to the time constraints we had bodged together a raw socket connection between the Python computer vision program, and the game interface. The original game files took hours to create, and wound up being alot more difficult than we had anticipated.

<figure class="wake-vortex-figure">
  <img src="{{ '/assets/jazzhands-original.png' | relative_url }}" alt="Original Jazzhands Box" width="240">
  <figcaption>The original Jazzhands setup comprised of a laptop wedged into a hand-painted, cardboard façade.</figcaption>
</figure>
