function geraRestricao(){

    var restricoes = [];

    let restricao = {};
    restricao.nome = 'Diabete';

    restricoes.push(new Restricao(restricao));

    let restricao = {};
    restricao.nome = 'Pressão alta';

    restricoes.push(new Restricao(restricao));


    let restricao = {};
    restricao.nome = 'Mariscos';

    restricoes.push(new Restricao(restricao));


    let restricao = {};
    restricao.nome = 'Castanha';

    restricoes.push(new Restricao(restricao));


    let restricao = {};
    restricao.nome = 'Glutén';

    restricoes.push(new Restricao(restricao));


    return restricoes;

}