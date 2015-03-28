---
layout : post
title : Canadian MPs 2012 Visualization
image: http://nicolas.kruchten.com/images/vismtl5/kruchten.png
relatedtag: Visualization
github: nicolaskruchten/vismtl5
tags:
    - Visualization
    - Talks
---

The visualization I presented at [VisMtl 5][vm] was entitled "Canadian Members of Parliament in 2012 by Province, Party, Age & Gender" and is shown above.

<!-- more -->

Key points about this visualization:

* the visualization uses [small multiples][sm] of [dot-plots][dp] arranged in a 2-d lattice and represents each MP as a dot, whie visually encoding 4 variables about each one: 
    * the dot's colour encodes gender
    * the position within the dot plot encodes age as of 2012
    * the vertical position of the dot-plot within the lattice encodes party: Government, Opposition and other parties, moving downwards
    * the horizontal position of the dot-plot within the lattice encodes province: left-to-right position roughly encodes west-to-east position of the province within Canada

* some interesting patterns arising from the [2011 election][el] can be seen through this visualization
    * Ontario and Quebec have the most MPs, and were dominated by the Conservatives and New Democrats, respectively, but the Conservatives formed the Government due to their strength in the Prairies
    * the Liberals suffered a serious defeat but still managed to get MPs elected in almost every province
    * the Bloc Québecois is a Quebec-only party and the Greens did get an MP elected in BC (their party leader Elizabeth May)
    * the ["Orange Crush"][oc] of New Democrats elected in Quebec comprises a large number of women in their twenties, and this visualization shows that in fact this makes the NDP the only party with MPs in their twenties and the major party that is the closest to gender parity

* the dataset used is one that I put together myself in October 2012 using [OpenRefine][or] and data from the Parliament website (MP names, parties and provinces) and Wikipedia (MP birthdates and genders) in order to create demos for my [PivotTable.js][pv] visualization software
    * although there are 308 MPs in the House, the visualization contains only 305 as I was unable to obtain birthdates for 3 MPs

* this visualization was made using the fantastic [ggplot2][gg] plotting system and the 20 lines of code required to replicate it (as well as the dataset) are available on Github at the link below.

[oc]: http://en.wikipedia.org/wiki/History_of_the_New_Democratic_Party#Historical_Breakthrough_and_Official_Opposition
[el]: http://en.wikipedia.org/wiki/Canadian_federal_election,_2011
[or]: http://openrefine.org/
[sm]: http://en.wikipedia.org/wiki/Small_multiple
[gg]: http://ggplot2.org/
[dp]: http://en.wikipedia.org/wiki/Dot_plot_%28statistics%29
[pv]: http://nicolas.kruchten.com/pivottable
[vm]: http://nicolas.kruchten.com/content/2015/03/vismtl5/
