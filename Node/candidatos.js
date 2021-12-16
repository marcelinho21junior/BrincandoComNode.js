/*
  NODE.JS
  Lista de candidatos; pesquisar os candidatos por páises e por maioridade de idade
*/

const candidatos = [
    {nome:'marcelo',idade:11,tecnologia:'react',cidade:'Italia'},
    {nome:'lisandra',idade:16,tecnologia:'java',cidade:'Brasil'},
    {nome:'rafaela',idade:19,tecnologia:'css',cidade:'Inglaterra'},
    {nome:'paula',idade:28,tecnologia:'javascript',cidade:'Italia'}
  ]
  
  var filter = candidatos.filter((c) => {
    return c.cidade ==='Italia'
  })
  
  var maior = candidatos.filter((c) => {
    return c.idade >=18
  })
  
  console.log('=====================================')
  console.log('cidade')
  console.log(filter)
  console.log('=====================================')
  console.log('Maior que 18')
  console.log(maior)