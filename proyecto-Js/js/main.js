$(document).ready(function() {
    /*slider*/
    if (window.location.href.indexOf("index") > -1) {
        $(".galeria").bxSlider({
            mode: "fade",
            captions: true,
            slideWidth: 1000,
            responsive: true
        });
    }

    /*post*/

    if (window.location.href.indexOf("index") > -1) {
        var posts = [{
                title: " prueba titulo 1",
                date: new Date(),
                content: " Lorem ipsum dolor sit amet consectetur adipisicing elit Tempore repellendus ipsa tempora omnis corrupti laboriosam ullam cupiditate ut quis, commodi aspernatur animi. Assumenda, voluptatum recusandae repellat tempore saepe quibusdam laborum."
            },
            {
                title: " prueba titulo 2",
                date: new Date(),
                content: " Lorem ipsum dolor sit amet consectetur adipisicing elit Tempore repellendus ipsa tempora omnis corrupti laboriosam ullam cupiditate ut quis, commodi aspernatur animi. Assumenda, voluptatum recusandae repellat tempore saepe quibusdam laborum."
            },
            {
                title: " prueba titulo 3",
                date: new Date(),
                content: " Lorem ipsum dolor sit amet consectetur adipisicing elit Tempore repellendus ipsa tempora omnis corrupti laboriosam ullam cupiditate ut quis, commodi aspernatur animi. Assumenda, voluptatum recusandae repellat tempore saepe quibusdam laborum."
            },
            {
                title: " prueba titulo 4",
                date: new Date(),
                content: " Lorem ipsum dolor sit amet consectetur adipisicing elit Tempore repellendus ipsa tempora omnis corrupti laboriosam ullam cupiditate ut quis, commodi aspernatur animi. Assumenda, voluptatum recusandae repellat tempore saepe quibusdam laborum."
            },
            {
                title: " prueba titulo 5",
                date: new Date(),
                content: " Lorem ipsum dolor sit amet consectetur adipisicing elit Tempore repellendus ipsa tempora omnis corrupti laboriosam ullam cupiditate ut quis, commodi aspernatur animi. Assumenda, voluptatum recusandae repellat tempore saepe quibusdam laborum."
            }
        ];

        posts.forEach((item, index) => {
            var post = `
                      <article class="post">
                      <h2>${item.title}</h2>
                      <span class="date">${item.date}</span>

                      <p>${item.content}</p>
                      <a href="#" class="buttom-more">
                         Leer mas
                      </a>
                      </article> `;


            $("#posts").append(post);
        });
    }
    var theme = $("#theme");

    $("#to-green").click(function() {
        theme.attr("href", "./css/green.css");
    });

    $("#to-red").click(function() {
        theme.attr("href", "./css/red.css");
    });

    $("#to-blue").click(function() {
        theme.attr("href", "./css/blue.css");
    });

    //scroll arriba de la web
    $(".subir").click(function(e) {
        e.preventDefault;
        $("html, body").animate({
                scrollTop: 0
            },
            500
        );
        return false;
    });

    //login falso

    $("#login form").submit(function() {
        var formName = $("#formName").val();

        localStorage.setItem("formName", formName);
    });

    var formName = localStorage.getItem("formName");

    if (formName != null && formName != "undefine") {
        var aboutParrafo = $("#about p");

        aboutParrafo.html("<br><strong>Bienvenido," + formName + "</strong> ");
        aboutParrafo.append("<a href='#' id='logout'> Cerrar seccion </a>");

        $("#login").hide();

        $("#logout").click(function() {
            localStorage.clear();
            location.reload();
        });
    }

    if (window.location.href.indexOf("about") > -1) {
        $("#acordeon").accordion();
    }
    //validacion
    if (window.location.href.indexOf("contact") > -1) {
        $.validate({
            lang: 'es'
        });
    }


})