/*
  NODE.JS
  4 OPERAÇOES MATEMATICAS BÁSICAS COM FUNCTIONS
  IF PARA VER SE O RESULTADO DA SUBTRAÇÃO É MENOR QUE ZERO
  IF PARA VER QUAL NUMERO É MAIOR ENTRE SOMA E MULTIPLICAÇAO
*/

var n1 = 1
var n2 = 0

function soma(n1,n2){
  return n1+n2
}

function sub(n1,n2){
  return n1-n2
}

function mult(n1,n2){
  return n1*n2
}

function div(n1,n2){
  return n1/n2
}

//==============================================
var s = soma(n1,n2)
var subi = sub(n1,n2)
var m = mult(n1,n2)
var d = div(n1,n2)
//==============================================

console.log(`===numeros : ${n1} e ${n2}===`)
console.log(`A soma entre ${n1} e ${n2} = ${s}`)
console.log(`A subtração entre ${n1} e ${n2} = ${subi}`)
console.log(`A multiplicação entre ${n1} e ${n2} = ${m}`)
console.log(`A divição entre ${n1} e ${n2} = ${d}`)

if(subi < 0){
  console.log('numero negativo')
}

console.log('Qual é maior?')
if(s>m){
  console.log(`soma ${s} é maior que multiplicação ${m}`)
}else if(m>s){
    console.log(`multiplicação ${m} é maior que soma ${s}`)
}else{
  console.log('resultado igual')
}