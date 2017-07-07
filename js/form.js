$(function() {
    $('#main__form-submit').click(sendForm);

});

function sendForm(e) {
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/warcraftik819@gmail.com",
        method: "POST",
        data: {
            name: $('#name').val(),
           
            email: $('#email').val(),
            text: $('#message').val(),
           
          
           
        },
        dataType: "json"
    })
    .done(function () {
        $('.main__form-h2').html('Thank You');
        document.getElementById("form").reset();
    });
}