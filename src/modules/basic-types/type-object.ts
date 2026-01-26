let programmer = {
    name: 'Elton',
    age: 33
}

programmer.name = 'João'
programmer.age = 22

export function showProgrammer(programmer: {name:string, age: number}){

}

showProgrammer(programmer)
showProgrammer({name:'Maria', age: 31})