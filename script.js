$(document).ready(function () {

    $('.add-row').click(function () {
        $('.row').last().clone().appendTo('.container')
    })

    $('.del-row').click(function () {
        $('.row').last().remove()
    })

    $('.add-col').click(function () {
        $('.col-sm').last().clone().appendTo('.row')
    })

    $('.del-col').click(function () {
        $('div.col-sm:last-child').remove()
    })

    $('.changeAll').click(function () {
        let color = $('#changeAll').val()
        $('.row').children().each(function () {
            $(this).css('background-color', color)
        })
    })

    $('.changeWhite').click(function () {
        let color = $('#changeWhite').val()
        $('.row').children().each(function (){
            if ($(this).css('background-color') == 'rgba(0, 0, 0, 0)')
            {
                $(this).css('background-color', color)
            }
        })
    })

    $('.clear-color').click(function () {
        $('.row').children().each(function () {
            $(this).css('background-color', 'rgba(0, 0, 0, 0)')
        })
    })

    let isDown = false
    $(document).mousedown(function () {
        isDown = true
    }).mouseup(function () {
        isDown = false
    })

    $('.row').children().hover(function () {
        if (isDown) {
            $(this).css('background-color', $('#dragColor').val())
        }
    })

    $('.row').children().click(function () {
        $(this).css('background-color', $('#clickColor').val())
    })
})