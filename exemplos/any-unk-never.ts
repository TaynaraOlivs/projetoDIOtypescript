let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste'
anyEstaDeVolta = 5;

let stringTest: string = 'verificar'
stringTest = anyEstaDeVolta;


let unknownValor: unknown;
unknownValor = 3;
unknownValor= 'opa';
unknownValor= true;

let stringTest2: string = 'Ola';



if(typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}


function jogaErro(erro: string, codigo: number) {
    throw {error: erro, code: codigo};
}

jogaErro('ERRO', 500)