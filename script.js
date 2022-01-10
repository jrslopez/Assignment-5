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
        //$('div.col-sm:last-child').clone().appendTo('.row')
    })

    $('.del-col').click(function () {
        $('div.col-sm:last-child').remove()
    })

    $('.changeAll').click(function () {
        console.log("clicked!")
        $('.row').children().each(function (){
            $(this).css('background-color', 'red')
        })
    })

})