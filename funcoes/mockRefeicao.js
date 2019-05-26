function geraRefeicao(base) {

    var refeicoes = [];

    let refeicao = {};

    refeicao.nome = 'Refeição 1';
    refeicao.horarioInicial = '00:00';
    refeicao.horarioFinal = '10:00';
    refeicao.caloria = 500 * base;

    refeicoes.push(refeicao);

    let refeicao = {};

    refeicao.nome = 'Refeição 2';
    refeicao.horarioInicial = '10:01';
    refeicao.horarioFinal = '18:00';
    refeicao.caloria = 600 * base;


    refeicoes.push(refeicao);

    let refeicao = {};

    refeicao.nome = 'Refeição 3';
    refeicao.horarioInicial = '18:01';
    refeicao.horarioFinal = '23:59';
    refeicao.caloria = 700 * base;


    refeicoes.push(refeicao);

    return refeicoes;
}