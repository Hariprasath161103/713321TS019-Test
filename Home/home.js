function drop() {
    const status = document.getElementById('drop-down-menu');
    if (status.style.display === 'block') {
        status.style.opacity = '0';
        status.style.maxHeight = '0';
        setTimeout(() => {
            status.style.display = 'none';
        }, 10);
    } else {
        status.style.display = 'block';
        setTimeout(() => {
            status.style.opacity = '1';
            status.style.maxHeight = status.scrollHeight + 'px';;
        }, 10);
    }
}
document.getElementById("head").innerText = "TAMILNADU"


setTimeout(() => {
    let arr = ["தமிழ்நாடு"]
    document.getElementById("head").innerText = arr[0];
    i = 1;
    names()
}, 3000)


