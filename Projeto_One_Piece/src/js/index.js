/*OBJETIVO 1 - Quando clicar no botão do personagem na lista, marcar o botão como selecionado*/
/*OBJETIVO 2 - Quando clicar no botão do personagem mostrar as informações do personagem*/

/*passo 1 (OBJETIVO 1) - Pegar os botões no JS para poder verificar quando o usuário clicar em um deles*/
const botoes = document.querySelectorAll('.botao'); /*Selecionar elementos do html pela classe*/

/*passo 1 (OBJETIVO 2)- Pegar os personagens no JS para mostrar ou esconder ele*/
const personagens = document.querySelectorAll('.personagem');

botoes.forEach((botao, indice) => { /*ForEach, percorre a lista e pega cada elemento separado e aplica a função*/

    /*passo 3 (OBJETIVO 1) - Verificar se já exiaste um botão selecionado, se sim, devemos remover a seleção dele */
    botao.addEventListener('click', () => { /*Para cada elemento botão, iremos ter um log para saber quando foi clicado*/

        desselecionarBotao();/*Remover a class de botão selecionado, no botão que não foi selecionado(click)*/

        /*passo 3 (OBJETIVO 2 )- Verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele*/
        desselecionarPersonagem();

        /*passo 2 (OBJETIVO 1)- Adicinar a classe "selecionado" no botão que o usuário clicou*/
        botao.classList.add('selecionado');/*Verificar a class do botão clicado, e adicionar a class selecionado a ele */

        /*passo 2 (OBJETIVO 2 )- Adicionar a classe selecionado no personagem que o usuário selecionou*/
        personagens[indice].classList.add('selecionado');
    });
});


function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector('.personagem.selecionado');
    personagemSelecionado.classList.remove('selecioando');
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector('.botao.selecionado'); /*Busca o elemento no HTML que possui a class em questão*/
    botaoSelecionado.classList.remove('selecionado');
}

