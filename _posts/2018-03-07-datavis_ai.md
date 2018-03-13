---
layout: redirect
dest: https://medium.com/@plotlygraphs/data-visualization-for-artificial-intelligence-and-vice-versa-a38869065d88
title: Data Visualization for Artificial Intelligence, and Vice Versa
tags:
    - Data Visualization
    - Machine Learning
---

Data visualization uses algorithms to create images from data so humans can understand and respond to that data more effectively. Artificial intelligence development is the quest for algorithms that can “understand” and respond to data the same was as a human can – or better. It might be tempting to think that the relationship between the two is that to the extent that AI development succeeds, datavis will become irrelevant. After all, will we need a speedometer to visualize how fast a car is going when it’s driving itself? Perhaps in some distant future, it might be the case that we delegate so much to AI systems that we lose the desire to understand the world for ourselves, but we are far from that dystopia today. As it stands, despite the name, AI development is still very much a human endeavour and AI developers make heavy use of data visualization, and on the other hand, AI techniques have the potential to transform how data visualization is done.

<!-- more -->

## Data Visualization for Artificial Intelligence

Artificial intelligence development is quite a bit different from typical software development: the first step – writing software – is the same, but instead of someone using the software you wrote, like in normal software development, the AI software you write then takes some data as input and creates the software that ends up being used. This step is referred to as the AI system training or learning, and the end result is usually called a model. This two-step process is key to the success of AI systems in certain domains like computer vision: AI software can create computer vision models better than humans can. On the other hand, the output of the AI development process is often spoken of as a “black box” because it wasn't created by a human, and can't easily be explained by or to humans. Data visualization has turned out to be critical to AI development because it can help both AI developers and people concerned about the adoption of AI systems explain and understand these systems. Well-known Google researchers Fernanda Viegas and Martin Wattenberg went so far as titling their EuroVis 2017 keynote address [Visualization: the Secret Weapon of Machine Learning][eurovis] and Elijah Meeks, a data visualization engineer at Netflix, [recently wrote][meeks] that “Data visualization of the performance of algorithms for the purpose of identifying anomalies and generating trust is going to be the major growth area in data visualization in the coming years.”

An early step in the process of developing AI software is data exploration, sometimes also called [exploratory data analysis, or EDA][eda]. This has historically largely been done by making charts and other visualizations of a dataset. In the context of AI development, this is often done early in the process in order to get a sense of what kind of AI software approaches are likely to work for the problem at hand. One particular challenge of AI development is that input datasets are often of very high dimensionality: if they were represented as tables they would have many columns. A number of data visualization techniques have been developed to help understand relationships within high-dimensional datasets, such as [parallel coordinate plots][parcoords], [scatterplot matrices][splom], [scagnostics][scag] and various dimensionality-reduction visualization algorithms such as multidimensional scaling or the [popular t-SNE algorithm][tsne].

The structure of AI software is usually that of a pipeline of steps that feed into each other in complex ways. AI developers find it helpful to be able see and edit visual representations of the pipelines they work with, and specialized visual tools have been developed to help them visualize them, such as the [TensorFlow Graph Visualizer][tb] system in the popular TensorFlow library, or the [Microsoft Azure ML Studio][azure].

Once the AI software has learned a model from a dataset, AI developers need to be able to  to evaluate how well it performs at its designated task. Often this results in disappointment, leading to a need to explain and understand what the system has learned in order to improve it. In evaluation, [receiver operating characteristic (ROC) curves][roc] are used to evaluate the results of classification algorithms, and [silhouette plots][sil] are used to do the same thing for clustering. Data visualization is especially helpful in evaluation because models often exhibit a range of behaviours whose outcome can’t be evaluated at a point, but rather as a trade-off curve or surface or hyper-surface, which are often understandable only qualitatively via visualization rather than numerically as a score. When it comes to understanding what a system has learned, visual tools are under development such as [ActiVis][ActiVis] for deep neural nets or [Clustervision][Clustervision] for clustering, to highlight just two efforts published last year.

Modern AI research has, of course, expanded beyond just classifying and clustering tabular datasets to also operate on unstructured datasets such as mixtures of text, images, and speech audio. Working with large image datasets naturally lends itself to visual tools, and the recent leaps in image-recognition and labelling software has been accompanied by impressive software that researchers use to understand how their algorithms “see” the world. Techniques developed to [visualize how individual units][deepvis] in a deep neural network operate have recently led to very interesting visual art projects such as [DeepDream][DeepDream] and [Neural Style Transfer][nst]. An [incredible visual exploration of the building blocks of how deep nets “see”](https://distill.pub/2018/building-blocks/) has recently been published over at Distill.pub, as has a visualization of [how handwriting recognition works](https://distill.pub/2016/handwriting/).

Once an AI system – the AI software and the models it produces – has been developed and performs to the satisfaction of its creators, a final critical hurdle needs to be cleared before it can be used to automate any real-world tasks: human gatekeepers need to be convinced that this is a safe and profitable thing to do. In the case of self-driving cars or medical image analysis for example, we need to be able to trust software to make life and death decisions. In a way, this is the same challenge as exists in development: a human needs to understand how a system works and what kinds of results it can produce, but gatekeepers usually have very different backgrounds from developers – they are businesspeople or judges or doctors or non-software engineers – and here again data visualization can help them understand the ways in which AI systems respond to data. The humans who are involved in approving AI systems for use are often those who currently perform similar tasks, and want to know why an AI system responds to data the way it does, couched in the terms they themselves reason in. This “interpretability” requirement has historically led to the use of easily-explained, easily-visualized model structures such as [linear regressions][coefplot] or [decision trees][trees]. Recently, however, systems like [Rivelo][Rivelo] or [LIME][LIME] have been developed to visually explain individual predictions of very complex models (regardless of the model structure) with the explicit goal of helping people become comfortable with and trust the output of AI systems. Data visualization has also been helpful in explaining some of the [economic][mlecon] or [fairness][mlethics] trade-offs involved in using artificial intelligence instead of the human variety to make various types of decisions.

One final area where data visualization is useful to AI development is education. This is also related to understanding how models work, but aimed at different audiences: future AI developers in training or interested laypeople who have an interest in understanding the algorithms that have an increasing impact on their lives. Interactive visualizations such as the [neural network playground][playground], [Distill.pub][distill] and [others][r2d3] have served as an introduction to AI theory and practice for hundreds of people and this show no sign of slowing.

## Artificial Intelligence for Data Visualization

So far I have provided a number of examples of how data visualization can be useful in artificial intelligence development, but the reverse is also true. AI techniques can be useful in data visualization today and have the potential to be even more so in the years to come.

The use of advanced data-processing software, such as AI software, coupled with data visualization is sometimes referred to as [Visual Analytics][va]. In the visual analytics paradigm, a data visualization user enters into a discourse with a software system about some data, querying it and receiving results back in visual form, so as to accomplish a goal, be it answering a specific question or just getting a feel for what a dataset might contain. Current, slightly clunky examples of natural language, conversational approaches to this include [Wolfram Alpha][wolfram] and [Microsoft PowerBI Natural Language Querying][powerbi]. To the extent that modern AI systems are getting better and better at interpreting human speech however, for example with Apple’s Siri and Amazon’s Alexa, we might expect that this type of conversational visual analytic discourse will be become more natural and powerful over time. For example, AI systems have recently been developed which can generate [realistic looking images from textual descriptions][imagegen]. This suggests that while today the actual process of visualizing data is largely a matter of either pointing and clicking or writing out instructions in a programming language, AI might make it possible to visualize data by chatting out loud with a computer, Star Trek style – although it's [far from clear that this is even desirable][few].

Interestingly, this process can also run be backwards: AI systems can [generate text or speech from data or graphics][captions], automatically captioning them, and this has been applied to data visualization as well, for example [Tableau’s integration with NarrativeScience][narrativescience]. This image-to-text approach has also been extended to enable AI systems to [start from a sketch][airbnb] or visual specification for a website, and then [create that website itself][pix2code]: going from image to code (i.e. a specific, structured form of text). AI systems can even [dynamically generate new font faces or shoe designs](https://distill.pub/2017/aia/) based on examples of what is desired. In terms of applying these techniques to datavis, Bret Victor’s [Drawing Dynamic Visualization][worrydream] and Adobe’s [Project Lincoln][lincoln] demos show what non-AI sketch-based input systems might look like for visualization. It may well be possible to blend these approaches create an AI system that can take either a freehand sketch of some desired output or some examples of visualizations similar to the desired one, and automatically create the code for visualization pipeline that would generate the target visualization when applied to arbitraty data. If feasible, this would in a sense represent AI systems competing directly with human business intelligence developers or data visualization designers, much like they already compete with human computer-vision programmers and may one day seriously compete with human translators or radiologists.

On a more collaborative note, when a human and machine both participate in  a process like this, querying and suggesting in turn, the resulting process is referred to as a [mixed initiative][mi] system. A natural next step beyond an AI system producing visualizations on demand as the result of a human query about data is the notion of an AI system suggesting interesting or useful visual representations of data without a query. This is sometimes called [visualization recommendation][voyager], and has recently been an active area of data visualization. AI systems have already been used to create powerful and profitable recommendation systems for [books](https://www.amazon.ca/), [music](https://www.spotify.com/), [movies](https://www.netflix.com/), [clothing](http://algorithms-tour.stitchfix.com/) and many other products, so there may be reason to believe that AI techniques could apply to visualization recommendation as well.

As a thought experiment, one intriguing possible application of a mixed-initiative system that could mash up a number of the techniques listed above would be an automated anomaly detection system with associated visualization recommendation and verbal explanations. Anomaly detection is an area where AI systems alone are unlikely to be particularly useful, at least the ones we know how to build today, because by definition anomalies are strange and new situations for which there is not a lot of training data, so humans need to be involved in responding. One could imagine an AI system continually “watching” a stream of data about a complex system like a data center or a nuclear power plant, and when something new or interesting happens, it would alert a human and automatically recommend a custom visual representation of that specific anomaly, providing a verbal description of what is interesting about it. The human operator could then converse with the AI system to refine their understanding of the situation and take appropriate action. Such a system would contrast with the way systems monitoring is currently done, which involves creating a predefined set of alert conditions which are hard to tune by hand and dashboard-style visualizations that humans quickly get bored with and ignore, neither of which often serve to uncover novel anomalies anyway.

## Conclusions & Further Reading

In this article I’ve tried to organize and highlight some of the rich interactions between data visualization and artificial intelligence techniques; simple and complex, existing and speculative. I’ve surely missed some very interesting examples or potential future directions, and in my enthusiasm for what may be possible I’ve surely underplayed significant technical challenges, both of which I'd be glad to hear about. If you’d like to get in touch to brainstorm or let me know about interesting connections between datavis and AI, please reach out!

If you are interested in following developments in these fields and their interactions, the following people, publications and conferences are great starting points:

* The [Google Big Picture][bigpic] research group is at the forefront of using datavis to further AI development
* The [University of Washington Interactive Design Lab (IDL)][IDL] is where the [TensorFlow Graph Visualizer][tb] and the [Voyager datavis recommendation][voyager] system were developed
* The [IEEE VIS conference][vis], especially the Visual Analytics Science and Technology (VAST) track is where many datavis techniques applicable to AI are published, and exists to further the Visual Analytics agenda
* [Distill.pub][distill] is a new kind of journal dedicated to visual explanations of AI systems
* [Two Minute Papers][2min] a YouTube channel with quick and accessible highlights from visually-impressive AI papers
* In my research for this article, I kept on coming across papers by [Kanit Wongsuphasawat][ham] and [Josua Krause][josh], no matter what thread I was pulling on, so clearly these are two researchers worth following!

[scag]: https://www.cs.uic.edu/~tdang/file/ScagExplorer.pdf
[2min]: https://www.youtube.com/channel/UCbfYPyITQ-7l4upoX8nvctg
[imagegen]: https://arxiv.org/pdf/1612.03242.pdf
[josh]: https://josuakrause.github.io/info/
[ham]: http://kanitw.github.io/
[eurovis]: https://www.youtube.com/watch?v=E70lG9-HGEM
[eda]: https://en.wikipedia.org/wiki/Exploratory_data_analysis
[parcoords]: https://en.wikipedia.org/wiki/Parallel_coordinates
[splom]: http://www.itl.nist.gov/div898/handbook/eda/section3/scatplma.htm
[tsne]: http://projector.tensorflow.org/
[tb]: https://www.tensorflow.org/programmers_guide/graph_viz
[azure]: https://azure.microsoft.com/en-us/services/machine-learning-studio/
[roc]: https://en.wikipedia.org/wiki/Receiver_operating_characteristic
[sil]: http://scikit-learn.org/stable/auto_examples/cluster/plot_kmeans_silhouette_analysis.html
[ActiVis]: https://arxiv.org/pdf/1704.01942.pdf
[Clustervision]: http://perer.org/papers/adamPerer-Clustervision-VAST2017.pdf
[deepvis]: https://distill.pub/2017/feature-visualization/
[captions]: https://research.googleblog.com/2016/09/show-and-tell-image-captioning-open.html
[nst]: https://www.cv-foundation.org/openaccess/content_cvpr_2016/papers/Gatys_Image_Style_Transfer_CVPR_2016_paper.pdf
[DeepDream]: https://en.wikipedia.org/wiki/DeepDream
[few]: https://www.perceptualedge.com/blog/?p=2539
[coefplot]: http://repec.sowi.unibe.ch/stata/coefplot/getting-started.html
[trees]: https://pure.tue.nl/ws/files/3522084/672434611234867.pdf
[Rivelo]: https://static1.squarespace.com/static/5502f56fe4b0aa4bfbdae0a8/t/58f3a5f16b8f5bdee61806ea/1492362746108/rivelo-hilda17.pdf
[LIME]: https://arxiv.org/pdf/1602.04938.pdf
[mlecon]: http://blog.mldb.ai/blog/posts/2016/01/ml-meets-economics/
[mlethics]: https://research.google.com/bigpicture/attacking-discrimination-in-ml/
[playground]: http://playground.tensorflow.org
[r2d3]: http://www.r2d3.us/visual-intro-to-machine-learning-part-1/
[va]: http://www.academia.edu/download/2014224/7m39tnzv9cv0cz9.pdf
[wolfram]: https://www.wolframalpha.com/
[powerbi]: https://www.youtube.com/watch?v=iv4Ae7yV83Y
[narrativescience]: https://narrativescience.com/Partners/Business-Intelligence/Tableau
[worrydream]: https://vimeo.com/66085662
[lincoln]: https://www.youtube.com/watch?v=lX1BBMyY1bc
[airbnb]: https://airbnb.design/sketching-interfaces/
[mi]: http://erichorvitz.com/chi99horvitz.pdf
[pix2code]: https://arxiv.org/pdf/1705.07962.pdf
[voyager]: https://idl.cs.washington.edu/papers/voyager2/
[bigpic]: https://research.google.com/bigpicture/
[IDL]: http://idl.cs.washington.edu/
[vis]: http://www.cad.zju.edu.cn/home/vagblog/vispapers.html
[distill]: https://distill.pub/
[meeks]: https://medium.com/@Elijah_Meeks/what-is-a-senior-data-visualization-engineer-eb032996297
