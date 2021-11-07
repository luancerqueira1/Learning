//animate smooth scrool
$('#view-work').on('click', function() {
    const images = $('#images').position().top;

    $('html ,body').animate(
        {
            scrolTop: images
        },
        900
    );

});