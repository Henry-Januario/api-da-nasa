const btn = document.getElementById('submit')
btn.addEventListener('click', function () {
    apiDaNasa()
})

function apiDaNasa() {
    const data = $('#data').val();

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=QecdsA0cK1vr5blGuUQkvTYa2NXkyjSYBdKty3NW&date=${data}`,
        success: function (data) {
            apod(data);
        }

    })
}

function apod(resultado) {
    const imagem = $('#imagem');
    const titulo = $('#titulo');
    const descricao = $('#descricao');
    const assinatura = $('#assinatura');

    titulo.html(`${resultado.title}`);
    descricao.html(`${resultado.explanation}`);
    assinatura.html(`${resultado.copyright}`);

    if (resultado.media_type == 'image') {
        imagem.html(`<img class='img' src="${resultado.url}"/>`)
    } else {
        imagem.html(`<iframe class="img" src="${resultado.url}?autoplay=1&mute=1"></iframe>`)
    }
}
