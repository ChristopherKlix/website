function blogIntro() {
    $('#blog-intro-overlay').css('left', '0');

    setTimeout(() => {
        $('#blog-intro-p').css('transition-duration', '1s');
        $('#blog-intro-p').css('opacity', '1');
    }, 1000);

    /*setTimeout(() => {
        window.location.href = "generation-space.christopherklix.com";
    }, 3000)*/

    setTimeout(() => {
        window.location.href = "generation-space.html";
    }, 3000)

};

function introSlide() {

    // Fading out 'Loading...'
    setTimeout(() => {
        $('#blog-outro-p').css('transition-duration', '1s');
        $('#blog-outro-p').css('opacity', '0');
    }, 1000);    
    
    // Changing <p> content to 'Welcome' <-- WORKS!!!
    setTimeout(() => {
        $('#blog-outro-p').html('Welcome');
    }, 2001);    

    // Fading in 'Welcome'
    setTimeout(() => {
        $('#blog-outro-p').css('transition-duration', '2s');
        $('#blog-outro-p').css('opacity', '1');
    }, 2002);

    // Moving outro-overlay to the left <-- WORKS!!!
    setTimeout(() => {
        $('#blog-outro-overlay').css('transition-duration', '1s');
        $('#blog-outro-overlay').css('left', '-100vw');
    }, 3503);    

}

introSlide();

//noIntroSlide();

function noIntroSlide() {
    $('#blog-outro-overlay').css('left', '-100vw');
}