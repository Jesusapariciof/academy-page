let animado = document.querySelectorAll(".imagen1");
let animado2 = document.querySelectorAll(".card.mb-3");

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for(let i=0; i < animado.length; i++){
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado - 300 > scrollTop){
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarIzquierda")
        }
    }
}
window.addEventListener('scroll', mostrarScroll)

function mostrarScroll2(){
    let scrollTop2 = document.documentElement.scrollTop;
    for(let i=0; i < animado2.length; i++){
        let alturaAnimado2 = animado2[i].offsetTop;
        if(alturaAnimado2 - 500 > scrollTop2){
            animado2[i].style.opacity = 1;
            animado2[i].classList.add("mostrarArriba")
        }
    }
}
window.addEventListener('scroll', mostrarScroll2)


  