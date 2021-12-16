console.log('============Filtro com cachorros=============')

var cachorro = [
  {raça:'beagle',idade:1,porte:'medio'},
  {raça:'dalmata',idade:8,porte:'grande'},
  {raça:'beagle',idade:3,porte:'medio'},
  {raça:'bace',idade:8,porte:'pequeno'},
  {raça:'poodle',idade:3,porte:'medio'},
  {raça:'shitzu',idade:8,porte:'pequeno'},
  {raça:'linguiça',idade:12,porte:'pequeno'}  
]

var idadecachorro = cachorro.filter((c) => {
  var idad = 1
  return c.idade<=idad
})

var cachorropequeno = cachorro.filter((c) => {
  return c.porte ==='pequeno'
})

var cachorromedio = cachorro.filter((c) => {
  return c.porte === "medio"
})

var cachorrogrande = cachorro.filter((c) => {
  return c.porte === "grande"
})

console.log('pequeno')
console.log(cachorropequeno)
console.log('======================================')
console.log('medio')
console.log(cachorromedio)
console.log('======================================')
console.log('grande')
console.log(cachorrogrande)
console.log('======================================')
console.log('idade')
console.log(idadecachorro)