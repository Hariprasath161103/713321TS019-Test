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
const disp = () => {
    document.getElementById("thank").style.display = "block";
    setTimeout(() => {
        document.getElementById("thank").style.display = "none";
    }, 2000)

}
