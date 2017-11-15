---
layout : post
title : Plotly.js and Crossfilter.js
image: http://nicolas.kruchten.com/images/plotly_crossfilter.png
github: plotly/plotly.js-crossfilter.js
tags:
    - Data Visualization
---

I recently put together a [simple example](https://plotly.github.io/plotly.js-crossfilter.js/) of [Plotly.js](https://plot.ly/javascript/) and [Crossfilter.js](http://square.github.io/crossfilter/) working together to produce a set of linked data visualizations.

<!-- more -->

One neat little innovation I came up with for this demo was the two different shades of grey to indicate not only that some data is being filtered out but a partial explanation of why. Light grey means that the data is being filtered out by the filters in one of the other vis panels, whereas dark grey means that the data is being filtered out by the local filter.
