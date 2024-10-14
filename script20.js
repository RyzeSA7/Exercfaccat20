let salarioFixo = parseFloat(prompt("Digite o salário fixo do vendedor:"))
let vendas = parseFloat(prompt("Digite o valor total das vendas efetuadas:"))

// Calcular a comissão
let comissao;
if (vendas <= 1500) {
    comissao = vendas * 0.03; // 3% sobre as vendas até R$ 1.500,00
} else {
    comissao = (1500 * 0.03) + ((vendas - 1500) * 0.05) // 3% até R$ 1.500 e 5% sobre o restante
}

// Calcular o salário total
let salarioTotal = salarioFixo + comissao

// Exibir o salário total
console.log(`O salário total do vendedor é: R$ ${salarioTotal.toFixed(2)}`)