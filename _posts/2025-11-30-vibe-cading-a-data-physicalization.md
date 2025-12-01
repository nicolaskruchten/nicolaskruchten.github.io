---
layout: post
title: "Vibe CADing an Interactive Data Physicalization"
youtube: 58S16TkHcBg
github: nicolaskruchten/pyviz_diagram
image: http://nicolas.kruchten.com/images/bertin_matrix.jpeg
tags:
  - Data Visualization
---

Ever since I bought a 3d printer, I've wanted to dip a toe into [data physicalization](https://dataphys.org/wiki/). I'm not very good at point-and-click 3d modelling tools, and this is kind of a casual hobby rather than serious work so I used [Claude Code](https://www.claude.com/product/claude-code), an AI programming assistant, to [vibe code](https://en.wikipedia.org/wiki/Vibe_coding) a parametric Python program to generate the model. It was a real rush to find out I can just verbally describe the object I want to an AI and then be holding it in my hand less than three hours later! So here's the story of how I vibe CADed my very own [Bertin reorderable matrix](https://www.aviz.fr/diyMatrix/).

<!-- more -->

Some context up front:

- [Vibe coding](https://en.wikipedia.org/wiki/Vibe_coding) is a semi-pejorative term for using an AI assistant to make software, and then using that software without reading the code yourself, just based on how it feels to run it.
- Vibe CADing is a term I just made up but [a quick Google](https://www.google.com/search?q=vibe+cad) confirms I'm nowhere near the first to make the connection
- [Data physicalization](https://dataphys.org/wiki/) is the extension of traditionally 2d data visualization (making pictures of data, even if they look 3d) to the 3d physical world (making sculptures of data)
- [Jacques Bertin](https://en.wikipedia.org/wiki/Jacques_Bertin) was a French cartographer who wrote the now-classic data visualization book [Semiology of Graphics](https://books.google.ca/books/about/Semiology_of_Graphics.html?id=X5caQwAACAAJ&source=kp_book_description&redir_esc=y) which I homaged a few years ago by [remaking a few dozen of its figures in Plotly Express](https://nicolas.kruchten.com/semiology_of_graphics/)
- [Bertin reorderable matrices](https://dataphys.org/list/bertins-reorderable-matrices/) are physical representations of data tables developed by Bertin and documented in his lesser-known book [La Graphique](http://www.zones-sensibles.org/jacques-bertin-la-graphique-et-le-traitement-graphique-de-linformation/) that could be reordered by hand to perform analysis in a pre-digital age, similar to [my heatmap example](https://nicolas.kruchten.com/content/2018/02/seriation/). A few years ago [a French team recreated some of these matrices](https://www.aviz.fr/diyMatrix/) but it took them dozens of hours just to fabricate, never mind design these very large wood-and-metal contraptions.
- I have a nice [Bambu Labs A1 3d printer with an AMS Lite add-on](https://ca.store.bambulab.com/products/a1) which lets me do multi-color prints. I can send jobs to this printer by opening up [3MF files](https://en.wikipedia.org/wiki/3D_Manufacturing_Format) containing descriptions of physical objects using the provided [Bambu Studio](https://bambulab.com/en/download/studio) software. Bambu Studio produces [G-code](https://en.wikipedia.org/wiki/G-code) via a process called "slicing" which it sends to the printer as instructions to move the print head in space and deposit melted plastic.

When I sat down at my computer at 9pm on a Friday night with YouTube in the background after putting my kids to bed, I didn't really feel like reading a lot of new technical documentation, I just wanted to mess around with my 3d printer. So I fired up Claude Code and just typed the following, just to see if it would work at all:

> I want you to write a Python program that produces a 3MF file that I can open up in Bambu Studio for multi-material printing (with AMS). I want you to define a 2cm cube out of material 1 and then on the top face of the cube I want a 1cm diameter disk that's 0.5mm thick made out of material 2.

It mostly did! I opened up the resulting file in Bambu Studio but it wasn't quite right. A few prompt iterations later, I just made the modification I wanted in Bambu Studio, saved my changes and asked Claude to compare the files to see what kind of output I was looking for. I still had no interest in actually looking at the 3MF files myself or the Python code that generated them, I just wanted to vaguely gesture at the problem and make it go away:

> Bambu Studio isn't really reading this as multiple materials quite right. It asks me "This file contains several objects positioned at multiple heights. Instead of considering them as multiple objects, should the file be loaded as a single object with multiple parts?". If I say yes it does what I want and then I can manually assign the filaments. Please update the script such that this is all encoded in the file so I can open it in one click.

> now it loads in one shot but it doesn't register the cube and the disk as different materials, it's just one merged object in one material

> ok so I opened it in Bambu and assigned the second material and saved it as @modified.3mf ... regen your file and compare the two to figure out what changed and then update the script to generate the same kind of thing as it saves

That worked really well: Claude is good at diffing text files and coding. At this point, about 15 minutes in, I had a pretty good sense that things were going to work great, so I dove in and told it what I actually wanted. I knew I wasn't going to get the dimensions right the first time so I told it up front I wanted stuff to be parametric, bumping up the level of abstraction a bit from a single specific object to a design space of objects:

> ok great, let's work on parameterizing this thing.
>
> Here are some parameters I want you to define in the code that we will use to build up the real object I want:
>
> - layer thickness: 0.2mm (disk thickness is this)
> - plate thickness: 2mm
> - gap: 0.5mm
> - square size: 2cm
> - stick buffer: 3cm
> - stick width: 4mm
> - stick length in squares: 2
> - overlay radius: 1cm
>
> The current "cube" is going to be called a block made of material 1 and it will have a square base the size of the square. it will have an 'overlay' disk like we have now made of material 2 which is one layer thick and will have a radius. Our blocks will no longer be cubes but instead will be the height of 4 plates and 4 gaps because I want there to be two holes punched horizontally through the block such that I can fit a stick through with a gap all around. one hole will go front to back and one hole will go left to right.

It did a great job on its first shot, but I had to nudge it once since the "sticks" were cylinders :

> ok so clarifications:
>
> - the sticks are going to be rectangular in cross section: 1 plate thick and one stick-width wide and as long N square-sides + the stick extra buffer. so please add one 2-square stick object (with current parameter values this means that it will be 2mm thick, 4mm wide and and 70mm long (2x20mm squares plus the 30mm buffer)).
> - the holes also need to be rectangular. in this case the holes need to be 5mm wide and 3mm tall (because of the gaps)
> - the holes themselves need to not intersect: there needs to be a plate thickness of block between them

At this point I've got Claude running a Python script for me that spits out a file with one block and one stick. Time to go up another level of abstraction and complexity:

> ok so what is the procedure for me to build a file? I have to write a short script that calls these utility functions? Can you suggest a way for me to define a file with a bunch of blocks and sticks?

> Let's go with `python3 generate_multi_material.py --blocks 1,2,3,4 --sticks 2,2,2,2 --output myfile.3mf` except for sticks I just want two parameters: number of sticks and length in blocks. also make all the parameters accessible from the CLI please so I can tweak the numbers and use argparse or something to generate a nice --help with some examples

> ok so make me a file with 16 blocks (4 each of 2, 3, 4, 5mm overlays) and 8 sticks of size 4-blocks. i want the gap to be 0.3mm and the square size to be 15mm

At this point I have a fairly complete and usable Python script that I haven't looked at even once that produces text files that I haven't looked at directly either. I don't even run the script myself, I ask Claude to run it for me and I just open up the resulting 3MF files in Bambu Studio and click around to see if what I see on the screen matches the mental model I have. Finally, a bit over 2 hours in, I send a sample 4-block/4-stick job to the printer and 30 minutes later I'm holding it in my hand. Pretty magical. The next day after a few tweaks I printed the version in the video at the top of this post.

Zooming out a bit, conceptually, this felt almost exactly like vibe coding some more traditional data visualization through a fairly generic pipeline:

1. Describe in English the thing I want to get at the end.
2. Claude Code translates this into a parametric program in Python that encodes my intent
3. Running this program with some parameters produces some specialized digital representation of the output, say a Plotly `figure` object for visualization or a 3MF file for physicalization.
4. Translate the specialized representation into something more generic: for visualization it would be an SVG or PNG graphic, for physicalization it was G-code (which in fact Bambu Studio helpfully translates to a 2d visualization for me to preview).
5. Hand off the generic representation to a device for rendering: a screen or a 3d printer.

I was really impressed at how smooth the process was of describing in my own words what I saw in my head and getting to the output I wanted, and letting Claude take care of all the intermediate technical details. Admittedly the thing I was printing was just a bunch of rectangles and cylinders, but the resulting assembly is pretty complex and works really well!
