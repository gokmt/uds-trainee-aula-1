/*Exercício 1-A*/
/*var nomeA = "Gustavo";
var nomeB = Gustavo;

alert(nomeA);
alert(nomeB);*/

/*Exercício 1-B*/
var nome = "Gustavo Keith Okamoto";
var idade = 22;
var sexoFeminino = false;
var peso = 100.00;

/*Exercício 2*/
alert("Olá, seu nome é " + nome + ", você tem " + idade + " anos.");

/*Exercício 3*/
if (idade <= 18) {
  alert("Novinho(a)");
}else if (idade <= 30) {
  alert("Tiozinho(a)");
}else{
  alert("Tiozão(ona)");
}

/*Exercício 4*/
var dia = new Date().getDay();
var diaSemana;
switch (dia) {
  case 0:
    diaSemana = "Domingo";
  break;
  case 1:
    diaSemana = "Segunda-Feira";
  break;
  case 2:
    diaSemana = "Terça-Feira";
  break;
  case 3:
    diaSemana = "Quarta-Feira";
  break;
  case 4:
    diaSemana = "Quinta-Feira";
  break;
  case 5:
    diaSemana = "Sexta-Feira";
  break;
  case 2:
    diaSemana = "Sábado";
  break;
}
alert(diaSemana);
