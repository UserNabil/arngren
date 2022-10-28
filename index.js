function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

$(".open-cart").on('click', () => {
    ($(".displaycart").css("display") == 'block') ? $(".displaycart").fadeOut(600) : $(".displaycart").fadeIn(600);
})

function scrollto(div) {
    $('html,body').animate(
        {
            scrollTop: $(`#${div}`).offset().top
        }, 'slow');
}

$("#checkout").on('click', () => {
    $(".displaycart").fadeOut(600)
    $('html,body').animate(
        {
            scrollTop: $(`#payment`).offset().top
        }, 'slow');
})

$("#")