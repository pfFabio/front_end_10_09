const url = "https://servicodados.ibge.gov.br/api/v1/localidades/distritos";


function listacidades(){
    let cidades = document.getElementById("cidades")
    document.getElementById("cidades").replaceChildren()
    cidades.innerHTML = "agora selecione uma cidade: "
   
    fetch(url)
    .then(response => response.json())
    .then(data => {

        const cidadecontainer = document.createElement("div")
        const select = document.createElement("select");
        data.forEach(cidade => {
            if(cidade["municipio"]["microrregiao"]["mesorregiao"]["UF"]["sigla"] == document.getElementById("estados").value){
                const option = document.createElement("option");
                option.innerHTML = `${cidade["nome"]}`;
                cidadecontainer.appendChild(select);
                select.appendChild(option);
                cidades.appendChild(cidadecontainer);
            }
        })
    })
    .catch(error=>console.error("Erro no servidor:", error))
}
