const hours = document.getElementById('hour')
const mins = document.getElementById('min')
const secs = document.getElementById('sec')

function clockup() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    h = h <10 ? "0" + h : h;
    m = m <10 ? "0" + m : m;
    s = s <10 ? "0" + s : s;

    hours.innerHTML = h
    mins.innerHTML = m
    secs.innerHTML = s

    setTimeout(() =>{clockup()}, 1000)
}

clockup()