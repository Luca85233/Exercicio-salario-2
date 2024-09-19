function Executar1008(){
    let Id, valorHora, salario;
    Id = Number (prompt("Digite seu ID:"));
    horas = Number (prompt("Quantas horas trabalhou?"));
    valorHora = Number (prompt("Quanto você ganha por hora?"));

    salario = horas * valorHora
    alert("ID: "+ Id +"\nSalario: R$" + salario.toFixed(2))
}