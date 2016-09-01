---
layout : post
title : A Modest Proposal for Ethical Ad Blocking
image: http://nicolas.kruchten.com/images/modest/youradhere.png
tags:
    - Real-Time Bidding
---

If you've ever been browsing the web and been annoyed by those [One Weird Trick ads][owt], or by ads for that product you looked at online last month and then bought offline, you've probably given a thought to blocking ads altogether. The response to this idea, from people who run websites for a living, ranges from "it's unethical" to "it's stealing!". According to them, the reason you get to use a website without paying for it yourself is that in exchange you see ads and website owners gets paid by the advertisers. That’s a polite summary of the great [Ad-Blocking Debate][abd], which has been going on since the early days of the commercial web. I'm not going to take sides here; rather I'll propose a compromise enabled by a recent development in online advertising technology. I'm going to describe a "weird trick," if you will: how to use the same system as those ads that follow you around to *block* ads, all the while ensuring that the websites you frequent have nothing to complain about.

<!-- more -->

How *do* ads follow you around the web, anyway? This works through a mechanism known as Real-Time Bidding, or RTB for short, which is used for a growing proportion of ads on websites ranging from blogs to newspapers and from YouTube to Facebook. With RTB, when you load up a website in your browser, an auction happens in the background: within a few milliseconds, various advertisers bid very small amounts of money for the right to place an ad on that site for you to see. The website gets paid by the winning bidder for showing you their ad. If you've been seeing ads for a product you recently looked at online, that product's advertiser is bidding higher than others when you browse various websites, in the hope of enticing you back, and that's why you end up seeing their ads more often. 

![One Weird Trick and Mondrian](http://nicolas.kruchten.com/images/modest/oneweirdmondrian.png)
        
My proposal for ethical ad blocking works like this: if you don't want to see ads on websites, you get someone to participate in these auctions on your behalf, and to bid higher than everyone else. When you win an auction, you end up paying the website (no more accusations of unethical behaviour!) and in return you can show yourself a "non-ad" of your choice. This could be a white rectangle, if you don't mind blank spots on websites where ads usually go, or you can get creative and use pictures of famous works of art, or the weather, or stock quotes or hockey scores or whatever strikes your fancy. If you did this for video sites, you wouldn't have to sit through video commercials either: you could see fifteen seconds of bird-song instead if you like. In essence, you would become an advertiser with a target market of one: yourself.

If this sounds like an expensive way to block ads, let me put your fears to rest. First of all, ads cost only a few dollars per thousand, and you probably don't see more than a couple thousand web ads per month; so this will only cost you a few dollars a month. Furthermore, the way RTB auctions work is that the winning bidder pays only as much as the second-highest bidder bid. This means that you can bid very high without needing to pay very much, depending on how much the other advertisers were willing to bid on you. And if an advertiser does top your very-high bid, you don't pay anything, but that advertiser pays however much you bid, and that money goes to the website where the ad is shown. Even if you weren't willing to pay enough per month to see no ads at all, you could cheaply guarantee that only legitimate advertisers, willing to pay a premium to reach you, could show you ads: no more One Weird Trick banners.

![Pennies](http://nicolas.kruchten.com/images/modest/pennies.jpeg)

If this sounds a bit complicated, well, I'll grant you that it actually is. This is less a concrete how-to for individuals and more of a thought experiment. It’s also a potential business idea: some enterprising soul could create a service to do this on your behalf for a monthly fee, most of which would get distributed to the websites you frequent. This service could actually be a big deal, because it would basically solve another web riddle about as old as the Ad-Blocking Debate: the [Micropayments Problem][mp]. To date, nobody has come up with a workable system for people to pay websites tiny amounts of money for each use, which would be an alternative to having advertisers be the main revenue source for websites. The closest anyone has come is what is known as a "pay wall" where you pay a few dollars a month up front *per site* to get access to content, no matter how little of that content you read or watch or listen to (and you often still get ads around that content).

Seen through this lens, let's recap what happens under my proposal: you go to a website to read an article or watch a video, you pay the website less than a cent (which is exactly what an advertiser would have paid to show you an ad) and you don’t have to see any ads. The website in question, which could be a blog or your local newspaper, or YouTube or Facebook, doesn't have to do any kind of additional work to enable this, because this all happens via systems they already have in place today. Sounds like an ideal micropayment system to me.

Edit: [Google Contributor](https://www.google.com/contributor/welcome/) essentially implemented exactly this idea some time after I posted this, although I'm sure they independently came up with it.

[owt]: http://www.slate.com/articles/business/moneybox/2013/07/how_one_weird_trick_conquered_the_internet_what_happens_when_you_click_on.single.html
[abd]: https://www.google.ca/search?q=ethical+ad+blocking
[mp]: http://www.shirky.com/weblog/2009/02/why-small-payments-wont-save-publishers/
