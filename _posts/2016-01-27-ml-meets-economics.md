---
layout: redirect
title: Machine Learning Meets Economics
dest: http://mldb.ai/blog/posts/2016/01/ml-meets-economics/
tags:
    - Datacratic
---

The business world is full of streams of items that need to be filtered or evaluated: parts on an assembly line, resumés in an application pile, emails in a delivery queue, transactions awaiting processing. Machine learning techniques are increasingly being used to make such processes more efficient: image processing to flag bad parts, text analysis to surface good candidates, spam filtering to sort email, fraud detection to lower transaction costs etc.

In this article, I show how you can take business factors into account when using machine learning to solve these kinds of problems with binary classifiers. Specifically, I show how the concept of expected utility from the field of economics maps onto the Receiver Operating Characteristic (ROC) space often used by machine learning practitioners to compare and evaluate models for binary classification. I begin with a parable illustrating the dangers of not taking such factors into account. This concrete story is followed by a more formal mathematical look at the use of indifference curves in ROC space to avoid this kind of problem and guide model development. I wrap up with some recommendations for successfully using binary classifiers to solve business problems.