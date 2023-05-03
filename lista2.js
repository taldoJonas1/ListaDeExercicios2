function ex1(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 = Number(document.getElementById("n3").value)
    let n4 = Number(document.getElementById("n4").value)
    let contentResult = (document.getElementById("resultado"))
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
    contentResult.classList.remove("hide")
}

function ex2(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let contentResult = (document.getElementById("resultado"))
    let media

    media = (n1 + n2) / 2

    if (media < 3) {
        document.getElementById("resultado").innerHTML = media + " Você foi reprovado!"
    }
    else if ((3 <= media) && (media < 7)) {
        document.getElementById("resultado").innerHTML = media + " Você fará o exame!"
    }
    else if ((7 <= media) && (media <= 10)) {
        document.getElementById("resultado").innerHTML = media + " Você foi aprovado!"
    }
    else {
        document.getElementById("resultado").innerHTML = "Ocorreu um erro."
    }
    
    contentResult.classList.remove("hide")
}

function ex3(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let contentResult = (document.getElementById("resultado"))
    if (n1 > n2) {
        document.getElementById("resultado").innerHTML = n2 + " é menor."
    }
    else if (n2 > n1) {
        document.getElementById("resultado").innerHTML = n1 + " é menor."
    }
    else if (n1 = n2) {
        document.getElementById("resultado").innerHTML = "São iguais."
    }
    contentResult.classList.remove("hide")
}

function ex4(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 = Number(document.getElementById("n3").value)
    let contentResult = (document.getElementById("resultado"))
    if ((n1 > n2) && (n1 > n3)) {
        document.getElementById("resultado").innerHTML = n1 + " é o maior."
    }
    else if ((n1 > n2) && (n2 = n3)) {
        document.getElementById("resultado").innerHTML = n1 + " é o maior."
    }
    else if ((n2 > n1) && (n2 > n3)) {
        document.getElementById("resultado").innerHTML = n2 + " é o maior."
    }
    else if ((n2 > n1) && (n1 = n3)) {
        document.getElementById("resultado").innerHTML = n2 + " é o maior."
    }
    else if ((n3 >= n1) && (n3 >= n2)){
        document.getElementById("resultado").innerHTML = n3 + " é o maior."
    }
    else if ((n3 > n1) && (n1 = n2)) {
        document.getElementById("resultado").innerHTML = n3 + " é o maior."
    }
    else if ((n1 = n2) && (n2 = n3)) {
        document.getElementById("resultado").innerHTML = "São iguais."
    }
    contentResult.classList.remove("hide")
}

function ex5(){
    // recupera nro1, nro2, escolha 
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let contentResult = (document.getElementById("resultado"))
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
    document.getElementById("resultado").innerHTML = "O resultado da operação é " + resultado
    contentResult.classList.remove("hide")
}
