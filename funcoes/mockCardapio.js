

function gerarCardapio(){

    var cardapio = {};
    var restaurante = mockRestaurante();
    var alimentos = mockAlimentos();

    cardapio.restaurante = restaurante;
    cardapio.alimentos = alimentos;

    return new Cardapio(cardapio);

}


function mockAlimentos(){
    var alimentos = [];


    let alimento = {};

    alimento.nome = 'WHOPPER';
    alimento.descricao = 'Sanduiche delicioso';
    alimento.caloria = 677;
    alimento.disponivel = true;
    alimento.preco = 20.10;
    alimento.carboidrato = 54;
    alimento.proteina = 37;
    alimento.gorduraTolal = 35;
    alimento.gorduraSaturada = 19;
    alimento.gorduraTrans = 0;
    alimento.fibraAlimentar = 2;
    alimento.sodio = 0.01457;

    alimentos.push(new Alimento(alimento));

    alimento = {};

    alimento.nome = 'WHOPPER Duplo';
    alimento.descricao = 'Sanduiche delicioso';
    alimento.caloria = 996;
    alimento.disponivel = true;
    alimento.preco = 22.10;
    alimento.carboidrato = 54;
    alimento.proteina = 64;
    alimento.gorduraTolal = 59;
    alimento.gorduraSaturada = 27;
    alimento.gorduraTrans = 0;
    alimento.fibraAlimentar = 2;
    alimento.sodio = 0.01551;

    alimentos.push(new Alimento(alimento));


    alimento = {};

    alimento.nome = 'WHOPPER Jr';
    alimento.descricao = 'Sanduiche delicioso';
    alimento.caloria = 369;
    alimento.disponivel = true;
    alimento.preco = 12.10;
    alimento.carboidrato = 32;
    alimento.proteina = 21;
    alimento.gorduraTolal = 18;
    alimento.gorduraSaturada = 1;
    alimento.gorduraTrans = 0;
    alimento.fibraAlimentar = 2;
    alimento.sodio = 0.00631;

    alimentos.push(new Alimento(alimento));

    alimento = {};


    alimento.nome = 'WHOPPER Furioso';
    alimento.descricao = 'Sanduiche delicioso';
    alimento.caloria = 838;
    alimento.disponivel = true;
    alimento.preco = 15.10;
    alimento.carboidrato = 59;
    alimento.proteina = 39;
    alimento.gorduraTolal = 42;
    alimento.gorduraSaturada = 18;
    alimento.gorduraTrans = 0;
    alimento.fibraAlimentar = 2;
    alimento.sodio = 0.2183;

    alimentos.push(new Alimento(alimento));

    alimento = {};

    alimento.nome = 'Hambúrguer';
    alimento.descricao = 'Sanduiche delicioso';
    alimento.caloria = 297;
    alimento.disponivel = true;
    alimento.preco = 5.20;
    alimento.carboidrato = 31;
    alimento.proteina = 19;
    alimento.gorduraTolal = 12;
    alimento.gorduraSaturada = 4;
    alimento.gorduraTrans = 0;
    alimento.fibraAlimentar = 1;
    alimento.sodio = 0.0533;

    alimentos.push(new Alimento(alimento));
    alimento = {};

    alimento.nome = 'Cheeseburger';
    alimento.descricao = 'Sanduiche delicioso';
    alimento.caloria = 339;
    alimento.disponivel = true;
    alimento.preco = 7.20;
    alimento.carboidrato = 31;
    alimento.proteina = 21;
    alimento.gorduraTolal = 15;
    alimento.gorduraSaturada = 6;
    alimento.gorduraTrans = 1;
    alimento.fibraAlimentar = 1;
    alimento.sodio = 0.0726;
    
    alimentos.push(new Alimento(alimento));

    alimento = {};

    alimento.nome = 'Cheeseburger Bacon';
    alimento.descricao = 'Sanduiche delicioso';
    alimento.caloria = 379;
    alimento.disponivel = true;
    alimento.preco = 9.20;
    alimento.carboidrato = 31;
    alimento.proteina = 24;
    alimento.gorduraTolal = 18;
    alimento.gorduraSaturada = 7;
    alimento.gorduraTrans = 1;
    alimento.fibraAlimentar = 1;
    alimento.sodio = 0.0878;
    
    alimentos.push(new Alimento(alimento));

    alimento = {};

    alimento.nome = 'Rodeio';
    alimento.descricao = 'Sanduiche delicioso';
    alimento.caloria = 398;
    alimento.disponivel = true;
    alimento.preco = 11.20;
    alimento.carboidrato = 40;
    alimento.proteina = 18;
    alimento.gorduraTolal = 19;
    alimento.gorduraSaturada = 8;
    alimento.gorduraTrans = 0;
    alimento.fibraAlimentar = 2;
    alimento.sodio = 0.0785;
    
    alimentos.push(new Alimento(alimento));

    alimento = {};

    alimento.nome = 'King Duplo';
    alimento.descricao = 'Sanduiche delicioso';
    alimento.caloria = 518;
    alimento.disponivel = true;
    alimento.preco = 12.20;
    alimento.carboidrato = 31;
    alimento.proteina = 31;
    alimento.gorduraTolal = 30;
    alimento.gorduraSaturada = 14;
    alimento.gorduraTrans = 0;
    alimento.fibraAlimentar = 2;
    alimento.sodio = 0.0868;

    alimentos.push(new Alimento(alimento));

    alimento = {};

    alimento.nome = 'Stacker Triplo';
    alimento.descricao = 'Sanduiche delicioso';
    alimento.caloria = 1529;
    alimento.disponivel = true;
    alimento.preco = 18.20;
    alimento.carboidrato = 35;
    alimento.proteina = 67;
    alimento.gorduraTolal = 124;
    alimento.gorduraSaturada = 53;
    alimento.gorduraTrans = 3;
    alimento.fibraAlimentar = 1.4;
    alimento.sodio = 0.2937;

    alimentos.push(new Alimento(alimento));

    alimento = {};


    alimento.nome = 'Cheddar';
    alimento.descricao = 'Sanduiche delicioso';
    alimento.caloria = 321;
    alimento.disponivel = true;
    alimento.preco = 8.20;
    alimento.carboidrato = 28;
    alimento.proteina = 17;
    alimento.gorduraTolal = 15;
    alimento.gorduraSaturada = 7;
    alimento.gorduraTrans = 0;
    alimento.fibraAlimentar = 3;
    alimento.sodio = 0.0558;

    alimentos.push(new Alimento(alimento));

    alimento = {};

    alimento.nome = 'Cheddar Duplo';
    alimento.descricao = 'Sanduiche delicioso';
    alimento.caloria = 410;
    alimento.disponivel = true;
    alimento.preco = 9.20;
    alimento.carboidrato = 28;
    alimento.proteina = 20;
    alimento.gorduraTolal = 24;
    alimento.gorduraSaturada = 19;
    alimento.gorduraTrans = 1;
    alimento.fibraAlimentar = 1.7;
    alimento.sodio = 0.0540;
    
    alimentos.push(new Alimento(alimento));

    alimento = {};

    alimento.nome = 'Cheddar Triplo';
    alimento.descricao = 'Sanduiche delicioso';
    alimento.caloria = 659;
    alimento.disponivel = true;
    alimento.preco = 14.20;
    alimento.carboidrato = 32;
    alimento.proteina = 40;
    alimento.gorduraTolal = 41;
    alimento.gorduraSaturada = 19;
    alimento.gorduraTrans = 0;
    alimento.fibraAlimentar = 3;
    alimento.sodio = 0.0990;

    alimentos.push(new Alimento(alimento));

    alimento = {};

    alimento.nome = 'Picanha';
    alimento.descricao = 'Sanduiche delicioso';
    alimento.caloria = 922;
    alimento.disponivel = true;
    alimento.preco = 12.50;
    alimento.carboidrato = 53;
    alimento.proteina = 44;
    alimento.gorduraTolal = 55;
    alimento.gorduraSaturada = 26;
    alimento.gorduraTrans = 1.7;
    alimento.fibraAlimentar = 3;
    alimento.sodio = 0.1331;
    
    alimentos.push(new Alimento(alimento));

    alimento = {};

    alimento.nome = 'Picanha Barbecue Bacon';
    alimento.descricao = 'Sanduiche delicioso';
    alimento.caloria = 1158;
    alimento.disponivel = true;
    alimento.preco = 29.50;
    alimento.carboidrato = 56;
    alimento.proteina = 49;
    alimento.gorduraTolal = 81;
    alimento.gorduraSaturada = 33;
    alimento.gorduraTrans = 1.7;
    alimento.fibraAlimentar = 3.5;
    alimento.sodio = 0.1215;

    alimentos.push(new Alimento(alimento));
    alimento = {};

    alimento.nome = 'Picanha Barbecue Bacon';
    alimento.descricao = 'Sanduiche delicioso';
    alimento.caloria = 1158;
    alimento.disponivel = true;
    alimento.preco = 29.50;
    alimento.carboidrato = 56;
    alimento.proteina = 49;
    alimento.gorduraTolal = 81;
    alimento.gorduraSaturada = 33;
    alimento.gorduraTrans = 1.7;
    alimento.fibraAlimentar = 3.5;
    alimento.sodio = 0.1215;

    alimentos.push(new Alimento(alimento));

    alimento = {};

    alimento.nome = 'Picanha Cheddar Bacon';
    alimento.descricao = 'Sanduiche delicioso';
    alimento.caloria = 762;
    alimento.disponivel = true;
    alimento.preco = 32.50;
    alimento.carboidrato = 36;
    alimento.proteina = 39;
    alimento.gorduraTolal = 51;
    alimento.gorduraSaturada = 23;
    alimento.gorduraTrans = 0;
    alimento.fibraAlimentar = 2;
    alimento.sodio = 0.0950;
    
    alimentos.push(new Alimento(alimento));

    alimento = {};

    alimento.nome = 'Big King ®';
    alimento.descricao = 'Sanduiche delicioso';
    alimento.caloria = 806;   // calorias em kcal
    alimento.disponivel = true;
    alimento.preco = 25.50;
    alimento.carboidrato = 148;
    alimento.proteina = 35;
    alimento.gorduraTolal = 50;
    alimento.gorduraSaturada = 22;
    alimento.gorduraTrans = 1;
    alimento.fibraAlimentar = 3;
    alimento.sodio = 1.174;

    alimentos.push(new Alimento(alimento));

    alimento = {};

    alimento.nome = 'Mega Stacker 2.0';
    alimento.descricao = 'Sanduiche delicioso';
    alimento.caloria = 1.100;   // calorias em kcal
    alimento.disponivel = true;
    alimento.preco = 32.50;
    alimento.carboidrato = 43;
    alimento.proteina = 66;
    alimento.gorduraTolal = 73;
    alimento.gorduraSaturada = 33;
    alimento.gorduraTrans = 0;
    alimento.fibraAlimentar = 3;
    alimento.sodio = 1.602;
    
    alimentos.push(new Alimento(alimento));

    alimento = {};

    alimento.nome = 'Mega Stacker 3.0';
    alimento.descricao = 'Sanduiche delicioso';
    alimento.caloria = 1.512;   // calorias em kcal
    alimento.disponivel = true;
    alimento.preco = 29.90;
    alimento.carboidrato = 46;
    alimento.proteina = 96;
    alimento.gorduraTolal = 104;
    alimento.gorduraSaturada = 49;
    alimento.gorduraTrans = 0;
    alimento.fibraAlimentar = 3;
    alimento.sodio = 2.047;

    alimentos.push(new Alimento(alimento));

    alimento = {};

    alimento.nome = 'Mega Stacker 4.0';
    alimento.descricao = 'Sanduiche delicioso';
    alimento.caloria = 1.924;   // calorias em kcal
    alimento.disponivel = true;
    alimento.preco = 31.50;
    alimento.carboidrato = 48;
    alimento.proteina = 126;
    alimento.gorduraTolal = 135;
    alimento.gorduraSaturada = 64;
    alimento.gorduraTrans = 0;
    alimento.fibraAlimentar = 3;
    alimento.sodio = 2.492;

    alimentos.push(new Alimento(alimento));

    alimento = {};

    alimento.nome = 'Chicken Crisp';
    alimento.descricao = 'Sanduiche delicioso';
    alimento.caloria = 667;   // calorias em kcal
    alimento.disponivel = true;
    alimento.preco = 21.90;
    alimento.carboidrato = 68;
    alimento.proteina = 35;
    alimento.gorduraTolal = 31;
    alimento.gorduraSaturada = 7;
    alimento.gorduraTrans = 0;
    alimento.fibraAlimentar = 4;
    alimento.sodio = 1.403;

    alimentos.push(new Alimento(alimento));

    alimento = {};

    alimento.nome = 'Chicken Jr.';
    alimento.descricao = 'Sanduiche delicioso';
    alimento.caloria = 513;   // calorias em kcal
    alimento.disponivel = true;
    alimento.preco = 18.90;
    alimento.carboidrato = 55;
    alimento.proteina = 16;
    alimento.gorduraTolal = 25;
    alimento.gorduraSaturada = 6;
    alimento.gorduraTrans = 0;
    alimento.fibraAlimentar = 3;
    alimento.sodio = 991;

    alimentos.push(new Alimento(alimento));

    alimento = {};

    alimento.nome = 'BK ® Chicken';
    alimento.descricao = 'Chicken crocante';
    alimento.caloria = 191;   // calorias em kcal
    alimento.disponivel = true;
    alimento.preco = 9.90;
    alimento.carboidrato = 12;
    alimento.proteina = 12;
    alimento.gorduraTolal = 10;
    alimento.gorduraSaturada = 3;
    alimento.gorduraTrans = 0;
    alimento.fibraAlimentar = 1;
    alimento.sodio = 350;

    alimentos.push(new Alimento(alimento));

    alimento = {};

    alimento.nome = 'Chicken Sandwich';
    alimento.descricao = 'Chicken crocante';
    alimento.caloria = 609;   // calorias em kcal
    alimento.disponivel = true;
    alimento.preco = 12.90;
    alimento.carboidrato = 53;
    alimento.proteina = 27;
    alimento.gorduraTolal = 32;
    alimento.gorduraSaturada = 8;
    alimento.gorduraTrans = 0;
    alimento.fibraAlimentar = 3;
    alimento.sodio = 1.429;

    alimentos.push(new Alimento(alimento));

    alimento = {};

    alimento.nome = 'Chicken Crisp Barbecue Bacon';
    alimento.descricao = 'Chicken Barbecue Bacon';
    alimento.caloria = 600;   // calorias em kcal
    alimento.disponivel = true;
    alimento.preco = 19.90;
    alimento.carboidrato = 56;
    alimento.proteina = 33;
    alimento.gorduraTolal = 26;
    alimento.gorduraSaturada = 10;
    alimento.gorduraTrans = 0;
    alimento.fibraAlimentar = 5;
    alimento.sodio = 1.901;

    alimentos.push(new Alimento(alimento));

    alimento = {};

    alimento.nome = 'Coxinha Fries';
    alimento.descricao = 'Coxinhas gostosas';
    alimento.caloria = 337.63;   // calorias em kcal
    alimento.disponivel = true;
    alimento.preco = 8.90;
    alimento.carboidrato = 50;
    alimento.proteina = 12.94;
    alimento.gorduraTolal = 3.67;
    alimento.gorduraSaturada = 1.8;
    alimento.gorduraTrans = 0;
    alimento.fibraAlimentar = 2.74;
    alimento.sodio = 1.406;

    alimentos.push(new Alimento(alimento));

    alimento = {};

    alimento.nome = 'Veggie Burger';
    alimento.descricao = 'Delicioso Hamburguer Vegetal';
    alimento.caloria = 429;   // calorias em kcal
    alimento.disponivel = true;
    alimento.preco = 35.90;
    alimento.carboidrato = 148;
    alimento.proteina = 18;
    alimento.gorduraTolal = 16;
    alimento.gorduraSaturada = 11;
    alimento.gorduraTrans = 0;
    alimento.fibraAlimentar = 6;
    alimento.sodio = 935;

    alimentos.push(new Alimento(alimento));

    alimento = {};

    alimento.nome = 'Batata Frita';
    alimento.descricao = 'Batata deliciosa';
    alimento.caloria = 318;   // calorias em kcal
    alimento.disponivel = true;
    alimento.preco = 16.90;
    alimento.carboidrato = 37;
    alimento.proteina = 5;
    alimento.gorduraTolal = 16;
    alimento.gorduraSaturada = 5;
    alimento.gorduraTrans = 0;
    alimento.fibraAlimentar = 5;
    alimento.sodio = 565;

    alimentos.push(new Alimento(alimento));

    alimento = {};

    alimento.nome = 'Onion Rings';
    alimento.descricao = 'Delicioso Onion';
    alimento.caloria = 319;   // calorias em kcal
    alimento.disponivel = true;
    alimento.preco = 22.90;
    alimento.carboidrato = 36;
    alimento.proteina = 5;
    alimento.gorduraTolal = 17;
    alimento.gorduraSaturada = 4;
    alimento.gorduraTrans = 0;
    alimento.fibraAlimentar = 4;
    alimento.sodio = 570;

    alimentos.push(new Alimento(alimento));

    alimento = {};

    alimento.nome = 'Trio Supremo';
    alimento.descricao = 'Delicioso';
    alimento.caloria = 840;   // calorias em kcal
    alimento.disponivel = true;
    alimento.preco = 12.90;
    alimento.carboidrato = 84;
    alimento.proteina = 26;
    alimento.gorduraTolal = 44;
    alimento.gorduraSaturada = 12;
    alimento.gorduraTrans = 0.4;
    alimento.fibraAlimentar = 9.4;
    alimento.sodio = 1.386;

    alimentos.push(new Alimento(alimento));

    alimento = {};

    alimento.nome = 'Batata Suprema';
    alimento.descricao = 'Delicioso';
    alimento.caloria = 368;   // calorias em kcal
    alimento.disponivel = true;
    alimento.preco = 15.90;
    alimento.carboidrato = 36;
    alimento.proteina = 8.9;
    alimento.gorduraTolal = 20;
    alimento.gorduraSaturada = 6.4;
    alimento.gorduraTrans = 0.4;
    alimento.fibraAlimentar = 3.4;
    alimento.sodio = 337;

    alimentos.push(new Alimento(alimento));

    alimento = {};

    alimento.nome = 'Batata Furiosa';
    alimento.descricao = ' Batata Deliciosa';
    alimento.caloria = 604;   // calorias em kcal
    alimento.disponivel = true;
    alimento.preco = 11.90;
    alimento.carboidrato = 61;
    alimento.proteina = 6.7;
    alimento.gorduraTolal = 26;
    alimento.gorduraSaturada = 6.5;
    alimento.gorduraTrans = 0;
    alimento.fibraAlimentar = 4.8;
    alimento.sodio = 1.064;

    alimentos.push(new Alimento(alimento));

    alimento = {};

    alimento.nome = 'Maçã';
    alimento.descricao = ' Maçã';
    alimento.caloria = 59;   // calorias em kcal
    alimento.disponivel = true;
    alimento.preco = 3.90;
    alimento.carboidrato = 15.3;
    alimento.proteina = 0.2;
    alimento.gorduraTolal = 0;
    alimento.gorduraSaturada = 0;
    alimento.gorduraTrans = 0;
    alimento.fibraAlimentar = 2.7;
    alimento.sodio = 0;

    alimentos.push(new Alimento(alimento));

    alimento = {};

    alimento.nome = 'Iogurte de Morango';
    alimento.descricao = ' Iogurte';
    alimento.caloria = 152;   // calorias em kcal
    alimento.disponivel = true;
    alimento.preco = 5.90;
    alimento.carboidrato = 16;
    alimento.proteina = 4.9;
    alimento.gorduraTolal = 7.5;
    alimento.gorduraSaturada = 4.9;
    alimento.gorduraTrans = 0;
    alimento.fibraAlimentar = 0;
    alimento.sodio = 40;

    alimentos.push(alimento); 

    return alimentos;
}

function mockRestaurante(){
    var restaurante = {};

    restaurante.horarioAbertura = '08:00';
    restaurante.horarioFechamento = '23:00';
    restaurante.nome = 'Burger King';
    restaurante.descricao = 'Rede fast food';
    restaurante.endereco = 'Al Rio Negro 161';
    restaurante.cep = '06414-025';
    restaurante.bairro = 'Alphaville';
    restaurante.cidade = 'Barueri';
    restaurante.estado = 'SP';
    restaurante.email = 'admin@bk.com';

    return new Restaurante(restaurante);
}