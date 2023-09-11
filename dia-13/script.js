class Aluno {
  nome
  idade
  areaAtuacao
  constructor(nome, idade) {
    this.nome = nome
    this.idade = idade
  }

  apresentar() {
    console.log("Olá, meu nome é: ", this.nome, " minhha idade: ", this.idade, " e minha área de atuação é: ", this.areaAtuacao)
  }
}

console.log("======= Cadastro de Alunos =======")
let alunos = [];
let continuar = true;
let indexAluno = 0;

while (continuar) {
  let nome = prompt("Insira o nome do aluno: ");
  let idade = parseInt(prompt("Insira a idade do aluno: "));
  let aluno = new Aluno(nome, idade);

  let areaAtuacao = prompt("Insira a área de atuação do aluno: ");
  aluno.areaAtuacao = areaAtuacao;

  alunos[indexAluno] = aluno;
  let desejaContinuar = parseInt(prompt("Insira 1 caso deseje cadastrar um novo aluno"));
  if (desejaContinuar != 1) {
    continuar = false;
  } else {
    indexAluno++
  }
}