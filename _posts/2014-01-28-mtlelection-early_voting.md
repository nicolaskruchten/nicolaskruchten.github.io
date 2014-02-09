---
layout : post
title : Early Voting in the 2013 Montreal Election
image: http://nicolas.kruchten.com/images/early/mosaic.png
github: nicolaskruchten/mtlelection2013bydistrict
relatedtag: Open Data
tags:
    - Open Data
    - Visualization
---

Recently I made some maps of the 2013 Montreal municipal elections, showing voting results down to the ballot-box level, using data from the [Montreal Open Data Portal][od]. It turns out, however, that not all of the ballot boxes in that data set are associated with a small geographical area like the ones shown in my [by-ballot-box map][map], and furthermore, those ballot boxes have very different numbering schemes than the ones that do match up with small block-sized areas, numbers like 901 and 601 and 001A instead of small numbers from 1 to 100ish, like the others.

So what gives? These results appear to be from the early-voting polls, which, given that there are fewer of them, cover a larger area per ballot box. In this post I take a look at how leaving this data out of my maps skews the results I present.

<!-- more -->

As the mosaic plot above shows, around 18% of all votes came in early, and the early vote skews away from Bergeron and Joly towards Coderre, with Côté holding pretty steady.

Let's dig a little deeper along both of these dimensions though: the early voting data is disaggregated down to the district level. Does this pattern hold up across the 52 districts?

The graph below shows that the proportion of early voting varies a fair bit across the districts, going up to close to 50% in the case of one Île-Bizard district. That's the smallest, most remote district in the election, however, so that's neither particularly surprising nor significant. The other outlier is an Anjou district is near 30% but the rest are fairly clustered around the 18% average.

![Percentage of Early Voting by District](http://nicolas.kruchten.com/images/early/percentage.png)

The graph below, based on the [ternary chart technique][tc] I detailed in another post, shows how the vote changed from the early ballots to the election day ballots. We can clearly see that almost everywhere, Coderre lost ground to Joly and Bergeron. Bergeron and Joly only lost significant ground in two small, outlier districts in Outremont, highlighted in red.

![Ternary Arrows](http://nicolas.kruchten.com/images/early/ternary.png)

So what's the impact on my mapping efforts? I doubt that early voters are distributed randomly or uniformly throughout the district they live in (apparently early voters are often senior citizens, or motivated partisans like me). It's therefore hard to say that one should mentally ascribe 20% more votes to each ballot-box (skewed towards Coderre) when reading my maps, but certainly despite their apparent precision, they leave out a fair number of votes.

The R code I used to generate the graphs above is up on [Github][repo].

[tc]: http://nicolas.kruchten.com/content/2014/01/mtlelection-ternary/
[repo]: https://github.com/nicolaskruchten/mtlelection2013bydistrict
[od]: http://donnees.ville.montreal.qc.ca/group/election-referendum
[map]: http://nicolas.kruchten.com/mtlelection2013bysection/

