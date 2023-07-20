$(document).ready(function () {
    // Animaciones de aparición al hacer scroll
    $(window).scroll(function () {
      $(".fade-in").each(function () {
        var bottom_of_element = $(this).offset().top + $(this).outerHeight() * 0.8;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_element) {
          $(this).addClass("active");
        }
      });
    });
  });
  
    window.alert("Desde ya, muchas gracias por tomarse el tiempo de ver mi curriculum")

    // Animación de desplazamiento suave para los enlaces internos
    $("a[href^='#']").on('click', function (event) {
      event.preventDefault();
      var target = this.hash;
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 800);
    });
  
    // Animación de resaltado al pasar el mouse sobre las habilidades
    $(".skills li").hover(function () {
      $(this).animate({ fontSize: "18px", fontWeight: "bold" }, 200);
    }, function () {
      $(this).animate({ fontSize: "16px", fontWeight: "normal" }, 200);
    });
  