function validaAlimento(nome, alimento) {

    if (nome.toLowerCase() == 'low carb') {
        if (alimento.carboidrato < 10) {
            return true;
        }
        return false;
    } else if (nome.toLowerCase() == 'proteina') {
        if (alimento.proteina > 30) {
            return true;
        }
        return false;
    } else if (nome.toLowerCase() == 'cetogênea') {
        if (alimento.carboidrato < 1 && alimento.gorduraTotal > 10) {
            return true;
        }
        return false;
    } else if (nome.toLowerCase() == 'high carb') {
        if (alimento.carboidrato > 50) {
            return true;
        }
        return false;
    }

    return true;
}