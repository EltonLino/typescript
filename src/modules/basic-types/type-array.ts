//let films = ['Duna: Parte 2', 'Divertida Mente 2'];
let films: string[] = ['Duna: Parte 2', 'Divertida Mente 2'];

export function toUpperCaseStrings(arr: string[]) {
    return arr.map(value => value.toUpperCase())
}

console.log(toUpperCaseStrings(films))