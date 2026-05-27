---
title: Jazzhands
date: 2023-11-04
category: competitions
description: Jazzhands is a gesture controlled, action-based rhythm game developed at HackNotts84, showcased at EGX 2024, and featured on the BBC.
---

[Steam Page](https://store.steampowered.com/app/2701220/Jazzhands/) • [BBC World](https://www.bbc.co.uk/news/live/cgqy2dypdw0t?post=asset%3A81099280-9f40-49a9-99e2-8e49f94df069#post) • [Original Devpost](https://devpost.com/software/jazzhands)

Jazzhands is a gesture controlled rhythm game that I co-developed with [Amber](https://www.amber.wiki/). The concept is simple, the player follows on-screen hand choreography whilst a song plays. We use a simple computer vision model to process the gesture in realtime, and process scoring.

We prototyped the idea at [HackNotts84](https://hn84.devpost.com/), where we won overall 1st. Since then, the project has been showcased at research events, demonstrated to [Sir Andrew Witty](https://en.wikipedia.org/wiki/Andrew_Witty), showcased on [BBC World](https://www.bbc.co.uk/news/live/cgqy2dypdw0t?post=asset%3A81099280-9f40-49a9-99e2-8e49f94df069#post), and made an appearance at EGX London 2024 as part of the [Leftfield Exhibit](https://www.egx.net/london/en-gb/things-to-do/panels/panel-information.html?gtID=876544&panel-name=Jazzhands).

#### Initial Jazzhands Prototype

We had developed the first prototype during a 24-hour hackathon, aiming to create something similar to Guitar Hero, but with an AI twist. Since the hackathon had a retro theme, we wanted to make a small arcade machine for it, and make it have multiple levels. The main menu looped an 8-bit rendition of Radiohead’s Creep, while the levels used 8-bit versions of Thriller, Rasputin, and the Tetris theme.

I think that whilst the original version was unpolished, it had some charm and was fun to play. Technically, it was a mess - owing to the time constraints we had bodged together a raw socket connection between the Python computer vision program, and the game interface. The original game files took hours to create, and wound up being alot more difficult than we had anticipated.

<figure class="wake-vortex-figure">
  <img src="{{ '/assets/jazzhands-original.png' | relative_url }}" alt="Original Jazzhands Box" width="240">
  <figcaption>Our original comprised of a laptop wedged into a hand-painted, cardboard façade.</figcaption>
</figure>

#### Rhythm, Rehabilitation and Experimentation
After winning the hackathon, some academics at the [University of Nottingham](https://www.nottingham.ac.uk/) picked up on the idea. We were invited to a few research events, a christmas party and even a robot party. We had opportunity to speak with many ideators, inclduing some medical researchers who wanted to explore using the game to rehabilitate chronic pain patients.

We were invited to the [National Rehabilitation Centre](https://nationalrehabilitationcentre.nhs.uk/) in 2025 to speak with NHS specialists about this. We wanted to make something to help people, but there are strong regulations surrounding the promotion of medical technology, so we were advised to pursue development as a clinical aid. 

<figure class="wake-vortex-figure">
  <img src="{{ '/assets/jazzhands-motioncare.png' | relative_url }}" alt="Motioncare Poster" width="240">
  <figcaption>Myself and Amber presenting Motioncare (Jazzhands) at a research event.</figcaption>
</figure>

In addition to meeting with NHS specialists, we presented both the Jazzhands game and its medical twin to [Sir Andrew Witty](https://en.wikipedia.org/wiki/Andrew_Witty). Speaking to Andrew about this was valuable, as he is a former CEO of GlaxoSmithKline, and was an advidsor to the World Health Organisation during the Coronavirus years. He raised some valuable insights about the strong regulations surrounding medical technology.

We figured that if someone wanted to use Jazzhands to help with chronic pain, then they could do so if we released it. At this point, the project was an open source repository, but inaccessible to the majority of people.  We decided to pursue the release of Jazzhands as a game, on Steam.

#### Steam, EGX, and BBC World
In 2025 we started work on refining Jazzhands into a full game. We decided to string levels together with a small story, and refine the idea into a full product. This was more work than we had anticipated, but we pushed through to get an initial demo. One of my friends (who is an indie game developer) mentioned that we should submit to the [Leftfield Exhibit](https://www.egx.net/london/en-gb/things-to-do/panels/panel-information.html?gtID=876544&panel-name=Jazzhands) for EGX 2024.

Unfortunately, we were over a week late, and our demo barely worked. I sent an email to David at Leftfield with a short video of our game, and to my surprise we were selected to present the idea at EGX 2024. If I have ever felt imposter syndrome, it was on when we first walked into the ExCeL conference centre looking for our stand.

EGX spanned 3 days, and brought together over 150 thousand attendees. This was very useful, we watched how people interacted with the game, and each night we would tinker with the controls on the way back to refine the experience. We would get up at 6am, code changes on the DLR into ExCeL, get back home at 10pm, make improvements until 3am and then wake back up at 6am again. It felt like a groundhog day of continuous improvement, opportunity, and exhaustion.

This peaked when a journalist from the BBC came to our stall. I recall frantically texting Amber that she needed to come back to the stall, so her picture could be on the BBC! Thankfully, Laura was both patient and interested in the project. After our conversation, she wrote two articles about the game, both of which were published to [BBC World](https://www.bbc.co.uk/news/live/cgqy2dypdw0t?post=asset%3A81099280-9f40-49a9-99e2-8e49f94df069#post). To our delight, we went home this night to see Jazzhands on the front-page of Steam, featured as part of a special EGX 2024 promotion.

<figure class="wake-vortex-figure">
  <img src="{{ '/assets/jazzhands-egx.png' | relative_url }}" alt="Motioncare Poster" width="240">
  <figcaption>We dressed up in disco style as characters from the game. We didnt have a sign, so we just sharpied on the walls.</figcaption>
</figure>

Today, we still are yet to release the full version of Jazzhands. We have a [demo](https://store.steampowered.com/app/2701220/Jazzhands/) available, which is collecting wishlists for the full game. We hope to release at some point in the next couple of years, but it is difficult finding time to work on such a project.