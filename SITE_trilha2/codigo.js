let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slider = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slider.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slider.length}
    for (i = 0; i < slider.length; i++) {slider[i].style.display = "none";}
    for (i = 0; i < dots.length; i++) {dots[i].className = dots[i].className.replace(" active", "");}
    slider[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000);
}

const button = document.querySelector(".button");

    function formularioPreenchido() {
        var mensagem = "Formulário preenchido com sucesso! A receita será enviada para seu e-mail em breve.";
        alert(mensagem);
    }

const button2 = document.querySelector(".button2");

    function mensagemEnviada() {
        var mensagem = "Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.";
        alert(mensagem);
    }

const gallery = document.querySelector(".gallery");

    function alerta() {
        var mensagem = "Se interessou por nossas peças? Aguarde novidades em breve!";
        alert(mensagem);
    }
