
function atoggle(cual) {
    var scol = document.getElementById("single");
    var mcol = document.getElementById("multi");
    if (cual == 1) {
        scol.classList.add('d-none');
        mcol.classList.remove('d-none');
    } else {
        mcol.classList.add('d-none');
        scol.classList.remove('d-none');
    }
}
