// alert("Olá Mundo") 
//barra barra é comentarário de uma linha
/* comentário de mais de uma linha é esse aqui */

console.log("Só quem é dev vai descobrir") //é pra criar um registro de informação  

let nome = document.querySelector("#nome") //let é colocado antes de uma variavel para ser uma variavel mais restrita

function exibirNome(){
    console.log(nome.value)
    if(nome.value == ""){
        nome.style.border = "1px solid red"
    }
    else{
        nome.style.border = "1px solid green"
    }
}
    // function é pra criar uma função

nome.addEventListener("blur", exibirNome) // o addEventListener cria o evento para algum elemento, no caso estamos ultilizando o evento 'blur', que é quando o foco sai de um campo




let idade = document.querySelector("#idade")

idade.addEventListener("blur", function(){
    if(idade.value >= 18){
        alert("Você possui 18 anos ou mais")
    }
    else{
        alert("Infelizmente você não é de maior!")
        // essa função irá redirecionar o usuário para link específico
        window.location.href = "https://www.youtube.com/"
    }
})



let endereco = document.querySelector("#endereco")

endereco.addEventListener("keyup", function(){
    console.log(endereco.value.length)
    
})

endereco.addEventListener("blur", function(){
    if(endereco.value.length >= 35){
        alert("Tem muitas letras ou seu fdp")
        endereco.style.border = "1px solid red"

    }
    else{
        alert("Ta de boa menor")
        endereco.style.border = "1px solid yellow"
    }
})



let email = document.querySelector("#email")
let confirme = document.querySelector("#conf")


email.addEventListener("keyup", function(){
    confirme.value = email.value
    let minusculo = email.value.toLowerCase() //Tornando o conteúdo email minusculo

    if(minusculo.indexOf('@') == -1 || minusculo.indexOf('.') == -1){
        console.log("Email inválido")
        // email.style.border = "1px solid red"
        email.classList.add("border-danger")
        email.classList.remove("border-success")
    }
    else{
        console.log("Emai válido")
        // email.style.border = "1px solid green"
        email.classList.remove("border-danger")
        email.classList.add("border-success") 
    }
})


let senha = document.querySelector("#senha")
let btn_olho = document.querySelector(".fa-eye")

//()=>{} isto é uma arrow function, ou seja, é uma versão resumida da função anônima
btn_olho.addEventListener("click", ()=>{
    if(btn_olho.classList.contains("fa-eye")){
        // console.log("A classe existe")
        btn_olho.classList.remove("fa-eye")
        btn_olho.classList.add("fa-eye-slash")

        // setAttribute serve para trocar o atributo de uma tag
        senha.setAttribute("type", "text")
    }
    else{
        // console.log("A classe não existe")
        btn_olho.classList.remove("fa-eye-slash")
        btn_olho.classList.add("fa-eye")

        senha.setAttribute("type", "password")
        
    }
})

// PEGANDO DADOS DO CAMPO RADIO

let escolaridade = document.querySelectorAll("input[name=escolaridade]")//querySelectorAll serve para pegar mais de uma tag com a mesma class ou atributo e o sem All é só pra uma tag
let btnEscolaridade = document.querySelector("#btnEscolaridade")

btnEscolaridade.addEventListener("click", (evento)=>{
    console.log(evento)
    evento.preventDefault()//Esta função irá impedir o comportamento padrão de botão

    console.log(escolaridade[1])
})