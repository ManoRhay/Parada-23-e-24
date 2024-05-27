console.log(lista()) 
function lista() {
    let nomes = ["Mateus", "Julia", "Marcelo", "Guilherme", "Samara", "Ricardo", "Michelle", "Isabelle", "Charles", "Barbara"]
    return nomes[Math.floor(Math.random() * nomes.length)]
}