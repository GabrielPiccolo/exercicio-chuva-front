function leiaMais(){
    var pontos = document.getElementById('pontos')
    var maisTexto = document.getElementById('mais')
    var btnLeiaMais = document.getElementById('btnLeiaMais')

    if(pontos.style.display === 'none'){
        pontos.style.display = 'inline';
        maisTexto.style.display = 'none';
        btnLeiaMais.innerHTML = 'Leia Mais';
    }
    else{
        pontos.style.display = 'none';
        maisTexto.style.display = 'inline';
        btnLeiaMais.innerHTML = 'Leia Menos';
    }
}

var btn = document.querySelector('#show-or-hide');
var form =document.querySelector('#form');

btn.addEventListener('click',function(){

    if(form.style.display === 'block'){
        form.style.display = 'none';
    }

    else{
        form.style.display = 'block';
    }

});