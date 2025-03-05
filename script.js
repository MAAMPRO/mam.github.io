$(document).ready(function() {

  var tabsModule = {

    config: {
      "module": $(".tabsWrap"),
      "listBtn": $(".tabs li"),
      "content": $(".contentPanel"),
      "header": $(".contentPanel .panelTitle"),
      "description": $(".contentPanel .panelDesc"),
      "image": $(".contentPanel img"),
      "gradient": $(".gradientWrap"),
      "contentLeft": $(".contentLeft"),
      "tabsRight": $(".tabsRight"),
      "closeContent": $(".closeContent")
    },

    loadContent: function(title, desc, image) {
      tabsModule.config.header.text(title);
      tabsModule.config.description.text(desc);
      tabsModule.config.image.attr("src", image);
    },

    loadGradient: function(color) {
      tabsModule.config.gradient.toggleClass("active", false);
      tabsModule.config.gradient.closest("." + color).toggleClass("active", true);
    },

    // Mobile Layout
    mobileClasses: function() {
      tabsModule.config.listBtn.on("click", function() {
        if ($(window).width() <= 1170) {
          tabsModule.config.contentLeft.toggleClass("slideIn", true);
          tabsModule.config.tabsRight.toggleClass("slideOut", true);
        }
      });

      tabsModule.config.closeContent.on("click", function() {
        if ($(window).width() <= 1170) {
          tabsModule.config.contentLeft.toggleClass("slideIn", false);
          tabsModule.config.tabsRight.toggleClass("slideOut", false);
        }
      });
    },

    clickTab: function() {
      tabsModule.config.listBtn.on("click", function() {

        tabsModule.config.content.toggleClass("animate");
        setTimeout(function() {
          tabsModule.config.content.toggleClass("animate");
        }, 550);

        // Active Tab State
        tabsModule.config.listBtn.not(this).toggleClass("active", false);
        $(this).toggleClass("active", true);

        // Replace Content After First Half of Animation Completes
        setTimeout(function() {

          // Replace Content (panel 1)
          if (tabsModule.config.listBtn.eq(0).hasClass("active")) {
            //tabsModule.loadContent("Reputation Manager", "Track - Monitor - Engage", "https://d17my9ypnvqzep.cloudfront.net/35C5F64E-D137-45E8-A1E4-83D0CF1E97FB/779d8825-d4a9-484f-9f62-7bafacf3b030.png");
            //tabsModule.loadContent("Reputation Manager", "Track - Monitor - Engage", "https://img.avery.com/f_auto,q_auto,c_scale,w_180/web/templates/line-art/5160");
            //tabsModule.loadContent("Competition Tracker", "See everything that's being said about competitors online", "images/1.png");
            //tabsModule.loadContent("Avery5160", "Address Labels 1'' x 2-5/8  30 per Sheet White ", "images/Avery1.jpg");
            tabsModule.loadContent("Avery5160", "Template 5160 1''  x 2-5/8 Letter - 8-1/2'' x 11 White 30 per Sheet", "images/Avery/5160.jpg");
            tabsModule.loadGradient("orange");
          };

          // Replace Content (panel 2)
          if (tabsModule.config.listBtn.eq(1).hasClass("active")) {
            //tabsModule.loadContent("Competition Tracker", "See everything that's being said about competitors online", "https://d17my9ypnvqzep.cloudfront.net/35C5F64E-D137-45E8-A1E4-83D0CF1E97FB/378ad74c-d23d-49e1-a160-427d84198b19.png");
            //tabsModule.loadContent("Competition Tracker", "See everything that's being said about competitors online", "https://img.avery.com/f_auto,q_auto,c_scale,w_180/web/templates/line-art/5163");
            tabsModule.loadContent("Avery5163", "Shipping Labels 2'' x 4'' 10 per Sheet White", "images/Avery/5163.jpg");
            tabsModule.loadGradient("gray");
          };

          // Replace Content (panel 3)
          if (tabsModule.config.listBtn.eq(2).hasClass("active")) {
            tabsModule.loadContent("Avery5164", "Shipping Labels 3-1/3'' x 4'' 6 per Sheet White", "images/Avery/5164.jpg");
            tabsModule.loadGradient("blue");
          };

          // Replace Content (panel 4)
          if (tabsModule.config.listBtn.eq(3).hasClass("active")) {
            tabsModule.loadContent("Avery5167", "Return Address Labels 1/2'' x 1-3/4'' 80 per Sheet White", "images/Avery/5167.jpg");
            tabsModule.loadGradient("pink");
          };

          // Replace Content (panel 5)
          if (tabsModule.config.listBtn.eq(4).hasClass("active")) {
            tabsModule.loadContent("Avery5162", "Address Labels 1-1/3'' x 4'' 14 per Sheet White", "images/Avery/5162.jpg");
            tabsModule.loadGradient("darkpurple");
          };

          // Replace Content (panel 6)
          if (tabsModule.config.listBtn.eq(5).hasClass("active")) {
            tabsModule.loadContent("Avery5195", "Return Address Labels 2/3'' x 1-3/4'' 60 per Sheet White", "images/Avery/5195.jpg");
            tabsModule.loadGradient("teal");
          };

          // Replace Content (panel 7)
          if (tabsModule.config.listBtn.eq(6).hasClass("active")) {
            tabsModule.loadContent("Avery5126", "Shipping Labels 5-1/2'' x 8-1/2'' 2 per Sheet White", "images/Avery/5126.jpg");
            tabsModule.loadGradient("purple");
          };

          // Replace Content (panel 8)
          if (tabsModule.config.listBtn.eq(7).hasClass("active")) {
            tabsModule.loadContent("Avery8164", "Shipping Labels 3-1/3'' x 4'' 6 per Sheet White", "images/Avery/8164.jpg");
            tabsModule.loadGradient("tealpurple");
          };

          // Replace Content (panel 9)
          if (tabsModule.config.listBtn.eq(8).hasClass("active")) {
            tabsModule.loadContent("Avery8126", "Shipping Labels 5-1/2'' x 8-1/2'' 2 per Sheet White", "images/Avery/8126.jpg");
            tabsModule.loadGradient("bluepurple");
          };

          // Replace Content (panel 10)
          if (tabsModule.config.listBtn.eq(9).hasClass("active")) {
            tabsModule.loadContent("Avery6878", "Print-to-the-Edge Shipping Labels 3-3/4'' x 4-3/4'' 4 per Sheet White", "images/Avery/6878.jpg");
            tabsModule.loadGradient("tealgreen");
          };

          // Replace Content (panel 11)
          if (tabsModule.config.listBtn.eq(10).hasClass("active")) {
            tabsModule.loadContent("Avery5292", "Shipping Labels 4'' x 6'' 1 per Sheet White", "images/Avery/5292.jpg");
            tabsModule.loadGradient("teal");
          };

          // Replace Content (panel 12)
          if (tabsModule.config.listBtn.eq(11).hasClass("active")) {
            tabsModule.loadContent("Avery6876", "Print-to-the-Edge Shipping Labels 4-3/4'' x 7-3/4'' 2 per Sheet White", "images/Avery/6876.jpg");
            tabsModule.loadGradient("yellowpurple");
          };


          // Replace Content (panel 13)
          if (tabsModule.config.listBtn.eq(12).hasClass("active")) {
            tabsModule.loadContent("Avery5821", "Shipping Labels 2-1/2'' x 4'' 8 per Sheet White", "images/Avery/5821.jpg");
            tabsModule.loadGradient("yellowpurple");
          };

          // Replace Content (panel 14)
          if (tabsModule.config.listBtn.eq(13).hasClass("active")) {
            tabsModule.loadContent("Avery8168", "Shipping Labels 3-1/2'' x 5'' 4 per Sheet White", "images/Avery/8168.jpg");
            tabsModule.loadGradient("yellowpurple");
          };


          // Replace Content (panel 15)
          if (tabsModule.config.listBtn.eq(14).hasClass("active")) {
            tabsModule.loadContent("Avery11137", "WorkSaver Inserts for Hanging Folders 1/2'' x 3-1/2'' 20 per Set White", "images/Avery/11137.jpg");
            tabsModule.loadGradient("yellowpurple");
          };


          // Replace Content (panel 16)
          if (tabsModule.config.listBtn.eq(15).hasClass("active")) {
            tabsModule.loadContent("Avery80506", "Wraparound Address Labels 7-17/20''  x 1-3/4'' 5 per Sheet White", "images/Avery/80506.jpg");
            tabsModule.loadGradient("yellowpurple");
          };

        }, 350);

      });
    }
  }

  tabsModule.clickTab();
  tabsModule.mobileClasses();

});