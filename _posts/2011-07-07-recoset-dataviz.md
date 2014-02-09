---
layout: redirect
title: Datacratic's Dataviz System
image: http://nicolas.kruchten.com/content/wp-content/uploads/2011/07/streamgraph.png
dest: http://datacratic.com/site/blog/datacratics-dataviz-system
tags:
    - Visualization
    - Datacratic
---

At Datacratic, working with data often means data visualization (or dataviz): making pretty pictures with data. This is usually more like making fully machine-generated images than carefully laying out "infographics" of the Information Is Beautiful school but I find they usually end up looking pretty good. There are lots of good tools for graphing data, like matplotlib or R or just plain old Excel-clone spreadsheets but what we use most often is Protovis, the Javascript library for generating SVG, coupled with CoffeeScript, which is a concise and expressive language that compiles down to Javascript.