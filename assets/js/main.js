
$(document).ready(function(){

/* navbar */

    $( ".cross" ).hide();
    $( ".nav-list-hamburger" ).hide();

    $( ".hamburger" ).click(function() {
        $( ".nav-list-hamburger" ).slideToggle( "slow", function() {
        $( ".hamburger" ).hide();
        $( ".cross" ).show();
        });
    });

    $( ".cross" ).click(function() {
    $( ".nav-list-hamburger" ).slideToggle( "slow", function() {
        $( ".cross" ).hide();
        $( ".hamburger" ).show();
        });
    });

/* country */

    $('#countyList li a').click(function(e){
        e.preventDefault();
        $('#countyList li a').removeClass('active');
        $(this).addClass('active');

        let targetedItem = $(this).data('target');
        if(targetedItem === 'all') {
            $('.filterDiv').show();
        } else {
            $('.filterDiv').hide();
            $('.'+targetedItem).show();
        }
    })

})

/*  gallery */

new Swiper('.gallery-slider',{
    speed: 500,
    loop: true,
    autoplay: {
        delay: 5000,
        desableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    }
});
