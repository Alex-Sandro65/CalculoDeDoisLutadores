
function solucao(peso1, peso2) {
  if (peso1 < 55 || peso2 < 55) {
    return "NAO PODEM LUTAR";
//Se o peso do lutador 1 for menor do que 55 OU o peso do lutador 2 for menor que 55, então eles não podem lutar.

  } else if ((peso1 >= 55 && peso1 < 65) && (peso2 >= 55 && peso2 < 65)) {
    return "PODEM LUTAR";
//Caso contrário, se ambos os pesos estiverem entre 55 e 65, ambos os lutadores podem lutar.

  } else if ((peso1 >= 65 && peso1 < 75) && (peso2 >= 65 && peso2 < 75)) {
    return "PODEM LUTAR";
//Caso contrário, se ambos os pesos estiverem entre 65 e 75, ambos os lutadores podem lutar.

  } else if ((peso1 >= 75 && peso1 < 85) && (peso2 >= 75 && peso2 < 85)) {
    return "PODEM LUTAR";
//Caso contrário, se ambos os pesos estiverem entre 75 e 85, ambos os lutadores podem lutar.
    
  } else if (peso1 >= 85 && peso2 >= 85) {
    return "PODEM LUTAR";
//Caso contrário, se ambos os pesos forem iguais ou maiores que 85, ambos os lutadores podem lutar.

  } else {
    return "NAO PODEM LUTAR";
//Se nenhuma das condições anteriores for atendida, os lutadores não podem lutar.    
  }
}