
    $(function(){
        /* main page */
        $('.span7 > .ghpb-post > img')
            .add('.span7 > .ghpb-post > p > img')
            .css("max-height", "400px")
            .each(function(){
                $(this).featherlight($(this).attr("src"));
                $(this)
                    .css({"padding-bottom": "20px", "cursor": "pointer"})
                    .wrap('<div class="row">')
                    .wrap('<div class="span5 offset1 text-center">')
                    ;
            });
        
        /* in post */
        $('.span8 > .ghpb-post > p > img')
            .css("max-height", "400px")
            .each(function(){
                $(this).featherlight($(this).attr("src"));
                $(this)
                    .css({"padding-bottom": "5px", "cursor": "pointer"})
                    .parent()
                    .wrap('<div class="row postimg">')
                    .wrap('<div class="span6 offset1 text-center">')
                    ;
            });
        
        /* in post, in link */
        $('.span8 > .ghpb-post > p > a > img')
            .css("max-height", "400px")
            .each(function(){
                $(this)
                    .parent().parent()
                    .wrap('<div class="row postimg">')
                    .wrap('<div class="span6 offset1 text-center">')
                    ;
            });
    });