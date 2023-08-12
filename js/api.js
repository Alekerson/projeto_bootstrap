let tabela = document.querySelector("#tabela")

//async é uma forma que o JS tem de transformar uma função sincrona em assíncrona, muito ultilizada em APIs
async function carregarDados(){
    const url = "https://jsonplaceholder.org/users"

    const resultado = await fetch(url)//fetch irá fazer uma buscar na url passada como parâmentro

    const dados = await resultado.json()//Estamos convertendo todos os dados que estão vindo da api no formato json
    
    console.log(dados)
    for(const itens of dados){
        //CRIANDO ELEMENTOS HTML
        const linha = document.createElement("tr")
        const tdNome = document.createElement("td")
        const tdEmail = document.createElement("td")
        const tdOcupacao = document.createElement("td")
        const tdTelefone = document.createElement("td")
    
        //CRIANDO CONTEUDO NAS COLUNAS
        tdNome.textContent = itens.firstname
        tdEmail.textContent = itens.email
        tdOcupacao.textContent = itens.company.bs
        tdTelefone.textContent = itens.phone

        //ADICIONANDO OS ELEMENTOS EM SUAS TAGS
        linha.appendChild(tdNome)
        linha.appendChild(tdEmail)
        linha.appendChild(tdOcupacao)
        linha.appendChild(tdTelefone)

        tabela.appendChild(linha)
    }
}

carregarDados()