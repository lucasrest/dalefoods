function validaAlimento(nome, alimento) {

    if (nome.toLowerCase() == 'pressão alta') {
        if (alimento.sodio < 0.01) {
            return true;
        }
        return false;
    } 

    return true;
}