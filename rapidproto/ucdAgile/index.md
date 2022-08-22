---
title: UCD and Agile
author: Mick McQuaid
date: 2022-07-10
bibliography: master.bib
format:
  revealjs:
    theme: moon
    css: style.css
    transition: slide
    background-transition: fade
    preview-links: auto
    controls: true
    controls-layout: bottom-right
---

# Intro

Most of this material comes from a NordiCHI conference workshop on UCD and Agile, documented in @Cockton2016.

## What is UCD (User Centered Design)?
- When did it start?
- What was the software environment in which it began?
- How has it developed?
- How can it be integrated with Agile development?

::: {.notes}
First we'll talk a little about UCD, then a little about Agile, then both. We can start by answering a few questions about UCD.

(then read the slide)
:::

## Some facts about UCD
- It started in the eighties, as a result of plummeting hardware costs, leading to the rise of casual users
- Software engineering at the time was concerned with the software artifact, not users, and waterfall processes dominated the landscape
- Its initial focus was usability, later defined by ISO 9241 as “the extent to which a product can be used by specified users to achieve specified goals with effectiveness, efficiency and satisfaction in a specified context of use”
- The above definition grew and developed over time

::: {.notes}
(first read the slide)

In the early days, efficiency dominated the discussion of users as computers were still a scarce resource. Efficiency receded in importance over time while effectiveness and later satisfaction came to the foreground. Satisfaction originally had to be linked to productivity to be justified, rather than being an end itself. Later that changed and context became more important.
:::

## Still later, UCD embraced UX

- UI ⇒ user interface, focused on the human-computer interaction
- UX ⇒ user experience, more broadly focused on the user's world

::: {.notes}
(first read the slide)

We started with a pure focus on the *liminal state* between the human and computer, then later thought about *context*.

Eventually, UCD took on the form we see today, a combination of UI and UX, which takes into account the context of use and overarching goals that may be served by the software.

But first, we have to consider the road UCD took to get there.
:::

## Early Challenges for UCD
- The phased approach of waterfall methods meant that UCD had to find a place in each phase (not easy)
- UCD fit better into an iterative approach than a phased approach
- UCD activities like Contextual Inquiry fit into the problem analysis phase
- UCD activities like user testing fit the verification phase

::: {.notes}
(first read the slide)

Other phases were harder and the whole arduous process was made more difficult by one of the hallmarks of waterfall: that there's no going back from one phase to a previous phase. If you find out you've taken a wrong turn, that's tough. This rigidity about phases allows for easier budgeting and accounting and makes waterfall appealing for expensive projects. Line for line of code, waterfall is always cheaper than iterative, although it is more likely to fail because of its rigidity.
:::

## Waterfall phases
- problem analysis
- requirements specification
- design
- implementation
- verification
- operation

::: {.notes}
(first read the slide)

Different authors use different names and numbers of phases. In fact, we'll see a slightly different picture in the next frame.

On paper, this phased approach looks like a good idea. It breaks work up into manageable chunks. The fatal flaw is that everyone signs an agreement at the end of each phase, declaring that they are satisfied that that phase is complete. Hence, waterfall is commonly used when the administrative distance between parties is great. That distance can occur between departments, agencies, or companies. The farther up the food chain you have to travel to resolve disputes, the greater the administrative distance.
:::

## A waterfall picture

![waterfall phases and products](fiWaterfall.png)

::: {.notes}
This picture emphasizes the no-going-back aspect of each phase and shows the product of each phase, which must be approved by all parties before moving on.
:::

## Iterative software development

![Iterative software development is a three-part circle](fiIterativeSWdevel.png)

::: {.notes}
Another approach, and the dominant one for small to medium projects, is the iterative approach. Different authors use different names and numbers of nodes in the circle, but they all feature a circle and an emphasis on getting everyone on the same page, often through joint activities. The small boxes list some of the activities.
:::

## Iterative software development
- It is less risky, but more expensive, to iterate
- The iterative process is design, build, test, over and over
- Why is it less risky?
- Why is it more expensive?

::: {.notes}
(read the slide first)

It's less risky because client and provider have more chances to be on the same page. It's more expensive because there's a lot of intermediate work that just gets thrown away: intermediate prototypes and demos that help get everyone on the same page but can't be used in the actual software product.
:::

## UCD Today

- A major approach to UCD is goal-directed design
- It's exemplified by @Cooper2014
- It's covered in I320U Information and Interaction Design

# Enter Agile

## What is Agile?
- First and foremost, it is a manifesto, posted in 2001, featuring twelve principles
- Everybody and his brother loved the manifesto
- Pretty soon, everybody and his brother started saying they were Agile
- Agile started to lose meaning
- Let's try to capture some of that meaning

::: {.notes}
(read the slide first)

Let's review the Agile Manifesto to see why it was so attractive to so many people, then talk a bit about measuring Agile development.
:::

## Agile software development principles (1)
 1. Customer satisfaction by early and continuous delivery of valuable software.
 2. Welcome changing requirements, even in late development.
 3. Deliver working software frequently (weeks rather than months)
 4. Close, daily cooperation between business people and developers

::: {.notes}
The Agile Manifesto listed twelve principles, of which these are the first four. Let's read them.

(read the slide)
:::

## Agile software development principles (2)
 5. Projects are built around motivated individuals, who should be trusted
 6. Face-to-face conversation is the best form of communication (co-location)
 7. Working software is the primary measure of progress
 8. Sustainable development, able to maintain a constant pace

::: {.notes}
(first read the slide)

The items on this list are intuitively appealing to a lot of people despite little empirical evidence for their value. For example, managers often micromanage because they don't understand what developers are doing. They require time-consuming reports of little real value in lieu of understanding. Principle 5 seems like a sensible reaction to this phenomenon.
:::

## Agile software development principles (3)
 9. Continuous attention to technical excellence and good design
10. Simplicity—the art of maximizing the amount of work not done—is essential
11. Best architectures, requirements, and designs emerge from self-organizing teams
12. Regularly, the team reflects on how to become more effective, and adjusts accordingly

::: {.notes}
(read the slide first)

Again, these principles react to overly rigid top-down management of the development process by managers unfamiliar with that process. It sounds good, albeit very expensive. It sounds like it reduces risk.
:::

## What agile looks like
Collaboration between

- Cross-functional teams
- Self-organizing teams
- Users / Stakeholders on the team

Focus on

- flexibility
- early delivery
- continuous improvement

## Further reading on Agile
Vastly many agile processes and practices are documented on Wikipedia's *Agile Software Development* page, including the following diagram of one attempt to merge the best parts of agile and waterfall.

---

![Unified Process Model](fiUnifiedProcessModel.png)

::: {.notes}
Diagram found at [https://commons.wikimedia.org/wiki/File:Unified_Process_Model_for_Iterative_Development.svg](https://commons.wikimedia.org/wiki/File:Unified_Process_Model_for_Iterative_Development.svg)

The key issues in my mind are whether the people in charge can say "It's too early to test" or "It's too late to change". If they can say those things, the process is too waterfally. Can a process be too agiley? The Wikipedia article gives a long list of Agile pitfalls.
:::

# Major Concerns with Agile

- Cultures
- Teams
- Tasks
- Work per iteration

::: {.notes}
(read the slide first)

Culture can be a problem since agile is inimical to traditional top-down management.

Teams are often not trained and team roles are not properly specified. Teams may have trouble focusing on the project given other work.

Tasks are often assigned by people who are removed or tasks are assigned too early in the process.

Taking on too much per iteration builds up too much work in progress.
:::

# Agile + UCD

## Compatibility

- evolving requirements
- incremental development
- close collaboration with customer reps

::: {.notes}
(read the slide first)

These characteristics of Agile are compatible with UCD.
:::

## Incompatibility

- reduced opportunities for user testing
- less upfront planning before software implementation

::: {.notes}
(read the slide first)

These characteristics of Agile are *not* compatible with UCD.

On the other hand, Agile means different things to different people, so not all approaches that call themselves Agile face all the same problems. Here we'll stick with the NordiCHI findings, which are mainstream but not completely pervasive.
:::

# Best practices from NordiCHI

## Four themes

The following slides review the four themes that coalesced at the NordiCHI workshop:

1. Culture
2. Teams
3. Tasks
4. Research

# Culture

## Cultural differences

- What constitutes a valid problem and what can be ignored
- What resources are provided and how allocated
- Adequacy and excellence in design work

## Agile and UCD Values, first Agile
- Self-empowered independent autonomous teams
- working software that customers accept
- customer collaboration
- rapid reaction to feedback
- velocity
- visibility, awareness, accountability
- productivity without interruption
- clear roles, short term goals (not vague and fuzzy)
- low waste
- being fashionable

## Agile and UCD Values, next UCD
- iterative processes and tools to support planning of comprehensive user-focused research and objective empirical evaluation
- well documented evidence and data analysis
- understanding users before software development
- coherent, holistic picture of what will be developed
- superior expert knowledge of HCI
- attention to detail
- satisfied users

## Recall the values from the Manifesto
1. Individuals and interactions over processes and tools
2. Working software over comprehensive documentation
3. Customer collaboration over contract negotiation
4. Responding to change over following a plan

## Note the nature of the four preceding pairs
- They are matters of degree
- You should favor the left side, but how much?
- Crudest solution would be to make the LHS simple rules, as follows

<!-- ## Crude rules that [could]{style="color:#cc0000"} follow from the four pairs -->
## Crude rules that [could]{.emph} follow from the four pairs
1. Just have individuals and interactions: no need for processes and tools
2. Just make working software and no documentation
3. Just collaborate: no need for a contract
4. Just keep responding to change with no plan

## Good news about culture
- Only half the Agile Manifesto rules *could* block UCD
- Compromises are possible, even with those
- Other values, such as safety and security and inclusiveness, are important and outside the possible Agile / UCD tension

## Culture and methodology
- UCD and Agile have disjoint but not necessarily incompatible values. Dogmatic rules on either side may cause tension.
- Values come from many sources: marketing, creative designers, customer support, security experts. Give user and customer values their own place rather than simply representing them indirectly via UCD or Agile.
- Conflicts and synergies are manifasted in teams and tasks in work contexts, where the ideologies of methodologies meet the realities of software development work.

# Teams

## Themes relating to teams
- Roles and responsibilities
- Team boundaries and communication practices
- Cross functional capabilities of teams and individuals

## Roles in Scrum


# References

::: {#refs}
:::

---

::: {.r-fit-text}
END
:::

# Colophon

This slideshow was produced using `quarto`

Fonts are *League Gothic* and *Lato*

