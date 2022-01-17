$(function () {

    $("#boton_enviar").click(function () {
        alert("¡Enviado exitosamente!")
    })

    $(".card-body").click(function () {
        $(".card-text").toggle();
    })

    $('body').on('dblclick', 'h2', function () {
        $(this).css("color", "green");
    })

    $(document).ready(function () {

        $("#destacados").on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 1000, function () {
                    window.location.hash = hash;
                });
            }
        });
    });

    $(document).ready(function () {

        $("#quienessomos").on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 1000, function () {
                    window.location.hash = hash;
                });
            }
        });
    });

    $(document).ready(function () {

        $("#contactos").on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 1000, function () {
                    window.location.hash = hash;
                });
            }
        });
    });
    $(document).ready(function () {

        $("#inicio").on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 1000, function () {
                    window.location.hash = hash;
                });
            }
        });
    });

})