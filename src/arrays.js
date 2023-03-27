
const alunos = [
    { nome: 'Naruto', nota: 10},
    { nome: 'Tanjiro', nota: 10},
    { nome: 'Inozuke', nota: 2.5},
    { nome: 'Kazutora', nota: 3},
    { nome: 'Jinx', nota: 5},
    { nome: 'Miss Fortune', nota: 7}
];

const aprovados = (alunos) => alunos.nota >= 6;

const resultado = alunos.filter(aprovados);

console.log(resultado);