const pessoa = {
    nome: 'Mari',
    idade: 25,
    profissao: 'Developer'

}

pessoa.idade =25;

const anderson: { nome: string, idade:number, profissao: string}={
    nome: 'Anderson',
    idade: 25,
    profissao: 'Pintor'
}

const ana: { nome: string, idade:number, profissao: string}={
    nome: 'Ana',
    idade: 20,
    profissao: 'Atriz'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    Jogadora
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
    
}

interface Estudante extends Pessoa {
    materias: string[]
}

const Valeria: Pessoa = {
    nome: 'Vanessa',
    idade: 30,
    profissao: Profissao.Jogadora
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 20,
    materias: ['Matemática', 'Programação']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('-', item);
    }
}

listar(jessica.materias)