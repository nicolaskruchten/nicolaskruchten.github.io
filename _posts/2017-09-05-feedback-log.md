---
layout : post
title : "The Feedback Log: My Product Owner Workflow"
image: /images/feedback_log.png
tags:
    - Essays
---

In an agile software development project, the role of the product owner comes with the responsibily of managing the product backlog. Most [popular definitions][bl] of the [backlog][safe_bl] are [quite broad][jira_bl], encouraging product owners to include in it every feature request, bugfix, idea related to the product etc. I have found it more helpful, however, to distinguish between backlog items on the one hand (i.e. changes that as a product owner I intend to be made to the product) and feedback items on the other (i.e. bug reports, feature requests, ideas etc.)

<!-- more -->

The reason I find this distinction helpful is that it makes the backlog a more useful source of information: anyone with access to the backlog can see my current best guess as to what changes will be made to the product. If the backlog also contains a jumble of partly-specified, potentially-contradictory items written by other people, I have found it to be less useful and occasionally confusing or misleading to people both within and outside of the development team.

### Feedback Items

Here are a few examples of what I call feedback items which I have encountered in the past few years and what happened to the product as a result, which help to motivate the distinction I’m making:

  * For a client-side Javascript library, a feature request for server-side integration in PHP.
      * This did not lead to any changes in the product because it was explicitly out of scope.
  * For an SQL database, a bug report stating that using column aliases in WHERE-clauses results in an error.
      * This did not lead to any changes in the product because it is not actually a bug: the SQL language doesn't allow this for various good reasons.
  * For a general-purpose reporting tool, a feature request for a button that generates a specific report.
      * This did not lead to any changes in the product because once the user understood how to use the general-purpose tool worked, her needs for that specific report were met.
  * For an online advertising optimization tool, multiple bug reports stating that certain types of ads were not being purchased.
      * This led to extensive changes in the documentation and sales process, explaining the mechanism and outcomes of the optimization tool, including the possibility that not purchasing certain types of ads would lead to better overall outcomes.
  * For an app's onboarding flow, multiple feature requests for modal dialogs to help confused users figure out the next step.
      * This led to changes in the product to restructure the onboarding screen with a wizard-style navbar that users followed naturally, without resorting to interruptions with instructional popups.

Although some of these feedback items were clear indications of how a stakeholder thought the product should work, and so could be added to the backlog, I’ve found it more useful to look at these as instances of stakeholders telling me about a problem they face, often in the guise of a suggested solution. I say “suggested” because once the problem is clearly stated, it is often possible for the product team to find an even better solution, for example a more general one, or one that is easier to implement. I find this way of looking at feedback items useful because it helps me distinguish between the two parts of the role I play when wearing a product owner hat: determining which stakeholders problems the product will solve, and determining which solution the product will incorporate to address these problems.

In each of the above cases, my reaction as a product owner to stakeholder feedback was not to automatically add the features requests and bug fixes to the backlog for eventual estimation, prioritization and implementation. Rather, it was to correspond with the stakeholder to clarify their actual needs and find the best way to meet them, while maintaining the product's coherence. After all, it’s wasteful to estimate or prioritize work which isn't going to get done.

The core of the distinction I make between feedback items and backlog items is that while it is useful to track backlog items to communicate with the development team about the selected solution to one or more problems, it is also useful to keep track of feedback items for understanding problems and communicating with stakeholders. These different uses suggest to me that these types of items should be tracked separately, as they have different lifecycles.

### The Feedback Log

So if feedback items don't belong on the backlog, where do they belong and how to deal with them? The approach I have been using has been to maintain a separate list, which I call the feedback log, of all the meaningful feedback that has been received about the product, and to use this list to generate new backlog items as appropriate.

The lifecycle of a feedback item looks roughly like this, assuming the use of JIRA as a workflow-management tool:

1. A bug report, feature request, question or idea makes its way to me, either through email or an in-product feedback form or an interaction between a salesperson and a lead or an account manager and a customer. I try to cast a very wide net here to catch as much diverse feedback as possible.
     * I have found that feedback often comes in the form of "How can I?" questions. Sometimes users are trying to do something and getting an error due to a bug or because the user interface or documentation wasn't clear enough to help them succeed or understand why it isn't possible. Sometimes users assume the product does something it doesn't and asks how they can do it, which I treat as an implicit feature request.
2. I create a new feedback item in JIRA and I take care to record the feedback as verbatim as possible from the original source.
     * I differentiate the feedback log from the backlog either by letting each one have its own JIRA project or JIRA issue-type within the same project, so as to be able to easily create views which contain one but not the other
     * I make sure that everyone on the team, including sales and account management, has access to both lists, in the spirit of transparency.
     * In fact, ideally anyone in the team can and is encouraged to directly create feedback items, and conversely discouraged from creating backlog items, as the backlog should be controlled by the product owner.
3. I communicate with the originating stakeholder to understand the problem they are trying to solve:
     * If it's a bug report and I can replicate it and consider it a bug, I let them know what I'm planning to do about it and if there is a workaround.
     * If the user is reporting what they feel is a bug but I consider it appropriate behaviour, I try to dig into the source of the mismatch, could there be a documentation or sales process problem?
     * If the stakeholder is requesting a feature, I try to dig into the underlying need, and if there is any way to meet that need with the current feature-set, I propose this to them as a "workaround" to see if we can actually meet their needs without changing anything.
     * If the stakeholder is requesting a feature that is clearly out of scope today, I try to be gently up front with them about that.
     * In the case of clear bugs like regressions, crashes etc with a likely obvious fix, or for likely quick and easy feature requests which I think make sense, I convert the feedback item into a backlog item for estimation/prioritization/implementation.
     * If after some correspondence, the stakeholder no longer feels that there is a bug, or no longer feels that a new feature is desired because existing functionality meets their needs, I mark the item as closed, and possibly either update the documentation myself or generate a backlog item to do so or to clarify the user interface/error messages etc.
4. If the item was not closed or moved to the backlog, I use JIRA’s link feature to create bidirectional links between this feedback item and any other related/similar items. Bidirectional links make it very easy to see how often a given issue has been brought up and how different stakeholders have phrased their feedback around this issue.
     * In most cases, there is not enough development team bandwidth to move past this stage until some later date, so unclosed items will stick around in the feedback log, accumulating backlinks from related items as appropriate.
5. As part of regular roadmapping work, the feedback log is an invaluable tool in creating new backlog items:
     * Similar items which come up repeatedly are good candidates for getting moved straight into the backlog if they are in scope for the product. If they are not in scope, they are good candidates for FAQ entries or documentation/sales-process clarification.
     * Dissimilar feature requests or bug reports which point to the same underlying problem or need suggest an opportunity for brainstorming some new features or the creation of a new product.
     * Whenever I create a backlog item in reaction to a feedback item, I create a link between the two so that when the changes to the product are released, I can follow up with the stakeholder (or the account manager) to let them know. This helps foster good relationships and allows me to catch situations where the changes we made didn't actually address the feedback due to some miscommunication.
6. I groom the feedback log just like the backlog, linking items as I discover new relationships between them over time, and corresponding with users as we make product changes/finish backlog items which address their feedback directly or could meet their previously-expressed needs in different ways. It's a great feeling for both me as a product owner and for the user when I can get back to them a few months after they made a request to let them know that we have now addressed it in production.

### Other Tools & Workflows

The main alternative to this explicit distinction between feedback items and backlog items is to treat feedback items as part of the backlog and then to structure the backlog in some way. A popular approach seems to be based on a kitchen metaphor whereby the backlog has an “icebox” section of items which are being “kept on ice” until they can be “thawed”. Pivotal Tracker actually has a feature called the [Icebox][icebox] for this purpose, although even [their blog][defrost] suggests moving some items out of the backlog into “a more general purpose project management or issue tracking tool” such as JIRA. [Some variants][freezer] of this metaphor have multiple backlog sections such as freezer/fridge/back-burner/front-burner. I feel that my approach makes more explicit to everyone the fact that feedback has been received and is being kept track of, and that it has a different lifecycle than backlog items. To restate a point I made above, feedback items aren’t just “features that we haven’t gotten around to implementing yet”: they are pointers to problems that stakeholders have that the product may or may not end up solving in the suggested manner.

The workflow I detailed above uses JIRA, because that’s what I was using to manage the backlog when I decided to split off the feedback log. Using JIRA to manage the feedback log makes it really easy to convert feedback items into backlog items and to link things together etc using JIRA’s bidirectional links. That said, there are now tools built specifically for product managers, such as [Aha][aha] and [Receptive][receptive], that could be used to support this workflow with some modifications. I’ve also seen [various][groove] other [articles][burrito] around the web that suggest [Trello][trello] for managing something that looks a lot like my feedback log, albeit using different names like “waiting room” or “DMZ”.

In conclusion, I have found it valuable to read about other product teams’ concrete workflows for managing their backlog and user feedback, and I hope this essay will provide a useful data point for other product owners trying to find their way to a process that works for them. I would be happy to hear about contrasting or similar experiences if anyone wants to reach out by email or Twitter!

*Thanks to [Steve Adolph][steve], who reviewed a draft of this essay and gave valuable feedback.*


[bl]: https://www.agilealliance.org/glossary/backlog
[icebox]: https://www.pivotaltracker.com/help/articles/managing_the_icebox/
[jira_bl]: https://www.atlassian.com/agile/backlogs
[safe_bl]: http://www.scaledagileframework.com/team-backlog/
[burrito]: https://foldingburritos.com/articles/2015/07/06/organizing-a-large-product-backlog/
[groove]: https://www.groovehq.com/blog/managing-bugs-and-feature-requests
[defrost]: https://www.pivotaltracker.com/blog/defrosting-your-icebox/
[freezer]: https://www.open.collab.net/media/pdfs/SBU_DRDefinitionOfDone.pdf
[aha]: https://www.aha.io/
[receptive]: https://receptive.io/
[trello]: https://trello.com/
[steve]: http://steveadolph.com/


