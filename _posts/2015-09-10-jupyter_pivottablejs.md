---
layout : post
title : Drag'n'Drop Pivot Tables and Charts, in Jupyter/IPython Notebook
youtube: ZbrRrXiWBKc
tags:
    - Tools
github: nicolaskruchten/jupyter_pivottablejs
--- 

[PivotTable.js][pv] is a Javascript Pivot Table and Pivot Chart library with drag'n'drop interactivity, and it can now be used with [Jupyter/IPython Notebook][ipy] via the [`pivottablejs` module][pypi]. This has been possible for [RStudio][rs] users for a while now via [rPivotTable][rp], but why should they have all the fun?

<!-- more -->

I first built PivotTable.js with a plan to build an in-browser data analysis tool, and got as far as one where you could [load up a CSV file in the browser][local] for display. Since then, however, the Jupyter project has gathered steam and now provides a browser-based interface to some of the most powerful data processing libraries in the world, so it makes sense to interface with it.

The fantastic [Pandas][pd] library for Python already has a `pivot_table` method, which is quite powerful, but exploring data by executing, modifying, executing, modifying code is nowhere as fast as just dragging elements around a UI and seeing patterns appear interactively, and this is what using PivotTable.js gives you. Check out the video above for a taste, or check out my [analysis of Montreal 311 Service Requests data][mtl311] for a more complete example with voiceover.

## Installation and Use

To use PivotTable.js from Jupyter, first install it with `pip install pivottablejs`.

Then, if you have a Pandas DataFrame (from Pandas v0.14+, or any other object with a `to_csv` method which returns a string) called `df` just execute

    from pivottablejs import pivot_ui
    pivot_ui(df)

and you will get an interactive UI in your notebook.

What happens behind the scenes is that a local file called `pivottablejs.html` is written (overrideable behaviour with the `outfile_path` keyword arg), which contains your data in CSV form and some HTML/Javascript to load up the UI, which Jupyter then loads up in an `iframe`. You can also "pop out" of that frame into a full page, which is then saveable for later.

The `pivottablejs` Python module is [available from PyPi][pypi] under the same free MIT license as PivotTable.js. The source is up on [Github][gh] and I'd love feedback, pull requests etc.

[pd]: http://pandas.pydata.org/
[pypi]: https://pypi.python.org/pypi/pivottablejs
[gh]: https://github.com/nicolaskruchten/jupyter_pivottablejs
[pv]: http://nicolas.kruchten.com/pivottable
[ipy]: http://jupyter.org
[rs]: http://rstudio.com/
[rp]: https://github.com/smartinsightsfromdata/rpivotTable
[local]: http://nicolas.kruchten.com/pivottable/examples/local.html
[mtl311]: http://nicolas.kruchten.com/content/2015/06/montreal-311/
