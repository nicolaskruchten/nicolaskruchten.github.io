---
layout : post
title : Volunteer Database for Santropol Roulant
image: http://nicolas.kruchten.com/images/Volunteers.png
github: nicolaskruchten/volunteerdb
tags:
    - Tools
---

There's an organization in Montreal I think is awesome called [Santropol Roulant][sr] which, among other things, has a meals-on-wheels operation. They have hundreds of volunteers and wanted to upgrade the system they used to store their volunteer information, so I helped them out, and I've [open-sourced the results][repo], in case any other non-profit wants a very simple volunteer-list management system.

<!-- more -->

They had an existing system to manage volunteer information as part of a custom-made PHP web application so we didn't want to drift too too far from that. The core use-cases were to maintain volunteer contact (create, update, delete) information and retrieve it (search, read). The major pain-point in the old application was the edit form and the lack of usability in the form validation.

I chose [CakePHP][cp] (2.2.3) as a framework to build on, so that it would be easier to find people to do maintenance later on. Also, being a well-tested framework, it correctly handles accented characters in form input, which was a major shortcoming of the existing application.

Not being particularly interested in writing a lot of CSS from scratch, I opted to use [Bootstrap][bs] (2.1.1) for the layout, as it comes with nice form-validation CSS and various other usability goodies. Bootstrap depends on jQuery, so I decided to use [jQuery Validate][jv] (1.9.0) for client-side validation of the form. With very minimal effort, I was able to wire up CakePHP to generate the right markup to cause jQuery Validate to light up the appropriate Bootstrap classes in case of validation failures, which really improved the usability of the form. The file I did this in, in case is [Volunteers/edit.ctp][ex], in case Google leads anyone here in search of how to do this. I was also able to set up Bootstrap's typeahead system to get an auto-completing search form to make it quick and easy to look up volunteer information.

[repo]: https://github.com/nicolaskruchten/volunteerdb
[sr]: http://santropolroulant.org/
[cp]: http://book.cakephp.org/2.0/en/index.html
[bs]: http://getbootstrap.com/2.3.2/
[jv]: http://jqueryvalidation.org/
[ex]: https://github.com/nicolaskruchten/volunteerdb/blob/santropol/app/View/Volunteers/edit.ctp
