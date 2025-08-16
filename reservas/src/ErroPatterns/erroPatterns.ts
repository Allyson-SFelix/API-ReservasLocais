export class ErroPatterns<T>{
    status:boolean;
    dados?: T | null;
    erro?:string;

    constructor(dados:T | null,erro:string,status:boolean){
        this.dados=dados;
        this.erro=erro;
        this.status=status;
    }

    static sucesso<T>(dados:T):ErroPatterns<T>{
        const resposta=new ErroPatterns(dados,"",true);
        return resposta;
    }

    static falha<T>(erro:string):ErroPatterns<T>{
        const resposta=new ErroPatterns<T>(null,erro,false);
        return resposta;
    }
}