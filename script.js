
const url = "https://servicodados.ibge.gov.br/api/v1/localidades/distritos";



fetch(url)
.then(response => response.json())
.then(data => {
    data.forEach(cidade => {
        if(cidade["municipio"]["microrregiao"]["mesorregiao"]["UF"]["nome"] == "Rio de Janeiro"){
            const cidadecontainer = document.createElement("div")
            const title = document.createElement("p");
            title.textContent = `nome da cidade: ${cidade["nome"]}`;
            cidadecontainer.appendChild(title);
            document.getElementById("cidades").appendChild(cidadecontainer);
        }
        console.log(cidade["municipio"]["microrregiao"]["mesorregiao"]["UF"]["nome"])
    })
})
.catch(error=>console.error("Erro no servidor:", error))
