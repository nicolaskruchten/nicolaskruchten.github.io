---
layout : post
title : Drag'n'Drop Pivot Tables and Charts, in Jupyter/IPython Notebook
relatedtag: Tools
tags:
    - Tools
github: nicolaskruchten/jupyter_pivottablejs
--- 

<p align="center"><iframe width="500" height="315" src="https://www.youtube.com/embed/ZbrRrXiWBKc" frameborder="0" allowfullscreen></iframe></p>

[PivotTable.js][pv] is a Javascript Pivot Table and Pivot Chart library with drag'n'drop interactivity, and it's now available integrated into [Jupyter/IPython Notebook][ipy]. It's been available to [RStudio][rs] users for a while now via [rPivotTable][rp], but why should they have all the fun?

<!-- more -->

I first built PivotTable.js with a plan to build an in-browser data analysis tool, and got as far as one where you could [load up a CSV file in the browser][local] for display. Since then, however, the Jupyter project has gathered steam and now provides a browser-based interface to some of the most powerful data processing libraries in the world, so it makes sense to interface with it.

The fantastic [Pandas][pd] library for Python already has a `pivot_table` method, which is quite powerful, but exploring data by executing, modifying, executing, modifying code is nowhere as fast as just dragging elements around a UI and seeing patterns appear interactively, and this is what using PivotTable.js gives you. Check out the video above for a taste, or check out my [analysis of Montreal 311 Service Requests data][mtl311] for a more complete example with voiceover.

## Installation and Use

To use PivotTable.js from Jupyter, first install it with `pip install pivottablejs`.

Then, if you have a Pandas DataFrame (or any other object with a `to_csv` method) called `df` just do:

    from pivottablejs import pivot_ui
    pivot_ui(df)

What happens behind the scenes is that a local file called `pivottablejs.html` is written (overrideable behaviour with the `outfile_path` keyword arg), which contains your data and some HTML/Javascript to load up the UI, which Jupyter then loads up in an `iframe`. You can "pop out" of that frame into a full page, which is then savable for later.

The module is up on [Github][gh] and I'd love feedback, pull requests etc.

[gh]: https://nicolas.kruchten.com/jupyter_pivottablejs
[pv]: https://nicolas.kruchten.com/pivottable
[ipy]: http://jupyter.org
[rs]: http://rstudio.com/
[rp]: https://github.com/smartinsightsfromdata/rpivotTable
[local]: http://nicolas.kruchten.com/pivottable/examples/local.html
[mtl311]: http://nicolas.kruchten.com/content/2015/06/montreal-311/