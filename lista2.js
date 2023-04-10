function ex1(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 = Number(document.getElementById("n3").value)
    let n4 = Number(document.getElementById("n4").value)
    let media
    let resultado

    media = (n1 + n2 + n3 + n4) / 4
    if (media >= 7){
        resultado = "Aprovado"
    }
    else {
        resultado = "Reprovado"
    }
    document.getElementById("resultado").innerHTML = resultado
}

function ex2(){
    
}

function ex5(){
    // recupera nro1, nro2, escolha 
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let escolha = Number(document.getElementById("escolha").value)
    // vamos verificar o que o usuário escolheu
    let resultado
    switch(escolha){
        case 1: resultado = (n1 + n2) / 2
                break // não entra nos cases de baixo
        case 2: if (n1 >= n2){
                    resultado = n1 - n2
                }
                else {
                    resultado = n2 - n1
                }
                break
        case 3: resultado = n1 * n2
                break
        case 4: if (nro2 != 0) {
                    resultado = n1 / n2
                }
                else {
                    resultado = "Não pode dividir por zero"
                }
                break
        default: resultado = "Opção inválida"
    }
    // saída do dados
    document.getElementById("resultado").innerHTML = resultado
}
