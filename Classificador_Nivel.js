const nickname = "Asta"
const nivelPoder = 8001

if (nivelPoder <= 1000) {
    classificacao = "Ferro";
} else if (nivelPoder >= 1001 && nivelPoder <= 2000) {
    classificacao = "Bronze";
} else if (nivelPoder >= 2001 && nivelPoder <= 5000) {
    classificacao = "Prata";
} else if (nivelPoder >= 5001 && nivelPoder <= 7000) {
    classificacao = "Ouro";
} else if (nivelPoder >= 7001 && nivelPoder <= 8000) {
    classificacao = "Platina";
} else if (nivelPoder >= 8001 && nivelPoder <= 9000) {
    classificacao = "Ascendente";
} else if (nivelPoder >= 9001 && nivelPoder <= 10000) {
    classificacao = "Imortal";
}  else {
    classificacao = "Radiante";
  }

 console.log("O Herói de nome " + nickname + " está no nível de " + classificacao )