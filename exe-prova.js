function exercicioProva(){
    let anos = Number(document.getElementById("anos").value)
    let linguagem = Number(document.getElementById("linguagem").value)
    let salario
    let expectativa

    switch(linguagem){
        case 1: if (anos >= 5){
            salario = 6000
        }
                else if(anos < 5){
            salario = 3000
        }
        break
        case 2: if (anos >= 5){
            salario = 8000
        }
                else if(anos < 5){
            salario = 5000
        }
        break
        case 3: if (anos >= 5){
            salario = 7000
        }
                else if(anos < 5){
            salario = 4000
        }
        break
        default: salario = "Opção inválida"
    }
    document.getElementById("resultado").innerHTML = "R$" + salario

    if (salario < 4500){
        expectativa = "alta"
    }
    else if (salario >= 4500 && salario < 6000){
        expectativa = "média"
    }
    else if (salario >= 6000){
        expectativa = "baixa"
    }
    document.getElementById("expectativa").innerHTML = expectativa
}
