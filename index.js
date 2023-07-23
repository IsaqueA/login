const entrar = document.getElementById("entrar");
entrar.addEventListener("click", () => {
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    if (login === "admin" && senha === "admin") {
        alert("Sucesso!")
    } else {
        alert("Acesso negado!")
    }
})

const addClass = document.querySelector(".ajuda");
const esqueceuASenha = document.getElementById("esqueceuASenha");
esqueceuASenha.addEventListener("click", () => { 
    addClass.classList.add("ajuda-ativo");
})

const continuar = document.getElementById("continuar");
continuar.addEventListener("click", () => {
    addClass.classList.remove("ajuda-ativo");
})