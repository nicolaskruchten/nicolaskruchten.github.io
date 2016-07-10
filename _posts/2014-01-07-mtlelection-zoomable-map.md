---
layout : post
title : Zoomable Map for Montreal Election Results
image: http://nicolas.kruchten.com/images/sectionmap.png
github: nicolaskruchten/mtlelection2013bysection
tags:
    - Open Data
    - Visualization
---

The Montreal municipal elections were just over two months ago but I played with the election results dataset over the holidays anyways as an excuse to play with a type of data I don't normally have much to do with: geographical data. Without further ado, [here is the map I made][map], and this post explains a bit about the process.

<!-- more -->

Before diving into the technical details though, I should mention that I wanted to make a [choropleth map][cm], in contrast to my [previous dot map][dm], at a ballot-box level (called 'section' level in the original data-set), and to display it on top of an actual Montreal street map. The dot map was neat but didn't really for much interactivity and actually made it pretty hard to read the results accurately or, ironically, mentally map the data onto Montreal itself, for lack of landmarks. I wanted to be able to mouse over a specific city block (i.e. mine!) and see the underlying numbers displayed in a pie chart. After playing with the notion of colouring the polygons in a blended red-green-blue colour scheme for the top 3 candidates like in my dot-map, I decided to colour the polygons by the 'winner' of each little area, which exposes the fact that even though he only got 10% of the overall vote, the fourth-place candidate Marcel Côté actually carried some neighbourhoods. The intensity of the colour of each polygon is proportional to the 'vote density', or the number of votes over the area of the polygon, so that large, unpopulated areas don't visually dominate the map.

The election results data comes from the [Montreal Open Data Portal][od] in the form of per-ballot-box results (number of votes per candidate) in a CSV file and per-ballot-box polygons in GeoJSON format: the catchment area for the households whose votes go into the box. I turned to a library called [Leaflet.js][lj] as a base framework for displaying a zoomable street map, Google Maps style, and then I just needed to draw some coloured polygons on top. The big challenge was that the actual results CSV file is 9 megs and the polygons GeoJSON file is 13 megs.

As it happens, [Mike Bostock][mb], who created [Protovis][pv] and its more-popular younger brother [D3][d3], clearly works with a lot of geographical data and so has made available a tool called [TopoJSON][tj], which is a way to compress GeoJSON-formatted contiguous polygons by representing them as a mesh rather than as a bunch of polygons. This tool also allows you to very simply add data to your polygons from a CSV file via a command-line argument.

So I wrote a simple R script which uses the fantastic [reshape2][rs] library from another source of great visualization libraries [Hadley Wickam][hw] to extract the subset of the CSV that I wanted: results for the top 4 mayoral candidates. I then ran it and the GeoJSON file through the TopoJSON tool and voila: a hefty but managable 2.3 meg JSON file, from which I was able to draw coloured polygons onto my Leaflet.js base map. I used D3 to make a pie-chart show up in the corner on mouse-over, and I wrote all the code in [CoffeeScript][cs]. The colours I used are from one of the recommended mapping palettes from [ColorBrewer][cb]

My R code, the TopoJSON command and the CoffeeScript code are all [available on Github][repo].

**Edit**: this map was made using only data from election day, and does not include data from the advance polling days, as it is not available down to the ballot-box level. See [my analysis of early voting for more details][ev] on how this impacts the map.

**Edit**: the explanation above applies to [version 1.0][v1] of this map, which only included results for the election for the Mayor of Montreal. [Version 2.0][v2] of the map, which is the one that's live now, includes results for all 103 races, with various data compression tricks to achieve a further reduction in the size of the data being downloaded to less than 1 meg (JSON plus CSV).

[v1]: https://github.com/nicolaskruchten/mtlelection2013bysection/releases/tag/v1.0
[v2]: https://github.com/nicolaskruchten/mtlelection2013bysection/releases/tag/v2.0
[map]: http://nicolas.kruchten.com/mtlelection2013bysection/
[cm]: http://en.wikipedia.org/wiki/Choropleth_map
[ev]: http://nicolas.kruchten.com/content/2014/01/mtlelection-early-voting/
[dm]: http://nicolas.kruchten.com/content/2013/12/dot-map-of-2013-montreal-election-results/
[lj]: http://leafletjs.com
[od]: http://donnees.ville.montreal.qc.ca/group/election-referendum
[mb]: http://bost.ocks.org/mike/
[pv]: http://mbostock.github.io/protovis/ex/
[d3]: http://d3js.org/
[tj]: https://github.com/mbostock/topojson/wiki
[rs]: http://had.co.nz/reshape/
[hw]: http://had.co.nz/
[cs]: http://coffeescript.org/
[cb]: http://colorbrewer2.org/
[repo]: https://github.com/nicolaskruchten/mtlelection2013bysection


