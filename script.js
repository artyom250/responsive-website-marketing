function ansFunc(element) {
    const ans = element.querySelector('.answer');
    const icon = element.querySelector(".bx-plus");
    icon.classList.toggle("rotate");
    ans.classList.toggle('show');
}

function sideFunc() {
    const overlay = document.querySelector(".before");
    const sidebar = document.querySelector(".sidebar");
    overlay.classList.toggle("show");
    sidebar.classList.toggle("move");
}