function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada :
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado<p/>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
        
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let Título = "";
    let Descrição = "";
    let Tags = "";

    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
        Título = dado.Título.toLowerCase()
        Descrição = dado.Descrição.toLowerCase()
        Tags = dado.Tags.toLowerCase()

    // se Título includes campoPesquisa
    // então, faça...
        if (Título.includes(campoPesquisa) || Descrição.includes(campoPesquisa) || Tags.includes(campoPesquisa)) {
        // Cria um novo elemento
        // Constrói o HTML para cada item do resultado da pesquisa, formatando os dados do objeto
            resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.Título}</a>
            </h2>
            <p class="descricao-meta">${dado.Descrição}</p>
            <a href=${dado.Link} target="_blank">Mais informações</a>
        </div>
    `;
    }   
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado. Você precisa digitar o nome de um equipamento</p>"
    }

    // Atribui o HTML gerado para a seção de resultados, substituindo o conteúdo anterior
    section.innerHTML = resultados;
}