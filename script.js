async function buscaEndereco(cep) {
   try{
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConverse = await consultaCEP.json();
        if(consultaCEPConverse.erro) {
            throw Error ('CEP inexistente');
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        var bairro = document.getElementById('bairro');
        var complemento = document.getElementById('complemento');
        
        cidade.value = consultaCEPConverse.localidade;
        logradouro.value = consultaCEPConverse.logradouro;
        estado.value = consultaCEPConverse.uf;
        bairro.value = consultaCEPConverse.bairro;
        complemento.value = consultaCEPConverse.complemento;
        
        console.log(consultaCEPConverse)
        return consultaCEPConverse;
   }catch(erro) {
    console.log(erro)
   }
}
var cep = document.getElementById('cep');
cep.addEventListener("focusout", ()=> buscaEndereco(cep.value));