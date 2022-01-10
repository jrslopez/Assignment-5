//console.log("Hello from script")

$(document).ready(function () {

    $('.add-row').click(function () {
        $('.row').last().clone().appendTo('.container')
    })

    $('.del-row').click(function () {
        $('.row').last().remove()
    })

})