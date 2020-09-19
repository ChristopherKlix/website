function blogIntro() {
    $('#blog-intro-overlay').css('transition-duration', '1s');
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

function redirect_to_podcast() {
    $('#blog-intro-overlay').css('transition-duration', '1s');
    $('#blog-intro-overlay').css('left', '0');

    setTimeout(() => {
        $('#blog-intro-p').css('transition-duration', '1s');
        $('#blog-intro-p').css('opacity', '1');
    }, 1000);

    setTimeout(() => {
        window.location.href = "https://generation-space.simplecast.com/";
    }, 3000)
}