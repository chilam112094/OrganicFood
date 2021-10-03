// JavaScript Document

$('#banner').owlCarousel({
	animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    loop:true,
    margin:10,
//	dots: false,
    nav:true,
	autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



$('#danhmuc').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
	autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})