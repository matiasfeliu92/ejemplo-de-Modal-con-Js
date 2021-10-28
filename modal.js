const modal = $('#tvesModal')
console.log(modal)

const btn = $('#btnModal')
console.log(btn)

const span = $('.close')
console.log(span)

const body = $('body')
console.log(body)

$('#btnModal').click(() => {
    $('#tvesModal').css({ "display": "block" })
    $('body').css({ "position": "static", "height": "100%", "overflow": "hidden" })
})

$('.close').click(() => {
    $('#tvesModal').css({ "display": "none" })
    $('body').css({ "position": "inherit", "height": "auto", "overflow": "visible" })
})

$(window).click((e) => {
    if (e.target == modal) {
        $('#tvesModal').css({ "display": "none" })
        $('body').css({ "position": "inherit", "height": "auto", "overflow": "visible" })
    }
})