/*


    TODO scripts that don't have their own files yet...

    some might work and are site breaking, some not...


*/

/* CHANGE CONTENT FOR MOBILE */

// get viewport width
let viewportWidth = $(window).width();

if (viewportWidth <= 600) {
    // fix cards-grid to the top instead of relative to hero image
    const cards_grid = $('#cards-grid');
    cards_grid.css('position', 'absolute');
    cards_grid.css('top', '4rem');

    // rearranging the tiles for priority on mobile
    $('#podcast').css('grid-row', '2 / span 1');
    $('#youtube').css('grid-row', '3 / span 1');
    $('#coding').css('grid-row', '4 / span 1');
    $('#musician').css('grid-row', '5 / span 1');
};

/* END */



/* BACK TOP TOP BUTTON ANIMATION */

// get reference to HTML tag
const backToTopBtn = $('#back-to-top');

// set initial properties
backToTopBtn.css('opacity', '0');
backToTopBtn.css('transition-property', 'opacity');
backToTopBtn.css('transition-duration', '.3s');

// function is called when user scrolls
// checks y coordinate on page to update opacity of the button
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

  /* END */
