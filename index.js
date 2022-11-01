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



const article = [
    {
        name: "Jeep",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        id: "1",
        src: "assets/eljeep-willy-mini_willys_15.jpg",
        price: "200$",
        quantity: 1
    },
    {
        name: "Christmas Gift",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        id: "2",
        src: "assets/jul-81a9wrfirbl-_sl1200_-600x600.jpg",
        price: "10$",
        quantity: 1
    },
    {
        name: "Pino",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        id: "3",
        src: "assets/pino-3.jpg",
        price: "40$",
        quantity: 1
    }
]

const array = []

article.forEach(Element => {
    $(".cont").append(`
        <div style="background-image:linear-gradient(to bottom, rgba(172, 16, 16, 0.5), rgba(28, 41, 14, 0.5)),url('${Element.src}');" id="article${Element.id}" class="box">
            <h2>${Element.name}</h2>
            <p>${Element.description}</p>
            <h3>${Element.price}</h3>
            <a id="${Element.id}" class="btn">Add to cart</a>
        </div>
    `)
    $(`#article${Element.id}`).css('background-image', Element.src)

    $(`#${Element.id}`).on('click', () => {
        (array.includes(Element)) ? array.filter(e => e.id == Element.id).map(e => e.quantity++) : array.push(Element);
        array.forEach(Element => {
            if (Element.quantity == 1) {
                addToCart(Element)
                updateArray(Element)
            }
            else if (array.length != 0) {
                updateArray(Element)
            }
        })

    })

})

$(`#addToCart`).on('click', (event) => {
    let p = event.target.id.split('element')
    const filtred = array
    console.log(filtred);
    if (filtred[0].quantity >= 1) {
        filtred[0].quantity--
        array.map(e => updateArray(e))
    }
    if (filtred[0].quantity == 0) {
        filtred.splice(0, 1)
        $(`#element${p[1]}`).remove()
        $(`#totalelement${p[1]}`).remove()
    }
    array.map(e => updateArray(e))
})

const addToCart = Element => {
    $('#addToCart').append(`
        <p class="element" id="element${Element.id}">
            <a>${Element.name}</a> 
            <span class="price"></span>
            Delete
        </p>
    `)
    $('.containe #e').append(`
        <p id="totalelement${Element.id}">
            <a>${Element.name}</a> 
            <span class="price"></span>
        </p>
    `)
}

const updateArray = Element => {
    let total = 0
    let totalQuantity = 0

    $(`#totalelement${Element.id} span`).text(`${Element.price} x${Element.quantity}`)
    $(`#element${Element.id} span`).text(`${Element.price} x${Element.quantity}`)
    array.map(e => total += eval(parseInt(e.price) * e.quantity))
    array.map(e => totalQuantity += e.quantity)
    $(`.shopping-cart-total .main-color-text`).text(`$ ${total}`)
    $('.badge').text(`${totalQuantity}`)
    $('.qty').text(`${totalQuantity}`)
    $('.totalPrice').text(`${total}`)
}

$('#all').on('click', () => {
    $('#article1').fadeIn(500)
    $('#article2').fadeIn(500)
    $('#article3').fadeIn(500)
})

$('#cars').on('click', () => {
    $('#article1').fadeIn(500)
    $('#article2').fadeOut(500)
    $('#article3').fadeOut(500)
})

$('#house').on('click', () => {
    $('#article2').fadeIn(500)
    $('#article1').fadeOut(500)
    $('#article3').fadeOut(500)
})

$('#animals').on('click', () => {
    $('#article3').fadeIn(500)
    $('#article1').fadeOut(500)
    $('#article2').fadeOut(500)
})