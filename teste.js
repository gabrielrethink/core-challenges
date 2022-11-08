// let texto =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

// let queries = ["a", "em", "i", "el"];
// let count = [];
// for (let index = 0; index < queries.length; index++) {
//   count.push({ [queries[index]]: 0 });
// }

// queries.forEach((query, i) => {
//   let aux = texto;
//   let index = 0;
//   while (aux.includes(query)) {
//     aux = aux.replace(query, "");
//     index++;
//   }
//   count[i] = { [query]: index };
// });

// let resposta = count.sort(
//   (value1, value2) => value2[Object.keys(value2)] - value1[Object.keys(value1)]
// );

// resposta = resposta.splice(0, 2);
// let resposta2 = [];
// for (const iterator of resposta) {
//   for (const key in iterator) {
//     resposta2.push(key);
//   }
// }
// console.log(resposta2);

// const assinante = [true, false];
// minutos_assistidos = [60, 120];

// horas_assistidos = minutos_assistidos.map((horas) => {
//   return Math.ceil(horas / 60);
// });

// let espectadores = horas_assistidos.map((item, index) => {
//   return { assinante: assinante[index], horas: item };
// });

// espectadores = espectadores.map((espectador) => {
//   if (espectador.assinante) {
//     return { ...espectador, horas: espectador.horas * 2 };
//   } else {
//     return { ...espectador };
//   }
// });

// const totalHoras = espectadores.reduce(
//   (previousValue, currentValue) => previousValue + currentValue.horas,
//   0
// );

// let valor = 100 / totalHoras;

// let response = espectadores.map((espectador) => {
//   return espectador.horas * valor;
// });

// console.log(response);

// let numero = 123455;
// let numeroOculto = 235;

// let aux = String(numeroOculto);

// numero = String(numero).split("");
// numeroOculto = String(numeroOculto).split("");

// numero.forEach((elemet, index) => {
//   if (!numeroOculto.includes(elemet)) {
//     numero.splice(index, 1);
//   }
// });

// numero = String(numero.join(""));
// let verify = false;

// aux.split().forEach((element) => {
//   if (numero.includes(element)) {
//     verify = true;
//   }
// });

// console.log(verify);
