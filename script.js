var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
.then(resposta => resposta.json())
.then(e => { 
    if(e.erro) {
        throw Error('Esse cep não existe')
    }
    console.log(e)
})
.catch(erro => console.log(erro))
.finally(mensagem => console.log('processamento concluido'))
