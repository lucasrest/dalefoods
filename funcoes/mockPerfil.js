function geraPerfil(){
 
    var perfils = [];

    let perfil = {};
    perfil.nome = 'Dieta';
    perfil.refeicoes = geraRefeicao(1);
    let restricao = geraRestricao();
    let resultadoRestricao = [];
    resultadoRestricao.push(restricao[0]);
    perfil.restricao = resultadoRestricao;
    perfil.dieta = geraDieta()[0];

    perfils.push(perfil);


    let perfil = {};
    perfil.nome = 'Treino';
    perfil.refeicoes = geraRefeicao(1.5);
    let restricao = geraRestricao();
    let resultadoRestricao = [];
    resultadoRestricao.push(restricao[0]);
    perfil.dieta = geraDieta()[2];
    perfils.push(perfil);

    return perfils;
    
}