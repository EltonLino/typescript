let shoppingCart = [200.5, 150.12, '33.90', '44', 'not defined'];

export function totalize(values: (number | string)[]) {
  return values
    .map((value) => (typeof value === 'number' ? value : parseFloat(value))) // Converte todos os valores para number
    .filter((value) => !isNaN(value)) // filtrar os valores
    .reduce((acc, curr) => acc + curr, 0); //Totalizar
}

console.log(totalize(shoppingCart));
