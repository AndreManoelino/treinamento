let personagem = document.querySelector('#personagem')
let quadrado = document.querySelector('quadrado')

function pular(){
    if(personagem.classllist != 'animar'){
       personagem.classList.add('animar')
    }

   setTimeout(function(){
      personagem.classList.remove('animar')
      }, 500)
}  

var testarcolisao = setinterval( function(){
    
    var topoPersonagem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue('top')
    )
    var topoPersonagem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue('left')
    )

    if(EsquerdaQuadrado < 20 && EsquerdaQuadrado > 0 && topoPersonagem >= 130){
    quadrado.style.animation = 'none'
    quadrado.style.display = 'none'
    alert('Você perdeu!')
}


}, 10)

    
