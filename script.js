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
        let color = $('#changeAll').val()
        //console.log(color)
        $('.row').children().each(function (){
            $(this).css('background-color', color)
        })
    })

    $('.changeWhite').click(function () {
        let color = $('#changeWhite').val()
        $('.row').children().each(function (){
            //console.log($(this).css('background-color'))
            if ($(this).css('background-color') == 'rgba(0, 0, 0, 0)')
            {
                //console.log("success")
                $(this).css('background-color', color)
            }
        })
    })

    $('.clear-color').click(function () {
        $('.row').children().each(function (){
            $(this).css('background-color', 'rgba(0, 0, 0, 0)')
        })
    })

})