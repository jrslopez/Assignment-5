//console.log("Hello from script")

$(document).ready(function () {

    $('.add-row').click(function () {
        $('.row').last().clone().appendTo('.container')
        //$('.row').last().addClass("last")
    })

    $('.del-row').click(function () {
        $('.row').last().remove()
    })

    $('.add-col').click(function () {
        $('.col-sm').last().clone().appendTo('.row')
    })

    $('.del-col').click(function () {
        //$('.col-sm').last().remove()
        $('div.col-sm:last-child').remove()
    })
})