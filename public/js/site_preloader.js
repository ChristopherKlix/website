function sitePreloader() {
    setTimeout(() => {
        $('#site-preloader-h1-1').css('top', '0');
        $('#site-preloader-h1-2').css('bottom', '0');
        $('#site-preloader-h1-1').css('opacity', '1');
        $('#site-preloader-h1-2').css('opacity', '1');
    }, 500);
    
    // Fading in 'Welcome'
    setTimeout(() => {
        $('#site-preloader-p').css('transition-duration', '2s');
        $('#site-preloader-p').css('opacity', '1');
    }, 2002);

    // Moving outro-overlay to the left <-- WORKS!!!
    setTimeout(() => {
        $('#site-preloader-overlay').css('transition-duration', '1s');
        $('#site-preloader-overlay').css('top', '-100vh');
    }, 3503);

}

function noSitePreloader() {
    $('#site-preloader-overlay').css('top', '-100vh');
}

//sitePreloader();

noSitePreloader();