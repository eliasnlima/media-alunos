let calcular = document.getElementById("calc")


calcular.addEventListener("click", function() {

    let nomeAluno = document.getElementById("nome").value
    let pt = Number(document.getElementById("pt").value)
    let mat = Number(document.getElementById("mat").value)
    let cie = Number(document.getElementById("cie").value)
    let geo = Number(document.getElementById("ge").value)
    let his = Number(document.getElementById("his").value)
    let art = Number(document.getElementById("art").value)
    let edf = Number(document.getElementById("edf").value)

    result = undefined;

    let calculoMedia = 
    ((pt + mat + cie + geo + his + art + edf) / 7).toFixed(0)

    if (calculoMedia >= 5){
        result = "Aprovado!"
    } else if (calculoMedia < 5) {
        result = "Reprovado!"
    }


    console.log(calculoMedia)
    console.log(result)

    let tabela = document.getElementById("tabela-alunos")
    let linha = document.createElement("tr")
    linha.classList.add("aluno")
    tabela.appendChild(linha)

    let tdNome = document.createElement("td")
    tdNome.textContent = nomeAluno
    linha.appendChild(tdNome)

    let tdMateria1 = document.createElement("td")
    tdMateria1.textContent = pt
    linha.appendChild(tdMateria1)

    let tdMateria2 = document.createElement("td")
    tdMateria2.textContent = mat
    linha.appendChild(tdMateria2)

    let tdMateria3 = document.createElement("td")
    tdMateria3.textContent = cie
    linha.appendChild(tdMateria3)
   
    let tdMateria4 = document.createElement("td")
    tdMateria4.textContent = geo
    linha.appendChild(tdMateria4)

    let tdMateria5 = document.createElement("td")
    tdMateria5.textContent = his
    linha.appendChild(tdMateria5)

    let tdMateria6 = document.createElement("td")
    tdMateria6.textContent = art
    linha.appendChild(tdMateria6)

    let tdMateria7 = document.createElement("td")
    tdMateria7.textContent = edf
    linha.appendChild(tdMateria7)

    let tdStatus = document.createElement("td")
    tdStatus.textContent = result
    linha.appendChild(tdStatus)

    let tdExcluir = document.createElement("td")
    linha.appendChild(tdExcluir)
    let buttonExcluir = document.createElement("button")
    tdExcluir.appendChild(buttonExcluir)
    buttonExcluir.classList.add("excluir")
    buttonExcluir.classList.add("fa-solid", "fa-trash")
    
    buttonExcluir.addEventListener("click", function(){
        linha.remove()
    })


    if (result === "Aprovado!") {
        tdStatus.classList.add("stts-aprovado")
    } else if (result === "Reprovado!") {
        tdStatus.classList.add("stts-reprovado")
    }

    document.getElementById("nome").value = ""
    document.getElementById("pt").value = ""
    document.getElementById("mat").value = ""
    document.getElementById("cie").value = ""
    document.getElementById("ge").value = ""
    document.getElementById("his").value = ""
    document.getElementById("art").value = ""
    document.getElementById("edf").value = ""

     
})

