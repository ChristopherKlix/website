// Object initialization -----------------------------------------------

const mobileMenuObj = $('#mobile-menu');
const mobileMenuItemsObj = $('#mobile-menu-items a');
const mobileMenuIconDivObj = $('#menu-mobile-icon');
const mobileMenuIconElementObj = $('#menu-mobile-icon i');
const menuObj = $('#menu');

// Default/ Fallback mobile-menu animation -----------------------------

    /* Menu item on(click) */
mobileMenuItemsObj.on('click', function() {    
    mobileMenuObj.css('left', '-100vw');
    mobileMenuIconElementObj.removeClass('fa-times').addClass('fa-bars');
    mobileMenuIconDivObj.removeClass('mobile-menu-open').addClass('mobile-menu-closed')
});

    /* Menu Mobile Icon on(click) */
mobileMenuIconDivObj.on('click', function() {
    if (mobileMenuIconDivObj.hasClass('mobile-menu-closed')) {
        menuObj.css('box-shadow', '0px 0px 24px #00000033');
        mobileMenuObj.animate({left: '0'}, 100, 'easeInOutCubic');
        itemBehaviourIn();
        mobileMenuIconElementObj.removeClass('fa-bars').addClass('fa-times');
        mobileMenuIconDivObj.removeClass('mobile-menu-closed').addClass('mobile-menu-open')
    } else {
        itemBehaviourOut();
        //menuObj.css('box-shadow', '0px 0px 24px #000000ba');
        menuObj.delay(250).animate({boxShadow: '0px 0px 24px #000000ba'}, {
            duration: 100,
            easing: 'easeInOutCubic',
            complete: function() {
                //console.log('menuObj animation completed')
            },
            fail: function() {
                //console.log('menuObj animation failed')
            }
        });
        mobileMenuObj.delay(250).animate({left: '-100vw'}, 100, 'easeInOutCubic');
        mobileMenuIconElementObj.removeClass('fa-times').addClass('fa-bars');
        mobileMenuIconDivObj.removeClass('mobile-menu-open').addClass('mobile-menu-closed')
    };
});

// Item Behaviour Animations ---------------------------------------------

function itemBehaviourIn() {    
    for (let i = 1; i <= 5; i++) {        
        let mobileMenuItemsObj = $(`#mobile-menu-items a:nth-child(${i})`);
        mobileMenuItemsObj.animate({left: '0'}, i*100), 'easeInOutCubic';
    }
}

function itemBehaviourOut() {    
    for (let i = 5; i >= 1; i--) {        
        let mobileMenuItemsObj = $(`#mobile-menu-items a:nth-child(${i})`);
        let j = Math.abs(i-6);
        mobileMenuItemsObj.animate({left: '-100vw'}, j*50), 'easeInOutCubic';
    }
};
