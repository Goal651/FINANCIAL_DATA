let btn = document.getElementById('btn');
btn.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains('dark-theme')){
        btn.src="../list of icons/sun.png"
    }else{
        btn.src="../list of icons/moon.png"
    }
}