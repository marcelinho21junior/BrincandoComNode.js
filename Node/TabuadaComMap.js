/*
Tabuada com map
*/

var numeros = [0,1,2,3,4,5,6,7,8,9,10]

const map = numeros.map((n) => {
  let numeroTabuada = 21
  return `${n} * ${numeroTabuada} = ${numeroTabuada*n}`
})

console.log(map)