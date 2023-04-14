var hoje = new Date();
var horaAtual = hoje.getHours();
var cor;

if (horaAtual > 18 ) {
    cor = 'noturno';
} else if (horaAtual > 6 ) {
    cor = 'diurno';
} 

var hotItens = document.querySelectorAll('li.hot');

if (cor = 'noturno') {
    if (hotItens.length > 0) {
        for (var i=0; i < hotItens.length; i++) {
            hotItens[i].className = 'cool';
        }
    }   
} 

else if (cor = 'diurno') {
    if (hotItens.length > 0) {
        for (var i=0; i < hotItens.length; i++) {
            hotItens[i].className = 'hot';
        }
    }   
}

