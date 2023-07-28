async function buscaEndereco(cep) {
   try{
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConverse = await consultaCEP.json();
        if(consultaCEPConverse.erro) {
            throw Error ('CEP inexistente');
        }
        console.log(consultaCEPConverse)
        return consultaCEPConverse;
   }catch(erro) {
    console.log(erro)
   }
}
let ceps = ['01001000','36704122']
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
Promise.all(conjuntoCeps).then(respostas => console.log(respostas));