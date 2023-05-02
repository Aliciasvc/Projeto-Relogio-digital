const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval (function time() {
    var dateToday = new Date ();
    var hr = dateToday.getHours();
    var min = dateToday.getMinutes();
    var seg = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (seg < 10) seg = '0' + seg;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
    

})
