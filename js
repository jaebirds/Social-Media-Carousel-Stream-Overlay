/******************

    Social Media Carousel Stream Overlay
    Made by Jaebirds

    Ver 1.01

    https://github.com/jaebirds/Social-Media-Carousel-Stream-Overlay
    https://twitter.com/JaebirdsArts

******************/

$(document).ready(function() {

    var displayDuration = {{displayDuration}};
    var effectIn = "{{effectIn}}";
    var effectOut = "{{effectOut}}";
    var animationInDuration = {{animationInDuration}};
    var animationOutDuration = {{animationOutDuration}};
    var animationInbetween = {{animationInbetween}};
    var items = $(".item");

    var socials = [];
    socials.push({icon: "discord", name: "{{socialsDiscord}}"});
    socials.push({icon: "facebook-square", name: "{{socialsFacebook}}"});
    socials.push({icon: "instagram", name: "{{socialsInstagram}}"});
    socials.push({icon: "reddit-square", name: "{{socialsReddit}}"});
    socials.push({icon: "tiktok", name: "{{socialsTikTok}}"});
    socials.push({icon: "tumblr", name: "{{socialsTumblr}}"});
    socials.push({icon: "twitch", name: "{{socialsTwitch}}"});
    socials.push({icon: "twitter", name: "{{socialsTwitter}}"});
    socials.push({icon: "youtube", name: "{{socialsYouTube}}"});

    socials.forEach(function(social, i) {

        if (socials[i].name.trim() != "") {
            var toAppend = "";
            toAppend += "<div class='item'>";
            toAppend += "<i class='fa fa-fw fa-" + socials[i].icon;
          	if ("{{iconColour2}}" == "brand")
              toAppend += " brand-colour";
          	toAppend += "'></i>";
            toAppend += "<span>" + socials[i].name.trim() + "</span>";
            toAppend += "</div>";
            $("#social-media-carousel-container").append(toAppend);
        }
    });

    var i = 0;
    numItems = $(".item").length;

    if (numItems) { showItem(); }

    function showItem() {
        $(".item").eq(i)
        .delay(animationInbetween)
        .show(effectIn, animationInDuration)
        .delay(displayDuration)
        .hide(effectOut, animationOutDuration, function(){
            if (i + 1 >= numItems)
                i = 0;
            else
                i++;
            showItem();
        });
    }

});