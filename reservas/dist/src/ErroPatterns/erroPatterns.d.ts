export declare class ErroPatterns<T> {
    status: boolean;
    dados: T | null;
    erro?: string;
    constructor(dados: T | null, erro: string, status: boolean);
    static sucesso<T>(dados: T): ErroPatterns<T>;
    static falha<T>(erro: string): ErroPatterns<T>;
}
