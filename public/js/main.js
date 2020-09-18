let viewportWidth = $(window).width();

if (viewportWidth <= 600) {
    const blogBtnObj = $('#blog-btn');
    blogBtnObj.html('Only on desktop')
};

const backToTopBtn = $('#back-to-top');
backToTopBtn.css('opacity', '0');
backToTopBtn.css('transition-property', 'opacity');
backToTopBtn.css('transition-duration', '.3s');

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 160 && y < 180) {
      $('#back-to-top').css('opacity', '.2');
    } else if (y > 180 && y < 200) {
      $('#back-to-top').css('opacity', '.4');
    } else if (y > 200 && y < 220) {
        $('#back-to-top').css('opacity', '.6');
    } else if (y > 220 && y < 240) {
        $('#back-to-top').css('opacity', '.8');
    } else if (y > 240) {
        $('#back-to-top').css('opacity', '1');
    } else {
        $('#back-to-top').css('opacity', '0');
    }
  });
