function geraDieta(){

    var dietas = [];

    let dieta = {};
    dieta.nome = 'Low Carb';

    dietas.push(new Dieta(dieta));

    let dieta = {};
    dieta.nome = 'Cetogênica';

    dietas.push(new Dieta(dieta));

    let dieta = {};
    dieta.nome = 'Proteína';

    dietas.push(new Dieta(dieta));

    let dieta = {};
    dieta.nome = 'High Carb';

    dietas.push(new Dieta(dieta));

    return dieta;

} 