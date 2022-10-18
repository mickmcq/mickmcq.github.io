---
title: "Info & Interaction Design: Information"
author: Mick McQuaid
date: 2022-10-12
bibliography: master.bib
format:
  revealjs:
    logo: iSchoolLogo.png
    theme: moon
    css: style.css
    transition: slide
    background-transition: fade
    preview-links: auto
    controls: true
    controls-layout: bottom-right
    center: true
---

::: {.r-fit-text}
Week NINE
:::

# Information

## Information Overload
- An old concept
- Passing the basketball illustrates attentional blindness
- London map experiment illustrates the same principle
- Terms like cognitive overload, change blindness are related

::: {.notes}
People studied *information overload* long before the Internet made it a tired phrase. In psychology classes you may have seen videos of famous experiments such as passing the basketball. In this experiment, a person watches a group of people passing basketballs and is asked to count the number of total passes and keep them in mind. The person is told that accuracy is very important. The real purpose of the basketball passing is to overload the person with information. Meanwhile, a person wearing a gorilla costume walks through the room. After the exercise, the researchers ask the person if anything unusual happened. The person invariably replies that nothing unusual has happened. The researchers then show the person a video of the preceding few minutes, including the person in the gorilla costume. Invariably the person is shocked. The person almost *never* accepts that someone in a gorilla costume walked in front of them until they see the video evidence. This demonstrates the astounding power of information overload to shut down our perceptions of our environment.

Similar experiments abound. There is, for instance, one experiment where a researcher with a map in hand walks up to someone on a crowded London sidewalk and asks for directions. While the bystander tries to think of the best route, two uniformed workmen walk between the researcher and the bystander, carrying a large heavy mirror. Concealed behind the mirror is another researcher of a different race and sex but carrying an identical map in the same folded orientation. The original researcher moves along with the two workmen who speed past so that there is only a moment when the bystander can't see the researcher. The new researcher, of a different race and sex, tries to carry on the same line of questioning as if nothing had happened. Video of the encounters suggests that the bystander usually does not realize the change because of the information overload resulting from trying to visualize the landmark under discussion and the route information.

Both these experiments and similar ones are described online under information overload or cognitive overload or related terms such as change blindness or selective attention.
:::

## Information itself
- Information theory (@Shannon1948, @Cover2006)
- Information architecture (@Rosenfeld2015)
- Information Design (@Redish2014)

::: {.notes}
In addition to studying the effects of information, there are many scientists studying information itself and the characteristics that define information and distinguish one kind of information from another.

Following is one approach to examining information. There are others. Notable examples include Information Theory, first promulgated by @Shannon1948 and typically introduced to students via @Cover2006. This introductory textbook describes entropy, data compression, channel capacity, rate distortion, and multi-user theory. It has applications in communicatons, statistics, complexity theory, and investment. A second example is the view popularly called Information Architecture, espoused in @Rosenfeld2015. This view is mostly concerned with the organization of large websites. A third example is similar but is often called Information Design, and is espoused by @Redish2014 and is concerned mostly with the organization of text on websites. I (Mick) have chosen a set of topics that seem relevant to HCI specialists and have little overlap with the above-mentioned texts, so I refer the diligent reader to those texts for different perspectives.
:::

## Unstructured information
- Term "unstructured" may be misleading
- There is structure but it follows no strict rules
- Examples include news articles and blog posts
- "Unstructured" is a matter of degree and is best understood by comparing it to semistructured and structured information

::: {.notes}
The term unstructured information may be a bit misleading. It typically refers to information that is indeed structured but whose content does not follow very strict rules.

For example, a news article or a blog post could be considered unstructured information. An article usually has a title but not always. It does not follow a strict rule as to whether or not it is titled or subtitled. It may or may not have pictures. It may have varying numbers of paragraphs, tables, diagrams, comments from users, links to related articles, or other features. The key is that it is completely flexible about these things and the person who presents the article does not have to think about conveying the structure of the article to a computer program, only to a human reader. Human readers are much more forgiving of lapses in structure than are computer programs.

This lack of structure is really a matter of degree and is best understood by comparing it to the following terms.
:::

## Semistructured information
- Labeled information, e.g., forms filled out by people
- There are rules, but it's often easy to break them
- Hence, human intervention is required to deal with rule breakage

::: {.notes}
Semistructured information refers to labeled information such as is found in forms filled out by people. When you fill out a form, each place where you can insert information contains a label telling you what kind of information belongs there. There are some rules but it is often quite easy to break rules for completing forms.

Some forms enforce rules by not allowing you to type in any information that violates the rules. A good example of this can be found in income tax forms online.

Yet most online forms allow the person filling them in some flexibility and may contain instructions that can be disobeyed. For instance, you may be transgendered and asked to fill in M or F in a box marked gender. You may be able to enter a T or leave the box blank, depending on how much time and money was spent on developing the form. If you do enter something unexpected, the person or program processing the form has to decide how to handle it.

It is a hallmark of semistructured information that some human intervention is required to process it because some entered information can not be anticipated.
:::

## Structured information
- Obeys strict rules
- Can be processed rapidly in large volumes
- Can be easily aggregated to tell, for instance, how many orange shirts size L were ordered on game days in the 2021 season
- Often passed from one computer program to another
- Uses techniques to diminish the effect of human error, such as bar code readers
- Usually presented as relations (tables with rows and columns) or hierarchies (trees)

::: {.notes}
Structured information obeys strict rules and can be processed rapidly in large volumes and can be aggregated easily to determine, for instance, how many orange shirts in size L were ordered on game days in the 2021 season. Structured information is often passed from one computer program to another. Systems that process structured information use various techniques to diminish the effects of human error, including bar code readers, credit card readers, qr code readers, nfc readers and similar devices to obtain information. When human input is needed, it is often restricted. For instance, when a fast-food cashier takes an order, they often press a touchscreen area with a picture of the item being ordered rather than trying to type a name or a price, both of which are supplied by a computer program reading the touchscreen.

Most structured information in and between large organizations is presented in one of two main ways, as relations or as hierarchies.
:::

## Relational data
- By far the most prevalent *within* organizations
- Tables of rows (entities) and columns (attributes)
- Tables are linked to each other
- Good tables are long (many rows) and thin (few columns)

::: {.notes}
By far, the most prevalent form of data in large organizations today is relational data, stored in database products such as Oracle, SQL Server, MySQL, and PostreSQL.

Relational data is presented in tables consisting of rows and columns.  The rows refer to entities and the columns refer to attributes of the entities. An example of an entity is a customer. An example of an attribute is a zip code for that customer.

A key characteristic of relational data is that the rows and columns of one table are linked to the rows and columns of many other tables. In order to speed processing of relational data, a given table should be long (many rows) and thin (few columns). So, rather than have a table that describes a customer, the information about a customer may be spread over many tables, each with only a few columns.
:::

## Hierarchical data
- Second most common *within* organizations and most common *between* organizations
- Example: Fedex international waybill

::: {.notes}
The second most frequent way to store enterprise data is in a hierarchical format. XML and JSON are among the most common hierchical formats in general use. To illustrate what the term *hierarchical* means, consider a waybill as an example. One international waybill used by FedEx has four main headings and some required subheadings and optional subheadings. For instance, there can be an intermediate consignee in addition to an ultimate consignee. The description of commodities to be shipped has a number of subheadings, not all of which are applicable to every kind of commodity. Hence, for each commodity there is a choice of entering number or unit in addition to quantity. Each commodity has a number, a description, a weight, and a value.
:::

## So an example hierarchy might look like this

<small>
```bash
 Sender
   Sender Name
   Sender Address
   Sender Account Number
 Recipient
   Recipient Name
   Recipient Address
 Commodities
   Commodity 1
     Quantity
     Unit / Number
     Weight
     Value
   Commodity 2
     Quantity
     Unit / Number
     Weight
     Value
 Authorization
```
</small>

::: {.notes}
A key characteristic of this hierarchical form is that it can present exactly the same data as in the relational form above. In other words, the above hierarchy could be converted to tables of rows and columns. Many computer programs just translate between one form and the other, depending on immediate needs.
:::

## Big data
- Usually means data too big to be processed on a single computer, instead requiring a cluster
- Sometimes means VVVV, where the Vs stand for Volume, Velocity, Variety, Variability (sometimes adding an extra V for more bigness)
- Google's breakthrough in big data on cheap computers became a generic term, MapReduce

::: {.notes}
The term *big data* refers to collections of data that can not be processed on a single computer. The traditional tools of computing are inappropriate for *big data* because they require that the data be available for processing on a computer.

A major breakthrough for everyday computing occurred when the founders of Google developed a way to process *big data* using large numbers of very inexpensive connected computers. The method they used has become the standard for working with *big data*. MapReduce was the name Google gave to its original framework and it has become a generic term, like Kleenex, to describe other examples of the framework, such as Hadoop, the most popular implementation.

The way in which these very inexpensive connected computers work together is in a kind of tree structure, where one computer at the top of the tree gives orders to other computers in the tree and receives results from them.

Two key characteristics of this approach are that no one computer in the tree has all the data and that no one computer is unique. These two characteristics enable scalability and fault-tolerance.
:::

## Memes
- Richard Dawkins coined the term in 1976
- Dawkins thought of memes as patterns that encourage proliferation

::: {.notes}
@Dawkins1976 coined the word *meme* in the following paragraphs, which follow a discussion of the primordial soup and of the gene as the prevalent replicator on Earth.
:::

## Quote from *The Selfish Gene* (1976)

*The new soup is the soup of human culture. We need a name for the new replicator, a noun that conveys the idea of a unit of cultural transmission, or a unit of imitation. ‘Mimeme’ comes from a suitable Greek root, but I want a monosyllable that sounds a bit like ‘gene’. I hope my classicist friends will forgive me if I abbreviate mimeme to meme. If it is any consolation, it could alternatively be thought of as being related to ‘memory’, or to the French word même. It should be pronounced to rhyme with ‘cream’.*

::: {.notes}
Examples of memes are tunes, ideas, catch-phrases, clothes fashions, ways of making pots or of building arches. Just as genes propagate themselves in the gene pool by leaping from body to body via sperms or eggs, so memes propagate themselves in the meme pool by leaping from brain to brain via a process which, in the broad sense, can be called imitation. If a scientist hears, or reads about, a good idea, he passes it on to his colleagues and students. He mentions it in his articles and his lectures. If the idea catchs on, it can be said to propagate itself, spreading from brain to brain. As my colleague N. K. Humphrey neatly summed up an earlier draft of this chapter: 'memes should be regarded as living structures, not just metaphorically but technically. When you plant a fertile meme in my mind you literally parasitize my brain, turning it into a vehicle for the meme’s propagation in just the way that a virus may parasitize the genetic mechanism of a host cell. And this isn’t just a way of talking—the meme for, say, “belief in life after death” is actually realized physically, millions of times over, as a structure in the nervous systems of individual men the world over.'

In the years since Dawkins coined the term, it has become popular to study the concept of memes and to track memes, thanks to the Web. Our awareness of memes as a force informs our interaction design in many ways. There can be no doubt that the most successful users of the web, such as Google and Facebook, maintain a keen sensitivity to memes. As a thought exercise, examine an electronic artifact, such as a website or smartphone app, and try to identify the presence and influence of any memes upon it. As a similar thought exercise, try to identify memes in your own work.
:::

## Organizing information

Designers use an almost folkloric understanding of how people organize information to design information artifacts to work with rather than against people. Some of the borrowings from other disciplines studying the organization of information include the following.

## Labeling
We can group information together under labels or without labels. The latter activity is usually called clustering while the former is often called categorization. If we have labels, the question arises as to where the labels come from and who gets to identify them.
Famously, Melvil Dewey reserved many labels in his library classification system for items familiar to him and European men like him, but few labels for items that were familiar to the vast majority of humans.

## Card sorting
Card sorting is a common way to elicit labels. You can give a person a set of cards with terms written on them and ask the person to sort the cards into piles of similar terms. Then ask them to name the piles. This is typically called an open card sort, described by @Spencer2009. An alternative might be to provide a set of category cards in addition to the content cards and ask a person to place the content cards adjacent to the appropriate category card. This exemplifies a closed card sort, described by  @Spencer2009. There are many variations of card sorts and an extensive literature on using them to label concepts.

## Interrater reliability
After you conduct a card sort, how do you evaluate your results? If you've recorded several people sorting the same cards, you can measure interrater reliability, using Cohen's $\kappa$ (pronounced Kappa). 

## Wikipedia definition of Cohen's $\kappa$

$$\kappa \equiv \frac{p_o-p_e}{1-p_e} = 1 - \frac{1-p_o}{1-p_e}$$


where $p_o$ is the proportion of observed agreement between raters (same as accuracy, defined as the number of agreed items divided by the total number of items), and

$$p_e= \frac{1}{N^2}\sum_k n_{k1}n_{k2}$$

for $k$ categories and $N$ items and the number of times rater $i$ predicted category $k$: $n_{ki}$.

## More on Cohen's $\kappa$

Cohen's original 1960 article also defines $\kappa$ in terms of frequencies of observed agreement, $f_o$, and agreement expected by chance, $f_c$:

$$\kappa = \frac{f_o-f_c}{N-f_c}$$

Why should you use this measure of interrater reliability? The problem is that people will agree to some extent by chance. You should try to account for chance agreement in a measure of agreement.

## synthetic example in R

Suppose you have two raters and twenty items. Each item can be rated as 0 or 1. You can simulate this easily with random binomial draws as follows.

```r
theta <- 0.5
N <- 20
rater1 <- rbinom(n = N, size = 1, prob = theta)
rater2 <- rbinom(n = N, size = 1, prob = theta)
twentyitems <- cbind(rater1, rater2)
twentyitems
```

The output of `twentyitems` is as follows in one example run. Each run will differ because of the random number generation.

## Sample run

<small>
```r
      rater1 rater2
 [1,]      0      0
 [2,]      0      0
 [3,]      1      0
 [4,]      1      0
 [5,]      0      0
 [6,]      1      1
 [7,]      1      1
 [8,]      1      0
 [9,]      0      1
[10,]      0      1
[11,]      1      0
[12,]      1      1
[13,]      0      0
[14,]      1      0
[15,]      0      0
[16,]      0      1
[17,]      0      0
[18,]      1      0
[19,]      0      0
[20,]      0      0
```
</small>

::: {.notes}
You can see that there is plenty of agreement and plenty of disagreement between the two raters from the above table. Now load the `irr` package to first see how much the two raters agreed.
:::

## Using the irr package

```r
if (!require(irr)) {
  install.packages("irr")
  library(irr)
}
agree(twentyitems,tolerance=0)
```

## Output

The output of `agree()` is as follows.

```r
 Percentage agreement (Tolerance=0)

 Subjects = 20
   Raters = 2
  %-agree = 55
```

## Tolerance

The `tolerance=0` parameter says that you don't allow similar scores to be interpreted as the same. For example, suppose instead of 0 or 1, the raters could choose any integer from 0 to 100. You might want the difference between 50 and 52 to be interpreted differently than the difference between 10 and 90. You might even say that they agree if their scores are 50 and 52. The `tolerance` parameter allows you to tune for this.

## Calculating $\kappa$

Now calculate Cohen's $\kappa$ to adjust for the possibility of chance agreement.

```r
kappa2(twentyitems)
```

<small>
```
 Cohen's Kappa for 2 Raters (Weights: unweighted)

 Subjects = 20
   Raters = 2
    Kappa = 0.0625

        z = 0.294
  p-value = 0.769
```
</small>

::: {.notes}
The score should be smaller than the percent agreement although your results should differ from mine because we're both using random number generators. When I last ran it, $\kappa$ was negative. Different books recommend different cutoffs for an acceptable $\kappa$ value for action. I was taught 0.7. The appropriate procedure if you have a lower $\kappa$ is to discuss your views and re-rate independently. In other words, you discuss your views without looking at specific items then re-rate without looking at each other's items.

You may be able to guess that the hardest part of this process is coding the table of ratings. You need numbers and those numbers can be 0 or 1 to signify yes or no or a series of coding numbers to signify different bins.
:::

## Open coding and closed coding
- Difference is whether researcher supplies the labels or participants do
- Open coding involves an extra step to account for synonyms

:::{.notes}
It is harder to conduct this procedure for open coding than for closed coding. As a reminder, in closed coding you supply the labels and the participant associates each item with one of the labels. In open coding, the participant creates labels after sorting the items into different groups. You have to decide whether to accept synonymous labels or to have some additional disagreement based on different labeling schemes.
:::

## Example of closed card sort
Now suppose you have five piles of cards in a closed card sort. I can simulate this with random numbers uniformly distributed from 1 to 5.

```r
N <- 5
rater1 <- round(runif(n = N, min = 1, max = 5))
rater2 <- round(runif(n = N, min = 1, max = 5))
rater3 <- round(runif(n = N, min = 1, max = 5))
rater4 <- round(runif(n = N, min = 1, max = 5))
fiveitems <- cbind(rater1, rater2, rater3, rater4)
fiveitems 
```

## Output
The output of `fiveitems` is as follows. Note that your results will differ with the same code because of random number generation.

```r
     rater1 rater2 rater3 rater4
[1,]      2      5      1      2
[2,]      4      2      3      5
[3,]      3      4      3      4
[4,]      4      2      3      4
[5,]      3      4      1      3
```

## $\kappa$ with more than two raters
You can't use the exact same function as with two raters but there are a couple of other $\kappa$ functions for multiple raters.

```r
library(irr)
agree(fiveitems)
kappam.fleiss(fiveitems)
kappam.light(fiveitems)
```

## Output
<small>
The output for `agree(fiveitems)`{.r} is

```
 Percentage agreement (Tolerance=0)

 Subjects = 5
   Raters = 4
  %-agree = 0
```

The output for `kappam.fleiss(fiveitems)` is

```
 Fleiss' Kappa for m Raters

 Subjects = 5
   Raters = 4
    Kappa = -0.0965

        z = -0.975
  p-value = 0.329
```

The output for `kappam.light(fiveitems)` is

```
 Light's Kappa for m Raters

 Subjects = 5
   Raters = 4
    Kappa = -0.0286

        z = NaN
  p-value = NaN
Warning message:
In sqrt(varkappa) : NaNs produced
```
</small>

## Comments on output

When I run these, they give slightly different results. I'm not sure how much that matters but my guess is not much. You should report which function you used. One nice thing about Fleiss's $\kappa$ is that it allows missing values. That is to say that, if you have some piles that differ from others, you could leave part of a row blank if only some raters have a score for it.

Light's $\kappa$ is briefly described in @Hallgren2012. That tutorial gives R code for several versions of $\kappa$, including Cohen's weighted $\kappa$, described above as `kappa2()`, and both Fleiss's and Light's $\kappa$.

## Grouping information items
- Classical approach uses similar attributes
- Prototype approach uses comparison to a specific thing

::: {.notes}
When we group information together, we typically have a purpose.
For example,
some people studying animals have proposed labeling the classification of animals according to a food chain and features of animals such as their teeth and jaws that predispose them to eating similar things. On the other hand, cooks group animals in an entirely different way.

Psychologists who study grouping used to believe in the notion that people group things together by a process that can be approximated by counting similar attributes shared by different things.

More recently, psychologists led by Eleanor Rosch have claimed that people hold mental images of what they call prototypes of groups. Here the word prototype is NOT related to the sense in which we use it in this class. The prototype for grouping is a thing that best represents the group. For example, an early experiment found that, for North Americans, the robin is the prototype for birds. Rather than evaluating attributes of other things, the mental process to group things together as birds is to compare them to the mental picture of the robin.
:::

## Flat and hierarchical grouping
- Piling vs Filing again!
- Hierarchies require each thing to be in one location
- Tagging allows each thing to be in multiple locations

::: {.notes}
We have already considered the problem of hierarchical groupings when we said that a file could only be placed in one location but that a file could have many tags. This same idea occurs in grouping of information except that one approach allows the item of information to be replicated in as many clusters as are appropriate. This concept of flat clustering is identical to tagging in practice. Hierarchical clustering requires that no piece of information be copied so that every clustered item is unique.
:::

## Automatic and supervised grouping
- Labels require an authority to say which things belong to which label
- Authority is usually a person or group of people
- Grouping without labels can be done by a machine
- Training and testing sets are employed by machines as a form of supervision

::: {.notes}
If we accept labels, we need some authority to define which things belong with which labels. That authority is usually some kind of person or group of people. If we do not require labels, on the other hand, a machine may automatically group things together without human supervision.

Supervision in this case may be very limited. For example, a person can identify the meaning of *red* quite easily so that a machine can be trained to retrieve images with large patches of red. You can probably imagine a spectrum of supervision from easy and broad on the one hand to difficult and specialized on the other hand. At the opposite end of the spectrum from *red* might be a hard concept like *evidence*. It is much harder to tell a machine what constitutes *evidence* than to tell a machine what constitutes *red*.

A common approach to helping a machine to group things together is to provide a training set and a testing set, a set of things that have been grouped to train the machine and a set of unlabeled things to evaluate the outcome of the machine's training.
:::

## Human computation
- Relatively new field in computer science
- Asks people to do what machines can't
- Gameifies tasks, such as identifying craters on the moon
- Origin of captchas

::: {.notes}
Historically it has been difficult to obtain judgments of humans to label enough things to help computers. Recently, under the banner of human computation, scientists have developed ways to turn small tasks that are difficult for computers into games that are fun to play. An example would be to recognize birds species in pictures. By carefully arranging for different people to try to label the same picture, it is possible to obtain useful labels. Pornographers also use the results of this research to defeat captchas, which are themselves outgrowths of this research. Visitors to pornographic sites or other sites with illicit content, are asked to solve captchas to obtain admittance. These captchas are ones that the host site's robots encountered while trying to harvest content from competitors or other gated communities.

While human computation was hailed as the solution to spam ten years ago, it has turned out to have some value and some unexpected consequences.
:::

## Networked information
- Network may mean connections between computers
- Network may be used in the sense of network science, which studies all networked phenomena, such as social networks

::: {.notes}
The term *network* is used in two main ways in the computing world.  Both of these senses are critical for an understanding of the flow of information but they are very very different.

The first, and oldest, sense of the word is to describe the physical connections between computers. This includes the hardware and software that allows one computer to communicate with another computer and with larger groups of computers including the largest group of computers, the internet.

The second sense in which the word *network* is used comes from the emerging discipline of network science.  This field of study has only been named in the past twenty-five years but draws on ideas dating back much further. It is relevant to us because it explains the behavior of all kinds of networks, including computer networks. Recent advances in network science have identified phenomena like *the long tail* and growth and decline of online communities such as Facebook and Myspace.
:::

## Supply chain information
- Information flows between productive enterprises
- Usually have a channel captain who dictates information format
- Typically use XML
- XML can be read by humans but is inefficient for internal processing

::: {.notes}
Supply chains typically have a channel captain, such as Walmart in the retail world or General Motors in the US automotive world. These channel captains can dictate the flow of information through the supply chain. They typically use formal documents structured as XML or some conceptually similar format to communicate with other members of the supply chain, even though internally they are much more likely to use relational databases to organize information.

XML stands for eXtensible Markup Language and it belongs to the same family as HTML and SGML, as well as other such markup languages. XML is easy to transport between organizations but inefficient for detailed processing. Humans can look at XML documents and figure out what they mean or are supposed to mean. XML documents can even contain definitions of themselves within the document to help an unfamiliar reader figure them out.

When I say that XML is inefficient for detailed processing, I am contrasting it with enterprise databases. These require painstaking development and rules for entering data but allow an enterprise to say, update its inventory on a website in real time. An external partner can not afford the expense of writing directly to an enterprise database with its draconian requirements. Moreover, I do not want to let my external partners write directly to my enterprise database. The speed with which I can process a transaction depends on my ability to control glitches in the enterprise database.

Hopefully you can see that these two fundamentally different ways of organizing information can achieve different but complementary goals: exchanging information with external partners and using information internally.
:::

# Connecting Concepts

The following concepts: card sort, monitoring navigation, monitoring social networks, and flexibility of information representation, all come together to give us tools to build information containers. Let us briefly review them.

## Understanding labels

We discussed card sort as a means of understanding the labels people use to describe things of interest. We considered the issue of cognitive dissonance in the labeling of information containers and card sorting as a means to overcome it. We can connect the concepts of information hiding and labeling to see how labeling helps to limit information overload.

## Learning navigational behavior
- Google learns from user navigational behavior
- Search behavior is bartered by information brokers
- LSOs (locally stored objects) are often used instead of cookies, as are tracking pixels
- A-B testing is the most common tool for understanding navigational behavior

::: {.notes}
We have discussed the overwhelming influence of Google and its skill in rapidly changing information artifacts by learning the navigational behavior of its users. We have discussed the sharing of consumer information by commercial interests on the web through information brokers. We have discussed the local storage of tracking information on individual devices and some ways, such as LSOs (locally stored objects) used by commercial interests to thwart privacy preservation. We discussed the fact that many large websites, as well as many local network storage appliances, are better served by Google search than by any designed navigational aids. We considered the implications of that situation for expending effort to design navigational aids.

One thing I may have neglected to mention is A-B testing, a common practice where commercial websites compare the conversion rates of two features by randomly assigning visitors to one (A) or the other (B). This is a common way to choose design features. The conversion rate is the rate at which visits to a commercial site are converted to successful commercial transactions.
:::

## Social network influence on navigation
All commercial interests have recognized the significance of social networks and have devised ways to exploit social networks to influence navigation. Many navigational features in common use today are the result of specialists in a new field called network science drawing together research in many fields to understand human behavior and influence in networks. They use terms like betweenness centrality and network closeness. Major figures in the field include M.E.J. Newman, Stanley Wasserman, Albert-László Barabási, Duncan Watts, and Lada Adamic.

## Information structure

We have extensively discussed how and whether information is structured, using as a principle the degree to which human intervention is required to process information. We have discussed hierarchical and relational ways of organizing and storing information.

## Flexibility of representation
We have touched on the notion that information structures are more or less amenable to change. Brittle structures may be symptomatic of technical shortcomings or may be symptoms of authoritarian governance. We discussed whether the speed with which we can modify an information artifact matters in a given context. We saw that we may put together an information artifact with little planning if we expect to take advantage of user behavior to improve it but that, if we can can not or will not change an information artifact after publishing it, we can not realize the value of understanding navigational behavior.

# Information Design Patterns
We discussed several elements that information architecture authors have referred to as information design patterns. To determine whether these elements deserve the label of *design pattern*, we must examine the coinage and past use of the term.

## Design Pattern Definitions
The term *design pattern* is popularly used in many ways. Popular usage leads to an abbreviation of the original usage that may lose some of the original essence. Following are a few popular borderline uses of the term that barely work.

- A general reusable solution to a commonly occurring
  problem within a given context
- A description (or template) for how to solve
  a problem, it can be used in many different situations
- An enumeration of the consequences of the use of the pattern in a given context
- Patterns are formalized best practices

## Design patterns were first observed
Design patterns originated as a architectural concept by
  @Alexander1977.
Alexander examined architecture from the standpoint of its value to a community of people in daily life.
Alexander's ideas were largely ignored or rejected by architects but soon gained a cult following among computer scientists.
Eventually his books became so popular outside architecture that they began to influence architecture.

## A Pattern Language
Alexander describes it as a structured method of describing good design
  practices within a field of expertise.
  [Interview](http://www.youtube.com/watch?v=ad5XAPgKJoM)
The term was coined by Christopher Alexander and popularized by his book *A Pattern Language*.
This book was followed by another book intended to explain the first book.
Alexander has continued to try to explain the concept to this day.

## Components of a Pattern Language
The Syntax describes where the solution fits into the larger design.
The Grammar describes how the solution solves the problem.
For example, “Balconies and porches which are less than 6 feet deep are hardly ever used.”

## An example of a pattern is a place to wait
The problem is that the process of waiting has inherent conflicts
  in it.
The solution: In places where people end up waiting (for
  a bus, for an appointment, for a plane), create
  a situation which makes the waiting positive.

## An example of a pattern is a useful cooking layout
The problem is that cooking is uncomfortable if the kitchen
  counter is too short and also if it is too long.
Solution: To strike the balance between the kitchen
  which is too small, and the kitchen which is too
  spread out, place the stove, sink, and food storage
  and counter in such a way that:

1. No two of the four are more than 10 feet apart.
2. The total length of the counter---excluding sink, stove, and refrigerator---is at least 12 feet.
3. No one section of the counter is less than 4 feet long.

## Computer scientists popularized design patterns
The Gang of Four (commonly abbreviated GoF) were among
  computer scientists seeking a basis to make
  code less arcane, more scientific and, above
  all, reusable.

One aspect of Alexander's description was so general
  that it seemed applicable to any field in which design 
  plays a role.
This key aspect was the notion of a *quality that
  could not be named* but that could be understood
  through experience---the quality shared by successful
  designs.
Specific and non-obvious combinations of
  characteristics could support this quality.

## Gang of Four book
@Gamma1994 exploded on the software
  scene and propelled Alexander to greater fame at the
  same time as solidifying Object Orientation's place in mainstream
  software development.

The GoF argue that great writers use patterns, e.g., all
  of Shakespeare's plays were based on earlier, less
  successful plays or stories.
The GoF refer to *tragically flawed hero* or
  *boy-meets-girl, boy-loses-girl* as patterns with
  infinite variety
The GoF book serves two purposes, to tell what patterns
  are and to catalog 23 well-known patterns.

## Gang of Four pattern definition
A design pattern is a description of communicating objects and classes customized to solve a general design problem in a particular context. (from the introduction to *Design Patterns*, 1994)

## A pattern has four things
1. Pattern name
2. Problem
3. Solution
4. Consequences

## A pattern name is a tool
The pattern name must be good enough to become part of
  the design vocabulary.
The pattern must be useful in conversation, documentation, and
  thinking.
The GoF spent a lot of its time on the names of the 23
  patterns in the catalog.

## A problem may be of several kinds
The first kind includes basic design problems such as algorithm design.
Another kind includes commonly occurring classes or object structures known
  to be problematic.
A third kind includes lists of conditions that, if they occur together,
  create a generic problem.

## A solution is a description of objects and classes
It is not a solution in a packaged sense.
A solution is abstract, not implementation specific.
A solution is a description of the elements of the solution (objects and
  classes).
  The description must identify

- Relationships between elements
- Responsibilities of elements
- Collaborations between elements

## A consequence is a result or trade-off
The application of a pattern may resolve conflicts of
  various kinds, most often conflicts of space and time.
To contemplate the use of a design pattern is to evaluate the design decision with awareness of the consequences.
Consequences may have implementation issues, unlike
  the solution.
If you feel tempted to talk about implementation, do
  so under the consequences banner instead of under the solution
  banner.
Keep the solution a description, not an
  evaluation of itself.

## Design patterns in information architecture
- Not (in my view) real design patterns
- They are anything commonly used on the web, such as "tabbed menus", "hierarchies", or "hub-and-spoke" structures
- They would need elements from Alexander's original concept to elevate them to the level of design patterns

::: {.notes}
Information architects like Donna Spencer and the Information Architecture Institute use the term *design pattern* to refer to any observed pattern seen in numerous successful information containers, such as "tabbed menus", "hierarchies", and "hub-and-spoke". These are potentially useful structural elements. They simply don't rise to the level of design patterns in that they represent casual intuitive observation and nothing more. Alexander and the GoF spent years as master practitioners analyzing observed patterns and cataloging details, separating minutiae from valuable clues. I urge you to build on casual, intuitive observations and to do more. As you practice design, you may attain insights enabling you to develop genuine design patterns. But it will not be as easy as casual intuitive observation.
:::

## Magic fairy dust
A pioneer of HCI, Gary Olson, once told me that his main interdisciplinary frustration was that practitioners in other fields often wanted him to sprinkle magic fairy dust on their products. As HCI practitioners, you must avoid the complementary trap: don't mistake the work of Alexander and the GoF as magic fairy dust that can be sprinkled on your information architecture.

## What would a real design pattern look like?
- Nick Belkin (personal communication) gave the example of the Warburg Institute
- It contains a discovery system organized around the activities of scholars interested in the Renaissance
- It permits serendipitous discoveries by placing items close together if they are likely to be used together
- It's a few blocks from the world's largest library, yet scholars use it

::: {.notes}
Abby Warburg, scion of the Warburg banking family of Hamburg, was not interested in banking but in classical antiquity as rediscovered in the Renaissance. His father gave him a blank check for books on the subject, which is the genesis of the Warburg Institute. It is known primarily for its unique organization system that permits discovery of new things by the kinds of scholars interested in its subject. The British Museum houses vastly more material only a few blocks away, but scholars still flock to the Warburg Institute to engage in a *journey of discovery*.
:::

## Alexander's point applied to digital artifacts
- There is this quality that cannot be named that characterizes what communities find useful and enduring
- Our job as designers is to find the context of use by the community and organize according to it
- What is enduring on the web or in apps? Why? (Much is forced by monopolies, but some is driven by community)

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

