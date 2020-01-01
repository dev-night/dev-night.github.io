jQuery(document).ready(function($) {
  function switchColorMode() {
    $("body").toggleClass("solarized-dark");

    // Make button display current state
    $("#dark_mode").toggleClass("btn-default");
    $("#dark_mode").toggleClass("btn-success");

    // Display white icon
    $(".linkjuice__icon").toggleClass("linkjuice__icon-white");

    // Change spoiler
    $(".spoiler").toggleClass("dark_spoiler");

    // Change logo
    $("#logo").toggleClass("shadowfilter");
    $("#logo").toggleClass("shadowfilter_white");
  }

  // Dark Mode Button
  $("#dark_mode").on("click", function(e) {
    switchColorMode();
  });

  // Switch color mode based on the time of the day
  const hours = new Date().getHours();
  if (hours >= 19 || hours <= 6) {
    console.log("true");
    switchColorMode();
  }

  linkjuice.init(".container", {
    selectors: ["h2", "h3", "h4", "h5"],
    icon: '<i class="linkjuice__icon"></i>'
  });

  // Scroll To Top
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 50,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $(".cd-top");

  //hide or show the "back to top" link
  $(window).scroll(function() {
    $(this).scrollTop() > offset
      ? $back_to_top.addClass("cd-is-visible")
      : $back_to_top.removeClass("cd-is-visible cd-fade-out");
    if ($(this).scrollTop() > offset_opacity) {
      $back_to_top.addClass("cd-fade-out");
    }
  });

  //smooth scroll to top
  $back_to_top.on("click", function(event) {
    event.preventDefault();
    $("body,html").animate(
      {
        scrollTop: 0
      },
      scroll_top_duration
    );
  });

  // make stream disappear when nothing is happening
  var configReference = db.collection("config").doc("CIZUKewI7NHwweQ3ZqZo");

  configReference.get().then(function(snapshot) {
    const startDate = snapshot.data().start_livestream;

    const current = new Date();
    const start = new Date(startDate);

    if (start.getTime() <= current.getTime()) {
      $(".livestream-section").append(
        " \
				<iframe id='ls_embed_1539691978' src='https://livestream.com/accounts/23776270/events/8406262/player?width=640&height=360&enableInfoAndActivity=true&defaultDrawer=&autoPlay=true&mute=false' width='816' height='440' frameborder='0' scrolling='no' allowfullscreen> </iframe> \
				<script type='text/javascript' data-embed_id='ls_embed_1539691978' src='https://livestream.com/assets/plugins/referrer_tracking.js'></script> \
				<br /> \
				<br /> \
			"
      );
    }
  });
});
