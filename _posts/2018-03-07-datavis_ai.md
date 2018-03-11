---
layout: post
title: Data Visualization for Artificial Intelligence, and Vice Versa
tags:
    - Data Visualization
    - Machine Learning
---

interpretability? ... pix2code? my tsne stuff? distill terminology?

Data visualization uses algorithms to create images from so humans can respond to data more effectively. Artificial intelligence development is the quest for algorithms that can respond to data the same was as a human can, or better. It might be tempting to think that the relationship between the two is that to the extent that AI development succeeds, datavis will become irrelevant. After all, will we need a speedometer to visualize how fast a car is going if it’s driving itself? Perhaps in some distant future, this might be the case, but as things stand today data visualization has a lot to offer AI development, and AI has the potential to give much more back to data visualization.

<!-- more -->

## Data Visualization for Artificial Intelligence

Artificial intelligence development is a bit different from typical software development: the first step – writing software – is the same, but instead of using the software you wrote, like in normal software development, the AI software you write then takes some data as input and creates the software that you use. This step is referred to as the AI system training or learning, and the software you use in the end is sometimes called a model. Like all technology- and data-intensive endeavours, data visualization is a core part of the developer’s toolkit. Datavis is a critical tool in various steps of the development process: exploring the data that the AI software will learn from, developing the AI software, understanding and evaluating the model that the AI software has learned, and finally explaining that model to the people who might want to use it.

An early step in the process of developing AI software is data exploration, sometimes also called [exploratory data analysis, or EDA][eda]. This has historically largely been done by making charts and other visualizations of a dataset. In the context of AI development, this is done in order to get a sense of what kind of AI software approaches are likely to work for the problem at hand. One particular challenge of AI development is that input datasets are often of very high dimensionality: if they were represented as tables they would have many columns. A number of data visualization techniques have been developed to help understand relationships within high-dimensional datasets, such as [parallel coordinate plots][parcoords], [scatterplot matrices][splom], and various dimensionality-reduction visualization algorithms such as multidimensional scaling or [t-SNE][tsne], which I've written about a few times.

The structure of AI software is usually that of a pipeline of steps that feed into each other in complex ways. AI developers find it helpful to be able see and edit visual representations of the pipelines they work with, and specialized visual tools have been developed to help them visualize them, such as the [Tensorboard][tb] system in the popular TensorFlow library, or the [Microsoft Azure ML Studio][azure].

Once the AI software has learned a model from a dataset, AI developers need to be able to  to evaluate how well it performs at its designated task. Often this results in disappointment, leading to a need to explain and understand what the system has learned in order to improve it. In evaluation, [receiver operating characteristic (ROC) curves][roc] are used to evaluate the results of classification algorithms, and [silhouette plots][sil] are used to do the same thing for clustering. Data visualization is especially helpful in evaluation because models often exhibit a range of behaviours whose outcome can’t be evaluated at a point, but rather as a trade-off curve or surface or hyper-surface, which are often understandable only qualitatively via visualization rather than numerically as a score. When it comes to understanding what a system has learned, visual tools are under development such as [ActiVis][ActiVis] for deep neural nets [Clustervision][Clustervision] for clustering, to highlight just two efforts published last year!

Modern AI research has, of course, expanded beyond just classifying and clustering tabular datasets to also operate on unstructured datasets such as mixtures of text, images, and speech audio. Working with large image datasets naturally lends itself to visual tools, and the recent leaps in image-recognition and labelling software has been accompanied by impressive software that researchers use to understand how their algorithms “see” the world. Techniques developed to [visualize how individual units][deepvis] in a deep neural network operate have recently led to very interesting visual art projects such as [DeepDream][DeepDream] and [Neural Style Transfer][nst].

Once an AI system – the AI software and the models it produces – has been developed and performs to the satisfaction of its creators, a final critical hurdle needs to be cleared before it can be used to automate any real-world tasks: humans need to be convinced that this is a safe and profitable thing to do. In a way, this is the same challenge as exists in development: a human needs to understand how a system works and what kinds of results it can produce, but final decision-makers usually have very different backgrounds from developers – they are businesspeople or judges or doctors or non-software engineers – and here again data visualization can help them understand the ways in which AI systems respond to data. The humans who are involved in approving AI systems for use are often those who currently perform similar tasks, and want to know “why” an AI system responds to data the way it does. This requirement has historically led to the use of easily-explained, easily-visualized model structures such as [linear regressions][coefplot] or [decision trees][trees]. Recently, however, systems like [Rivelo][Rivelo] or [LIME][LIME] have been developed to visually explain individual predictions of very complex models explicitly so as to help people become comfortable with and trust the output of AI systems. Data visualization has also been helpful in explaining the [economic][mlecon] or [ethical][mlethics] trade-offs involved in using artificial intelligence instead of the human variety to make various types of decisions.

One final area where data visualization is useful to AI development is education. This is also related to understanding how models work, but aimed at different audiences: future AI developers in training or interested laypeople who have an interest in understanding the algorithms that have an increasing impact on their lives. Interactive visualizations such as the [neural network playground][playground] and [others][r2d3] have served as an introduction to AI theory and practice for hundreds of people and show no sign of slowing.

## Artificial Intelligence for Data Visualization

So far I have provided a number of examples of how data visualization can be useful in artificial intelligence development, but the reverse is also true. AI techniques can be useful in data visualization today and have the potential to be even more so in the years to come.

As mentioned above, [exploratory data analysis (EDA)][eda] has historically been supported by data visualization: literally just looking at data to see if any patterns emerge. AI software can actually help with this process as well, as AI systems excel at finding patterns in data. This is essentially what AI learning is: finding patterns in data, and the model which is the output of AI software is in a real sense a representation of the data that it has been trained on. This means that a powerful extension to EDA is to use AI software to train a model, then use same types of visual explanation and interpretation tools mentioned above to understand what the model has learned about the data, as a proxy for learning about the data itself.

The use of advanced data-processing software coupled with data visualization is sometimes referred to as [Visual Analytics][va]. In the visual analytics paradigm, a data visualization user enters into a discourse with software about data, querying it and receiving results back in visual form, so as to accomplish a goal, be it answering a specific question or just getting a feel for what a dataset might contain. Current examples of this type of approach include [Wolfram Alpha][wolfram] and [Microsoft PowerBI Natural Language Querying][powerbi]. To the extent that modern AI systems are getting better and better at interpreting human speech, for example Apple’s Siri system and Amazon’s Alexa, we might expect that this type of conversational visual analytic discourse will be become more natural and powerful over time. Interestingly, this process can also run be backwards: AI systems can generate text or speech from data, and this has been applied to data visualization as well, for example [Tableau’s integration with NarrativeScience][narrativescience].

Beyond speech or text as a way of querying data, the recent success of deep neural networks for generating images suggest an interesting possible avenue for AI applied to data visualization: automatic generation of visualizations based on sketches or examples. Bret Victor’s [Drawing Dynamic Visualization][worrydream] and Adobe’s [Project Lincoln][lincoln] demos show what a sketch-based input system might look like for data visualization today. AI systems already exist for [turning design sketches of computer interfaces into working code][airbnb], and of [transferring artistic style][nst] information from one image to another. It may be possible to blend the two and show an AI system a freehand a sketch of some desired output or some examples of visualizations similar to the desired one, and then have the system automatically create a visualization pipeline to apply to arbitrary data that would generate the target visualization. If feasible, this would in effect be AI systems competing directly with the data visualization designer for knowledge-worker tasks, much like they may one day seriously compete with human translators or radiologists.

On a more collaborative note, when a human and machine take turns “driving” a process like this, querying and suggesting in turn, the resulting process is referred to as a “[mixed initiative][mi]” system. A natural next step beyond an AI system producing data visualization on demand as the result of a human query about data is the notion of an AI system suggesting interesting visual representations of data without a query. This is sometimes called [visualization recommendation][voyager], and has recently been an active area of data visualization . AI systems have been used to create powerful and profitable recommendation systems for music, movies and increasingly, any retail product, so there may be reason to believe that this research could apply to visualization recommendation as well.

One intriguing application of a mixed-initiative system that could blend some of the techniques listed above would be automated anomaly detection with associated visualization recommendation and verbal explanations. Imagine an AI system continually “watching” a stream of data, and when something new or interesting happens, it would alert a human and automatically recommend a custom visual representation of the anomaly, providing a verbal description of what is interesting about it. Such a system would contrast with the way systems monitoring is currently done, which involves a priori creating a set of “dashboard” visualizations that human intelligences quickly get bored with and ignore, and which rarely serve to uncover novel anomalies anyway.

## Conclusions & Further Reading

In this article I’ve tried to organize and highlight some of the rich interactions between data visualization and artificial intelligence techniques; simple and complex, existing and potential, so as to share my passion for these fields. I’ve surely missed some very interesting interactions or future directions, and in my enthusiasm for what may be possible I’ve surely underplayed significant technical challenges, both of which I'd be glad to hear about. If you’d like to get in touch to brainstorm or let me know about interesting connections between datavis and AI, please get in touch!

If you are interested in following developments in these fields and their interactions, the following people, publications and conferences are great starting points:
* [Google Big Picture][bigpic]
* [IDL][IDL]
* [IEEE VIS conference][vis], especially the Visual Analytics Science and Technology or VAST track
* [Distill.pub][distill]


[eda]: https://en.wikipedia.org/wiki/Exploratory_data_analysis
[parcoords]: https://en.wikipedia.org/wiki/Parallel_coordinates
[splom]: http://www.itl.nist.gov/div898/handbook/eda/section3/scatplma.htm
[tsne]: https://distill.pub/2016/misread-tsne/
[tb]: https://www.tensorflow.org/programmers_guide/graph_viz
[azure]: https://azure.microsoft.com/en-us/services/machine-learning-studio/
[roc]: https://en.wikipedia.org/wiki/Receiver_operating_characteristic
[sil]: http://scikit-learn.org/stable/auto_examples/cluster/plot_kmeans_silhouette_analysis.html
[ActiVis]: https://arxiv.org/pdf/1704.01942.pdf
[Clustervision]: http://perer.org/papers/adamPerer-Clustervision-VAST2017.pdf
[deepvis]: https://distill.pub/2017/feature-visualization/
[nst]: https://www.cv-foundation.org/openaccess/content_cvpr_2016/papers/Gatys_Image_Style_Transfer_CVPR_2016_paper.pdf
[DeepDream]: https://en.wikipedia.org/wiki/DeepDream
[coefplot]: http://repec.sowi.unibe.ch/stata/coefplot/getting-started.html
[trees]: http://vzcr.blogspot.ca/2015/12/decision-trees-and-random-forests.html
[Rivelo]: https://static1.squarespace.com/static/5502f56fe4b0aa4bfbdae0a8/t/58f3a5f16b8f5bdee61806ea/1492362746108/rivelo-hilda17.pdf
[LIME]: https://arxiv.org/abs/1602.04938
[mlecon]: http://blog.mldb.ai/blog/posts/2016/01/ml-meets-economics/
[mlethics]: https://research.google.com/bigpicture/attacking-discrimination-in-ml/
[playground]: http://playground.tensorflow.org
[r2d3]: http://www.r2d3.us/visual-intro-to-machine-learning-part-1/
[va]: http://www.visual-analytics.eu/faq/
[wolfram]: https://www.wolframalpha.com/
[powerbi]: https://www.youtube.com/watch?v=iv4Ae7yV83Y
[narrativescience]: https://narrativescience.com/Partners/Business-Intelligence/Tableau
[worrydream]: https://vimeo.com/66085662
[lincoln]: https://www.youtube.com/watch?v=lX1BBMyY1bc
[airbnb]: https://airbnb.design/sketching-interfaces/
[mi]: http://erichorvitz.com/chi99horvitz.pdf
[voyager]: https://idl.cs.washington.edu/papers/voyager2/
[bigpic]: https://research.google.com/bigpicture/
[IDL]: http://idl.cs.washington.edu/
[vis]: http://www.cad.zju.edu.cn/home/vagblog/vispapers.html
[distill]: https://distill.pub/
